---
sidebar_position: 0
---

# Introduction

Hadmean is an open-source internal tool generator that builds itself based on your database schema and your configurations. It is all batteries included and is extremely customizable.


## What
Building admin apps is mostly a chore for developers and we tend to find the easiest way to build them, sometimes delegating it to the juniors of the teams

Hadmean sets up your admin interface as fast as you can type your DB credentials and `npx hadmean@latest`

It is a no-code tool that gives you the reigns when your requirements are very unique. So it is highly customizable.

## Why
There are many admin projects out there, usually free or paid.

The free ones are usually tied to a framework and all your experience with it is useless when you hop to your next shiny language. They are usually not aesthetically pleasing and always require a developer to make any changes.

The paid ones are usually good but very restricted as their free version is usually demo plans for you to get a taste of what they can do and you will have to get to the paywall to get it to be usable for your day-to-day.

The primary reason to build Hadmean was to build something that will be free, very usable and language agnostic

## How

We believe your database information should be the golden truth of your application. As such we read your database relations, tables constraints, fields constraints, enums etc and implement all that information in the UI without any input from you

Most admin generators pride themselves on their powerful drag and drop system which is great as it allows for great customization but it always requires developers to make changes since it is still coding just not from an editor

Hadmean might get to a drag-and-drop system in the future but for now, we want to ride this database idealogy for as long as we can

## Not

### API generator
The APIs produced by Hadmean are for its internal use, It is not designed to be used by other clients. There are plenty of good tools out there already building APIs and we don't have anything we feel can be improved, There will be no support for any unintentional API usage, they will not be documented and they can/will change without notice. This is intentional because we just want to scope Hadmean to just admin use.

### Database client
Hadmean will not and will never have an interface to change the structure of your database. This is intentional because we just want to scope Hadmean to just admin use.

### Web Builder
Hadmean is built for internal use, It is not built for end-users but rather internal users, This means no fancy editor to add a class to every element, No template for headers, footers, No page creator etc. This is intentional because we just want to scope Hadmean to just admin use.

### API backend
Hadmean will also not expose a method to extend the backend. i.e you will not be able to create a new API route with it, meaning if you need to have hooks for other endpoints then you will have to create your server elsewhere, The primary reason is to be able to re-write our APIs without any notice and exposinf it ties us down. This is intentional because we just want to scope Hadmean to just admin use

### CMS
Hadmean doesn't have a default data structure, It doesn't have any workflows. Hadmean only works with the data you already have. This is intentional because we just want to scope Hadmean to just admin use

:::info
This is intentional because we just want to scope Hadmean to just admin use
:::
