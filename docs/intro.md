---
sidebar_position: 0
---

# Introduction
Hadmean is an open-source internal tool generator that builds your admin interface based on your database schema and your configurations. It is fully featured and is extremely customizable.

## What
Building admin apps is mostly a chore for developers and we tend to find the easiest way to build them, sometimes delegating it to the juniors of the teams.

With Hadmean, you set up your admin interface as fast as you can type `npx hadmean@latest` and your DB credentials.

It is extremely customizable as it gives you a programmatic interface when your requirements are very unique. 

## Why
There are many admin apps out there, usually free or paid.

The free apps are usually tied to a framework and all your experience with it dies when you hop to your next shiny language. They are usually not aesthetically pleasing and always require a developer to make any changes.

The paid apps are usually good but very restricted as you will be forced to their paywall to get it to be usable for your day-to-day.

We built Hadmean to provide an admin app that will be free, very usable and language agnostic.

## How

We believe your database information should always be the golden truth of your application. As such we read your database relations, tables and fields constraints, enums etc and implement all that information in the UI without any input from you.

Most admin generators pride themselves on their powerful drag-and-drop system which is great as it allows for great customization but it always requires developers to make changes since you need technical knowledge to make even the smallest of changes.

Hadmean might get to a drag-and-drop system in the future but for now, we want to ride this database idealogy for as long as we can.

## Not

### API generator
The APIs produced by Hadmean are for its internal use, They are not designed to be used by other clients. There are plenty of good tools out there already building APIs and we don't have anything we feel can be improved. 

There will be no support for any unintentional API usage. They will not be documented and they can/will change without notice.

### Database client
Hadmean will not and will never have an interface to change the structure of your database.

### Web Builder
Hadmean is built for internal use, It is not built for end-users but rather internal users. This means no fancy editor to add a class to every element, no template for headers, footers, no page creator etc.

### API backend
Hadmean will not expose a method to extend the backend. i.e you will not be able to create a new API route with it, meaning if you need to have hooks for other business needs, then you will have to create a seperate API backend for that

### CMS
Hadmean doesn't have a default data or data structure, It doesn't have any workflows. Hadmean only works with the data you already have.
