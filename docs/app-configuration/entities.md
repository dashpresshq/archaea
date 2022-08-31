---
sidebar_position: 3
---

# Entities

In this UI, You can disable and enable entities app-wide meaning any disabled entity will not appear anywhere on Hadmean. This is needed for cases where you have development entities like `migrations`, `system_settings`, even `hadmean__` tables if you are using your database to store Hadmean configurations etc. or for scenarios where your database is holding data for more than one application then you can easily disable any entities not related to your Hadmean application


:::info
This toggling works like a blacklist and not like whitelist meaning any new entities added to the application will show up and will have to be disabled if not desired 
:::

The other tab is to order the entities to have more important entities show up higher in the lists and not rely on the default alphabetical order.