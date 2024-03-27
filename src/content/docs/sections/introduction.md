---
title: Introduction
description: Introduction to RelationalAI and Snowpark Container Services
---

Are you a RelationalAI user who is interested in migrating your workloads from RelationalAI's classic product hosted on Azure to Snowpark Container Services (SPCS) on Snowflake? You're in the right place!

Before we get into the code, let's take a moment to understand the context of this migration. This guide will help you understand the differences between the classic product and the SPCS product.

## Background

### The Azure Product

RelationalAI is a cloud-native knowledge graph system. RelationalAI users load data into a RelationalAI database and write logic in a language called Rel to represent business logic and query the data. RelationalAI's classic product is hosted on Azure and is accessible via a variety of interfaces:

1. **The Console**. A web application that displays the state of the database and allows users to write and run Rel code.
2. **The VS Code Extension** (VSCE). A VS Code extension that offers pretty much the same capabilities as the Console.
3. **The SDKs**. Users who want to perform operations on the database programmatically can use the RelationalAI SDKs, which are available in a variety of languages.

### Snowpark Container Services

RelationalAI's new product runs on Snowflake infrastructure via Snowpark Container Services. This means that the RelationalAI system runs in a container provisioned by Snowflake and protected by Snowflake's security model.

The new product is accessible in two ways:

1. **The VS Code Extension**. Provides essentially the same capabilities as the classic product's VS Code extension.
2. **The RelationalAI Python library**. A Python library that allows users to write logic and queries using a new Python-embedded language called *PyRel*. Also provides an accompanying CLI for performing various operations.