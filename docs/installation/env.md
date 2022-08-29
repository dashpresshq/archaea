---
sidebar_position: 3
---

# Environment Variables

Running the `npx hadmean@latest` command for the first time on a project will generate a `.env` file there which will look like this

```bash
CONFIG_ADAPTOR=json-file
CONFIG_ADAPTOR_CONNECTION_STRING=PLACE_HOLDER_CONFIG_ADAPTOR_CONNECTION_STRING

CACHE_ADAPTOR=memory
CONFIG_CACHE_CONNECTION_STRING=PLACE_HOLDER_CONFIG_CACHE_CONNECTION_STRING

ENCRYPTION_KEY=<SOME_RANDOM_STRING>
AUTH_TOKEN_KEY=<SOME_RANDOM_STRING>

TOKEN_VALIDITY_DURATION_IN_DAYS=14

FORCE_INTROSPECTION=TRUE
```

This settings are good for most production use-cases but lets give you some details in the case your use case doesn't fall in the most

## CONFIG_ADAPTOR
Hadmean needs to store a lot of things like your `aes-256-gcm` encrypted database credentials, application users, custom roles, app configuration etc

`CONFIG_ADAPTOR` tells Hadmean how to store this information, The options for you here are

 - `json-file` - Good for production cases but best for development
 - `database` - Best for production cases
 - `memory` - Only good for unit testing purposes
 - `redis` - Good for production cases as well

:::info
For most production use-cases we will encourage changing this to `database` or `redis`.
:::

## CONFIG_ADAPTOR_CONNECTION_STRING
If you choose `database` or `redis` in the option above then you will need to provide the credentials to it with this. It takes in the connection string of the resource

:::info
Using `json-file` creates a folder `.config-data` in your project folder so it will have to be moved everywhere you want to restore the project
:::

:::caution
Editing your configuration data manually especially for `json-file` configuration can result in configuration loss if the JSON is malformed, So edit it at your risk
:::

:::warning
Not setting this value when required will cause your application not to start as Hadmean can't set/read it settings
:::

## CACHE_ADAPTOR
There are some expensive/too frequent operations we do regularly in the backend so to speed things up, we cache these operations so that we dont do it again after the first time

The default value of `memory` is good for all use-cases except when you are running multiple instances of Hadmean, so the data needs to be synced in the other instances

Which leads us to the only other option `redis`

## CONFIG_CACHE_CONNECTION_STRING
if you want to use `redis` in the option above the `CONFIG_CACHE_CONNECTION_STRING` takes in the connection string to your URL

## ENCRYPTION_KEY && AUTH_TOKEN_KEY
We need a encryption key to encrypt your database credentials so that if even it gets leaked, attackers can't do any harm with this

So also with your authentication key so that we encode your auth tokens securely

As you may have seen, Hadmean generates this for you as you might be good leaving this as it is or edit according to your security requirement

These keys have the requirements of having uppercase letters, lowercase letters, numbers and 64 characters


## TOKEN_VALIDITY_DURATION_IN_DAYS
These sets the number of days you want an auth token to be valid for, We default to 14 days but you can set the number days you want

## FORCE_INTROSPECTION
We introspect you database every time the application runs. 
This is behaviour is good for most production use-cases as you want your schema to be up to date all the time

But there are some times that this is not desired especially during development but we leave this to you to decide

:::info
`FORCE_INTROSPECTION` is not respected if you schema is empty so we will always introspect when running for the first time or if you delete your schema for any reason
:::