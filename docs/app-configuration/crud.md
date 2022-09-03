---
sidebar_position: 1
---

# CRUD

## Table
 This tab allows you to select the columns you want to show on the table for this entity. Note that this filtering is done in the backend so any filtered column data will not even get to the UI. We only query your database for the fields we are going to present.
 
## Details
This tab allows you to select the columns to show on the details field. As with tables, the filtering is done in the backend.

The `Hide Details Button` toggles the view button and will show an error if you try to view the details page for the entity. Toggling it off will hide the selection since it is of no use.

## Create/Update
This allows you to select the fields you want in the create/update form. Useful to hide timestamp columns, ID fields etc.

:::warning
 If the update form is enabled but the details view is not enabled, No data will be passed to the UI.
:::

Also, the toggle button will hide/show the create/update button respectively.

## Delete
 Here you can only manage the hide/show the delete button for the entity.


:::info
All these settings are also checked on the server. 

So if you disable delete for an entity and you try to delete it through our API, You will get a 401 error, same for create, update and details. So if you can't do it in the front-end then you also can't do it in the back-end
:::