import fs from 'fs';
import path from 'path';

// A simple script to search for all HTML files in dist/client and validate JSON-LD tags
const getHtmlFiles = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(file));
    } else if (file.endsWith('.html')) {
      results.push(file);
    }
  });
  return results;
};

const htmlFiles = getHtmlFiles('dist/client');

console.log(`Checking ${htmlFiles.length} HTML files for JSON-LD validation...`);

let errorsCount = 0;
let validCount = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  
  // Extract all <script type="application/ld+json">...</script> contents
  const regex = /<script\s+[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    const jsonText = match[1].trim();
    if (!jsonText) continue;
    
    try {
      const parsed = JSON.parse(jsonText);
      validCount++;
    } catch (e) {
      errorsCount++;
      console.error(`\n[ERROR] Invalid JSON-LD in file: ${file}`);
      console.error(`Error details: ${e.message}`);
      console.error(`Raw JSON content preview: ${jsonText.substring(0, 200)}...`);
    }
  }
}

console.log(`\nValidation complete. Valid JSON-LD blocks: ${validCount}, Errors: ${errorsCount}`);
