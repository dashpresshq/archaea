---
sidebar_position: 4
---

# Fields
This view allows you to make field-level customizations. All customization will be reflected on the tables, details view, create form and edit form
## Labels
This tab enables you to rename the label of the field. Say you want to `name` to be called `Full Name` or `updatedAt` to be called `Last Updated` then you simple input the desired name under the field and submit and the column will be renamed everywhere

## Types
:::caution
 It is un-evitable that this tab will be edited but we strongly advise that you structure your schema to minimize you touching this section
:::

There are three things you can do in this section

### Specific Type
:::info
No action taken here will reflect on your database, If you are looking for that then you will need to look for a database client and we will not be supporting this.
:::

Databases have limits on the types of data you want to save, so we usually end up using `text` to represent `email`, `url`, `color` `image`. With the section, you can have a more specific type for your data and Hadmean will use this information to build the most appropriate view/form field for your data

You will notice that some selections are disabled and these are for fields like `boolean`, `date`, `enum` etc. which really don't have sister types so there is nothing you can update it to

You will also see that the selections are narrowed as you will not see a `email` selection for a numerical field nor will you see `number` for `text` field, This is to reduce the chances of bad selection


### Validations
Hadmean, will try to pick all the database validations that it can, Like `non-nullable` means `required`. As such all fields with `non-nullable` will be required in the form and this is not editable, If you need to change this, then you database has to be change and we will pick it up the next time you spin the application.

We also add default validations for `maxLength`, `isDate`, `unique`, `isBoolean` etc. As said earlier these validations can't be edited so you will need to update your database to make these changes.

But databases don't contain all the validations, So we provide the `Configure Validation` to let you add more validations like `minLength`, `regex`, `alphanumeric`, `matchOtherField` etc. 

:::info
All validations picked from the database can't be removed but added validations can be
:::

We also provide a text input for you to customize the validation message


### Selection
TODO

## Order
This allows you to order the fields around and the order will also be reflected on tables, details view and forms

