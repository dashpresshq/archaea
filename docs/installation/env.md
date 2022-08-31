---
sidebar_position: 3
---

# Environment Variables

Running the `npx hadmean@latest` command for the first time on a project will generate a `.env.local` file there, which will look like this

```bash title=".env.local"
CONFIG_ADAPTOR=json-file
CONFIG_ADAPTOR_CONNECTION_STRING=PLACE_HOLDER_CONFIG_ADAPTOR_CONNECTION_STRING

CACHE_ADAPTOR=memory
CONFIG_CACHE_CONNECTION_STRING=PLACE_HOLDER_CONFIG_CACHE_CONNECTION_STRING

ENCRYPTION_KEY=<SOME_RANDOM_STRING>
AUTH_TOKEN_KEY=<SOME_RANDOM_STRING>
```

These settings are good for most production use-cases but let's give details so you can make better decisions based on your needs.

## CONFIG_ADAPTOR
Hadmean needs to store a lot of things like your `aes-256-gcm` encrypted database credentials, application users, custom roles, app configuration etc.

`CONFIG_ADAPTOR` tells Hadmean how to store this information. The options for you here are

 - `json-file` - Good for production cases but best for development
 - `database` - Best for production cases
 - `memory` - Only good for unit testing purposes
 - `redis` - Good for production cases as well

:::info
For most production use-cases we will encourage setting `CONFIG_ADAPTOR` to `database` or `redis`.
:::

:::warning
 We don't encourage switching adaptors so we don't plan to have an adaptor migration script. Choose this setting carefully.
:::

## CONFIG_ADAPTOR_CONNECTION_STRING
If you choose `database` or `redis` in the option above then you will need to provide the credentials to it with `CONFIG_ADAPTOR_CONNECTION_STRING`. It takes in the connection string of the resource.

All database tables will be created automatically and prefixed with `hadmean__`

Using `json-file` creates a folder `.config-data` in your project folder so it will have to be moved everywhere you want to restore the project

:::warning
Editing your configuration data manually, especially for `json-file` configuration can result in configuration loss if the JSON is malformed, So edit it at your risk
:::

:::caution
Not setting this value when required will cause your application not to start as Hadmean can't set/read its settings
:::

## CACHE_ADAPTOR
There are some expensive/too frequent operations we do regularly in the backend. So, to speed things up, we cache these operations so that we don't do it again after the first time.

The default value of `memory` is good for all use-cases except when you are running multiple instances of Hadmean for the same project as data mutated in one instance needs to be available to other instances.

This leads us to the only other option `redis`

## CONFIG_CACHE_CONNECTION_STRING
if you want to use `redis` in the option above the `CONFIG_CACHE_CONNECTION_STRING` takes in the connection string to your URL

## ENCRYPTION_KEY & AUTH_TOKEN_KEY
We need an encryption key to encrypt your database credentials so that if even it gets leaked, attackers can't do any harm with it.

We also need an authentication key to encode your auth tokens securely.

As you may have seen, Hadmean generates both keys for you so should be good not editing it but you can always edit if you want

These keys have the requirements of having uppercase letters, lowercase letters, numbers and 64 characters
