---
sidebar_position: 6
---

# System Settings

## Token Validity Duration
These set the number of days you want an auth token to be valid, We default to 14 days but you can set the number of days you want

## Force Introspection
We introspect your database every time the application runs. 

This behavior is good for most production use-cases as you want your schema to be up to date all the time

But there are some times that this is not desired especially during development but we leave this to you to decide

:::info
This setting is not respected when your schema is empty so we will always introspect when running for the first time or if you delete your schema for any reason
:::
