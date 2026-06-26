import { createClient } from '@supabase/supabase-js';
import fs from 'fs/promises';
import path from 'path';

try {
  process.loadEnvFile();
} catch (e) {}

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey || supabaseServiceKey === 'your_service_role_key') {
  console.warn("[Warning] Supabase credentials missing. Skipping external image downloading.");
  process.exit(0);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const targetDir = 'public/assets/images/resources';

async function run() {
  try {
    await fs.mkdir(targetDir, { recursive: true });
    
    // Fetch resources with external preview images
    const { data: resources, error } = await supabase
      .from('resources')
      .select('slug, preview_image')
      .like('preview_image', 'http%');
      
    if (error) {
      throw error;
    }
    
    console.log(`Found ${resources.length} resources with external preview images.`);
    
    let downloadedCount = 0;
    let failedCount = 0;
    
    for (const resource of resources) {
      const { slug, preview_image } = resource;
      const fileExtension = '.jpg';
      const fileName = `${slug}${fileExtension}`;
      const filePath = path.join(targetDir, fileName);
      const dbPath = `/assets/images/resources/${fileName}`;
      
      console.log(`Downloading image for ${slug} from ${preview_image}...`);
      
      try {
        const response = await fetch(preview_image);
        if (!response.ok) {
          throw new Error(`HTTP status code: ${response.status}`);
        }
        
        const buffer = Buffer.from(await response.arrayBuffer());
        await fs.writeFile(filePath, buffer);
        console.log(`- Saved image to ${filePath} (${buffer.length} bytes)`);
        
        // Update preview_image in database
        const { error: updateError } = await supabase
          .from('resources')
          .update({ preview_image: dbPath })
          .eq('slug', slug);
          
        if (updateError) {
          throw updateError;
        }
        console.log(`- Updated Supabase record for ${slug} to use local path: ${dbPath}`);
        downloadedCount++;
      } catch (err) {
        console.warn(`[Warning] Failed to download or update image for ${slug}: ${err.message}`);
        failedCount++;
      }
    }
    
    console.log(`\n--- Summary ---`);
    console.log(`Successfully downloaded: ${downloadedCount}`);
    console.log(`Failed: ${failedCount}`);
  } catch (err) {
    console.error('Fatal error in image downloader:', err);
    process.exit(1);
  }
}

run();
