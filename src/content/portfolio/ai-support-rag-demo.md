---
title: AI Support Chatbot with RAG
slug: ai-support-rag-demo
category: AI Chatbots
description: A knowledge-grounded support chatbot using Retrieval-Augmented Generation to answer user inquiries accurately and capture high-intent leads.
problem: An international e-commerce startup was getting hundreds of repetitive customer support queries daily about shipping times, refund rules, and item fits, bloating their support ticket costs.
solution: We developed an AI support widget that embeds their documentation in a Supabase Vector Database. We constructed a RAG pipeline utilizing OpenAI embeddings and n8n to retrieve precise document chunks and generate contextual responses, falling back to a structured lead capture form when needed.
result: Ticket volume decreased by 55% within 3 weeks, and the bot captured 80+ qualified sales leads through the intelligent fallback system.
tech:
  - OpenAI
  - n8n
  - Supabase Vector DB
image: /assets/images/portfolio/ai-support-rag.webp
---

This case study demonstrates how modern language models can be securely grounded in custom company knowledge bases without the risk of hallucination. By using Retrieval-Augmented Generation (RAG), the bot only answers questions with facts present in the uploaded company guide files.

### Technical Implementation

First, we built an ingestion workflow that splits long documentation PDFs and text files into semantic paragraphs. Each paragraph is turned into a 1536-dimensional vector using **OpenAI's text-embedding-3-small** model and stored in **Supabase** via the `pgvector` extension.

When a visitor types a question in the chat widget, we query Supabase to find the top 3 most relevant documentation chunks. These chunks are injected into the LLM system prompt, instructing it to answer strictly based on the provided text. If the answer cannot be found in the chunks, the bot politely asks the user to fill out a quick form which triggers an instant email/Slack ping to human support agents.
