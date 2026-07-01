---
name: update-supabase-n8n
description: Guidelines on configuring client-side database calls, database schemas, and structured payload payloads to n8n webhook targets.
---

# Skill: update-supabase-n8n

## When to Use
Use this skill when:
- Editing forms or client-side submission logic.
- Building analytical event logging on button clicks/downloads.
- Configuring integrations with the Supabase client API.

## Principles
1. **Safety and Integrity**: Ensure secrets are never exposed on the front-end. Use the anon key for submissions.
2. **Payload Security**: Validate form inputs client-side before dispatching payloads to Supabase or webhooks.
3. **Structured Envelopes**: Format payloads consistently.

## Task Checklist
- [ ] Use client-side JavaScript validations (pattern matching, phone checks).
- [ ] Log form results using standard Supabase client methods with error catch blocks.
- [ ] Send webhook requests using `fetch` with descriptive parameters.
