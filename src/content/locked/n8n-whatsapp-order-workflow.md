# WhatsApp Auto-Order Intake Schema
This guide provides the exact JSON schema and layout diagram to host an automated order intake pipeline on n8n.

### Blueprint Details
1. **Trigger Node**: Webhook catching JSON payloads from WhatsApp Business Cloud API.
2. **Validator Switch**: JavaScript check evaluating phone numbers, addresses, and catalog availability.
3. **Database Insertion**: SQL nodes pushing records into a relational Postgres schema.
