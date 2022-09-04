---
sidebar_position: 2
---

# System Profile

Hadmean rolls out its authentication and authorization but sometimes, you may want to use the details of your user from other systems in Hadmean like their IDs, roles, names, etc.

`System Profile` is how you pass that information to Hadmean.

You will just have to paste in that information as a JSON object, save it and it will be regurgitated to you when you need it. 

For a quick explanation, This system profile can be used to implement 
 - appending the `userId` of who is updating a user account balance to the form.
 - disabling the update rank/account balance field for admins when updating their profile.
 - Hiding a resend verification button for users already verified.
 
Hang tight, we will give more details on this in the sections where they will be implemented.

:::info
The field is optional, the only requirement is that the value is a valid JSON object.
:::