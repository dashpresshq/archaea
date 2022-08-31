---
sidebar_position: 1
---

# CRUD

## Table
 This tab allows you to select the columns you want to show on the table for this entity. Note that this filtering is done in the backend so any filtered column data will not even get to the UI. We only query your database for the fields we are going to present.
 
## Details
This tab allows you to select the columns to show on the details field, Also the filtering is done in the backend.

The `Hide Details Button`. toggles if you want a details button. Toggling off the views button will hide the selection since it is of no use.

## Create/Update
This allows you to select the fields you want in the create/update form. Useful to hide timestamp columns, ID fields etc.

:::warning
 If the update form is enabled but the details view is not enabled, No data will be passed to the UI.
:::

Also, the toggle button will hide/show the create/update button respectively.

## Delete
 Here you can only manage the hide/show the delete button for the entity.
