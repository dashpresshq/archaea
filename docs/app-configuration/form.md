---
sidebar_position: 5
---

# Form
Forms complexities always grow in parallel with business requirements and we believe giving you coding access to your manage your forms will help you when the requirements get complex as opposed to making things visual which will block you when your requirement gets too complex. 

As you will expect you will need some Javascript knowledge to proceed in this section

There are three forms that we use to achieve this

## API
First, let talk about the API

The objects available to you are

```js
{
     // The current/submit values in the form
     formValues: Record<string, string>,
     // All the route params
     routeParams: Record<string, string>,
     // The user authenticated profile
     auth: {
          // The Hadmean profile name
          name: string;
          // The Hadmean username name
          username: string;
          // The system profile for the user
          // More info on this at /docs/accounts/system-profile 
          systemProfile?: string;
          // The Hadmean role name
          role: string;
     }
}
```

They are accessed through the dollar sign `$.`.

You will find full examples below which give you a better understanding

:::info
The initial `formValues` for the update form contains the fields that you expose in the details view.
:::

:::caution
All the code written here will be run on the client, So please be careful to not paste any private configuration keys here
:::

See the content of the three forms as the body of a function, 

We have plenty examples below

## Field State
This allows you to hide or disable your form fields.

Examples

```js
/* 
  Having just this in the `Field State` will disable 
  the `accountBalance` field all the time 
*/
return {
     accountBalance: {
          disabled: true
     }
}
```

```js
/* 
  Having just this in the `Field State` will disable 
  the `canRegister` field when the value of `age` is less than 18  
*/
return {
  canRegister: {
          disabled: $.formValues.age < 18
     },
}
```

```js
/* Will hide the `reasons` field when the value of `rating` is less than 3*/
return {
     reasons: {
          hidden: $.formValues.rating < 3
     }
}
```

```js
/* 
  You can do cool stuffs like hiding the `canUpdateBalance` field 
  if the current user is updating his account  
*/
return {
     canUpdateBalance: {
          hidden: $.auth.username === $.routeParams.username
     }
}
```

```js
/* 
   Since this is all javascript object 
   there is no limit to the composition 
*/
return {
     field1: {
          hidden: someLogic == true
     },
      field2: {
          disabled: someLogic == false,
          hidden: someLogic == true,
     },
      field3: {
          hidden: someLogic != true
     }
}
```

## Before Submit
You can do two things with this
 - Run custom validation
Our validations are already extensive but can never be extensive enough. 

If a string is returned from the computation of the `beforeSubmit`. Then the value is seen as an error will be toasted to the user as an error and the form will not be submitted, So you can get dirty along your business requirement. 

Note that this doesn't replace any validation you may have on the form as those validations will run first before triggering the `beforeSubmit`. You are encouraged to use the validations we have and only use this when your requirement get out of hand

```js
     /* 
        Will not let the user proceed with the form
        and will toast message with error to the user
      */
     return "You shall not pass"
```

```js
     /* 
        As long as it valid JS, You can throw in what ever you want
     */

     if($.formValues.age > 23 && ($.formValues.country != "Belgium" || $.formValues.height == 124 )){
        return "This is weird requirement and Hadmean can handle it"
     }

     const customFunctionToReturnFalse = () => false

     if(customFunctionToReturnFalse()){
          return "Custom function returned false"
     }
     
     // if the code gets here then the form will be submitted
```

- Modify form

If you return an object, then that will be submitted for our endpoint, This makes you do cool stuff like appending `createdById`/`updatedById` to forms. You can add/remove/edit fields, It is plain JS and we will just send what you return 

```js
   /*
     Will add `createdById` to the form values that is to be submitted
   */
     return {
          ...$.formValues,
          createdById: JSON.parse($.auth.systemProfile).userId
     }
```

And as you might have guessed you can combine it all

```js

/**
 * Will validate the form and will throw the error when it returns a string
 * And will add `createdById` when the form is submitted
 */
    if($.formValues.age > 23 && ($.formValues.country != "Belgium" || $.formValues.height == 124 )){
        return "This is weird requirement and Hadmean can handle it"
     }

     return {
          ...$.formValues,
          createdById: JSON.parse($.auth.systemProfile).userId
     }
```

## After Submit
After submit will be called after the form has been submitted successfully so  you can do things like calling an HTTP endpoint to trigger a workflow
::: info
 This code will be run on the client, So be careful as to what you paste here, Don't pass along any secrets
 We know this is in-convenience and we are currently working on `Actions` which will be a safer way of doing this
 So fingers crossed while we work on that
:::

```js
/**
 * Call an external API after the form is submitted
 */

fetch("https://my-api.com/", { method: "POST", body: JSON.stringify($.formValues) })

```
