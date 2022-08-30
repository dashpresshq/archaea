---
sidebar_position: 2
---

# Security Features

## SSL
:::info
  PLEASE USE SSL FOR ALL HADMEAN INSTALLATION, IT IS NOT NEGOTIABLE FOR ADMIN PROJECTS LIKE HADMEAN
:::

## Encryption at Rest

All credentials provided in the application are encrypted at rest using `aes-256-gcm` with the `ENCRYPTION_KEY` in your `.env`

## CSRF 
TODO

## Password 
All passwords are hashed using `bcrypt`.

## SQL Injection
We use `KnexJS` for our queries and nowhere do we use raw queries in Hadmean, So all your queries are parameterized

## Data Validation
All Data validations are performed in the frontend as well as in the FE, Also only data enabled to update/create will be updated/created

## Reading Data
Any disabled data will not leave our APIs, If an entity is disabled, then any request associated with it will result in a 404.

We don't do any `SELECT *` so allow the fields you expose will be requested from the database

:::info
Admin accounts are exempted from this 404 because sometimes they need to make requests to them like even to enable them
:::

## XSS prevention
We use React and we don't `dangerouslySetInnerHTML` for anything

## Reporting
We take security at heart, We welcome all vulnerability disclosures to `security@hadmean.com`. And we prioritize all security fixes over all other kinds of work

:::info
As long as you are running `npx hadmean@latest` to run your applications, You will always be running the latest version of Hadmean meaning there will be *NO* steps on your path to update your project to get any security fix 
:::