---
sidebar_position: 4
---

# Roles and Permissions

Hadmean as two default roles, `creator` and `viewer`. They are not editable or deletable, they don't even exist physically and are inferred most of the time.

## Creator
This is the `can-do-all` things role, this is the role the user installing the application gets assigned.

## Viewer 
This role has only `CAN_ACCESS_ALL_ENTITIES`. 

`Viewers` who can only view and manage all enabled data but can't configure the app, manage users, manage roles, reset passwords etc.

:::info
If a user is assigned a role and the role is deleted, then the user will be assigned the `viewer` role.
:::

## Custom roles
From the UI you can easily create as many roles as you want and assign as many permissions as you like.

## Permissions Breakdown 

| Role | Function
----| -----
|`CAN_CONFIGURE_APP` | gives users access to the app configuration menu.
|`CAN_RESET_PASSWORD` | allows users to reset passwords.
|`CAN_MANAGE_PERMISSIONS` | allows users to manage roles and permissions.
|`CAN_MANAGE_USER` | will allow users to CRUD users.
|`CAN_ACCESS_ALL_ENTITIES` | allows user access to present and future entities.
|`CAN_ACCESS_ENTITY:<YOUR_ENTITY>` | Allows access to only that entity. Remember to remove the `CAN_ACCESS_ALL_ENTITIES` permission when you toogle any of these on.


