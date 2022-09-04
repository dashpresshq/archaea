---
sidebar_position: 7
---

# System Settings

## Token Validity Duration
Set the number of days you want your authentication token to be valid. The default value is `14`.

## Force Introspection
We introspect your database every time the application runs.

This behavior is good for most production use cases as you want your schema to be up to date whenever you run the application.

:::info
This setting is not respected when your schema is empty so we will always introspect when running for the first time or if you delete your schema for any reason.
:::
