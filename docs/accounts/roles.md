---
sidebar_position: 4
---

# Roles and Permissions

Hadmean as two default roles, `creator` and `viewer`, They not editable or deletable, They dont even exist physically and are inferred most of the times

## Creator
This is the `super-admin` role. It can do ALL things

## Viewer 
This role has only `CAN_ACCESS_ALL_ENTITIES` viewers can only view and manage all enabled data but can't configure the app, manage users, manage roles, reset password etc.

:::info
If a user assigned a role and the role is deleted the user will be assigned the `viewer` role
:::

## Custom roles
From the UI you can easily add as much roles as you can and assign as much permissions as you like

# Permissions 
`CAN_CONFIGURE_APP` gives users access the app configuration menu
`CAN_RESET_PASSWORD` allows user reset passwords
`CAN_MANAGE_PERMISSIONS` allows users to manage roles and permissions
`CAN_MANAGE_USER` will allow users to CRUD users
`CAN_ACCESS_ALL_ENTITIES` Allows user access present and future entities
`CAN_ACCESS_ENTITY:<YOUR_ENTITY>`: Allowes user only access to the entity. Make sure you remove the `CAN_ACCESS_ALL_ENTITIES` permission