---
sidebar_position: 1
---

# Form Integrations

After submitting some forms, we may want to perform some action usually sending notifications through email, Slack or SMS. Sometimes we might even want to send the data just created to an HTTP endpoint to do further processing. Form integration is how you achieve that.

Form integrations start with you activating the action i.e Slack, Twilio, SMTP etc. except for HTTP which is always activated. Activating an action is as simple as providing the credentials needed to run the action usually a token or an account ID. Note that all the inputs for this form are encrypted at rest.

The form integration will ask you for the 
 - Trigger i.e when you want to run the action, 
 - The Entity/Integration you want to use based on where you are filling the form from, 
 - The Action from the selected Integration you want to run
 - The action selected creates the fields needed to run the action 

In the form integrations, you will have access to all your secrets, `{{ SECRETS.PRIVATE }}` and constants `{{ CONSTANTS.EXAMPLE }}` and also the current data like this `{{ data.myEntityField }}`. All these are handlebars that you can use anywhere in the form.

You can always deactivate an action by clicking on the Deactivate tab and typing the requested input. Deactivating an action will delete the Action secrets and remove all its instances.
