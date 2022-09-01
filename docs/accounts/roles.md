---
sidebar_position: 4
---

# Roles and Permissions

Hadmean as two default roles, `creator` and `viewer`, They are not editable or deletable, They don't even exist physically and are inferred most of the times

## Creator
This is the can do all things role, basically the role you get assigned when you bootstrap the project

## Viewer 
This role has only `CAN_ACCESS_ALL_ENTITIES` viewers who can only view and manage all enabled data but can't configure the app, manage users, manage roles, reset passwords etc.

:::info
If a user is assigned a role and the role is deleted, then the user will be assigned the `viewer` role
:::

## Custom roles
From the UI you can easily add as many roles as you can and assign as many permissions as you like

## Permissions Breakdown 
`CAN_CONFIGURE_APP` gives users access to the app configuration menu

`CAN_RESET_PASSWORD` allows users to reset passwords

`CAN_MANAGE_PERMISSIONS` allows users to manage roles and permissions

`CAN_MANAGE_USER` will allow users to CRUD users

`CAN_ACCESS_ALL_ENTITIES` Allows user access to present and future entities

`CAN_ACCESS_ENTITY:<YOUR_ENTITY>`: Allows access to only that entity. Remember to remove the `CAN_ACCESS_ALL_ENTITIES` permission when you do that
