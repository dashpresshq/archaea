---
sidebar_position: 1
---

# Entities

### Selection

In this UI, you can disable and enable entities app-wide, meaning any disabled entity will not appear anywhere on Hadmean.

 This is needed for cases where you have development entities like `migrations`, `logs`, even `hadmean__` prefixed tables or for scenarios where your database is holding data for more than one application then you can easily disable any entities not related to your Hadmean application.


:::info
This toggling works using a blacklist strategy as opposed to a whitelist meaning any new entities added to the application will show up and will have to be disabled if not desired.
:::

### Order

The `Order` tab is to order the entities to have more important entities show up higher in the lists and not rely on the default alphabetical order.