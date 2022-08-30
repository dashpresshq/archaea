---
sidebar_position: 0
---

# Introduction

Hadmean is an open-source internal tool generator that builds itself based on your database schema and your configurations. It is all batteries included and extremely customizable.


## What
Building admin apps is mostly a chore for developers and we tend to find the easiest way to build them, sometimes delegating it to the juniors of the teams

Hadmean sets up your admin interface literally as fast as you can type your DB credentials and `npx hadmean@latest`

It is a no-code tool which gives you the reigns when your requirements are very unique. So it is highly customizable.

## Why
There are many admin projects out there, usually free or paid.

The free ones are usually tied to a framework and all your experience with it are useless when you hop to your next shiny language. They are usually not asthetically pleasing and always require a developer to make any change.

The paid ones are usually good but very restricted as their free version are usually demo plans for you to get a taste of what they can do and you will have to get to the paywall to get it to be usable for your day to day.

The primary reason to build Hadmean was to build something that will be free, very usable and language agnostic

## How

We believe your database information should be the golden truth of your application. As such we read your database relations, tables constraints, fields constraints, enums etc and implement all that information in the UI without any input from you

Most admin generators pride themselves on their powerful drag and drop system which is actually great as it allows for great customization but it makes developers have an extra place to update business requirement and work to keep them in sync

Hadmean might get to a drag-and-drop system in the future but for now we want to ride this database idealogy for as long as we can.
