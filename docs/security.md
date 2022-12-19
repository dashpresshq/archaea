---
sidebar_position: 2
---

# Security Implementations

## SSL
:::info
  PLEASE USE SSL FOR ALL PRODUCTION HADMEAN INSTALLATION
:::

## Encryption at Rest

All credentials provided in the application are encrypted at rest using `aes-256-gcm` with the `CREDENTIALS_ENCRYPTION_KEY` in your `.env`

## CSRF 
We store your auth tokens in localstorage, so CSRF is not possible

## Password 
All passwords are hashed using `bcrypt`.

## SQL Injection
All queries are parameterized as we use `KnexJS` for our queries and nowhere do we use raw queries in Hadmean.

## Data Validation
All data validations are performed in the frontend as well as in the backend.

Only fields enabled to be updated/created will be updated/created.

## Reading Data
Any disabled data will not be sent to the UI.

Any request associated with a disabled entity will result in a 404.

We don't do any `SELECT *` so only the fields you expose will be requested from the database.

:::info
Admin accounts are exempted from this 404 because sometimes they need to make requests to them like even to enable them.
:::

## XSS prevention
We use React and we don't `dangerouslySetInnerHTML` for anything.

## Reporting
We welcome all vulnerability disclosures to `security@hadmean.com` and we prioritize all security fixes over all other kinds of work.

:::info
You will always be running the latest version of Hadmean as long as you use `npx hadmean` to run the application.
:::