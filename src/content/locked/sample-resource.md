# 10 Premium AI System Prompts Blueprint Pack

This manual outlines the exact configurations and prompt blocks used in active client environments to secure LLM behaviors, structure incoming user inputs, and route support tickets.

### Chapter 1: Customer Support Grounding Prompt
Grounding context templates dictate exactly how the AI retrieves knowledge. This prompt forces the LLM to restrict responses exclusively to supplied databases.

### Chapter 2: Lead Qualifier & JSON Extractor
For ingestion pipelines, this prompt qualifies business parameters and formats output inside a raw JSON schema suitable for direct write.

### Chapter 3: Vector DB Retrieval Query Rewriter
Refines conversational search questions into keyword arrays to maximize cosine similarity matches in Postgres pgvector tables.

### Chapter 4: RAG Answer Synthesizer
Grounding answers dynamically based on matching database document context blocks without halluncinations.

### Chapter 5: Inbound Support Ticket Router
Classifies inbound email requests into support tickets, bugs, or sales categories alongside confidence ratios.

### Chapter 6: Conversational Roman Urdu Dialect Converter
Translates formal, dry replies into Romans Hinglish/Urdu text tailored for natural Roman WhatsApp business messages.

### Chapter 7: SQL Query Security Audit Validator
Evaluates dynamic SQL statements for safety leaks, parameter injection, and row-level security policy bypasses.

### Chapter 8: Automation Node Fault Classifier
Categorizes connection faults, network timeouts, schema changes, and rate limits to coordinate node retries.

### Chapter 9: USP Copywriting Extractor
Pulls value propositions and core selling points from rough client business drafts for marketing automation.

### Chapter 10: Frustration Detection Escalation Filter
Flags customer messages signaling frustration, bad experiences, or support requests for immediate developer escalation.
