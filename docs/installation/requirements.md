---
sidebar_position: 1
---

# Requirements

You will be needing the following few things to run Hadmean
- [Node.js](https://nodejs.org/en/download/)
- A database you want to interface

A well-designed database is not compulsory but it will get you a lot of functionality and have to do less setup.

Having a well-designed schema entails
 - Having your `user_id` joined correctly to the `users` table
 - Having enums when appropriate as opposed to just plain text
 - Having non-nullable columns when needed
 - Having length for text fields
 - Using boolean fields instead of "YES/NO"
 - Having a primary field for every table
