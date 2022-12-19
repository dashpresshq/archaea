---
sidebar_position: 2
---

# Setup

1.  Have [Node.js](https://nodejs.org/en/download/) installed

2.  Create a new folder then run

```bash
npx hadmean 
```

3. Go to [http://locahost:3000](http:localhost:3000) to see your fully functional internal tool

4. For the first time you will be asked to provide your database credentials and create your root admin account

:::tip Is that all?
<p>Yes!, No SQL, No Javascript, No tutorial and all under 59 seconds!</p>
:::

## Frequently Asked Questions
Before you ask, The answer is Yes!. There are some magic underneath to make the installation so simple.

Here are some of the questions we get asked when users are bewildered by the simple installation process.

<details>
  <summary>Where does Hadmean store the credentials and account details</summary>
  <div>
    <p>
    Hadmean by default stores all configuration in JSON files in the same folder you are running the `npx hadmean` command.
    <br />
    <br />
    You can set it to be stored in `memory`, `database` or `redis`. More on this in the next section.
    </p>
  </div>
</details>


<details>
  <summary>Are my credentials stored securely</summary>
  <div>
    <p>
      Yes!, All credentials are encrypted at rest with `aes-256-gcm`
    </p>
  </div>
</details>

<details>
  <summary>How do I get future updates </summary>
  <div>
    <p>
      As long as you use `npx hadmean` then `npx` will always check for updates and use the latest to run the application
      so you will always be running the latest version of Hadmean.
    <br />
    <br />
      There is no other step from you.
    </p>
  </div>
</details>

<details>
  <summary>How can I create a new Hadmean Project</summary>
  <div>
    <p>
      Create a new folder and run `npx hadmean` there.
    </p>
  </div>
</details>

<details>
  <summary>How can I run Hadmean on a different PORT </summary>
  <div>
    <p>
      You can change the default port `3000` by setting `PORT` in your environment variable
    </p>
  </div>
</details>

<details>
  <summary>After running `npx hadmean` how do I run the application again </summary>
  <div>
    <p>
     `cd path/to/project/folder && npx hadmean`
    </p>
  </div>
</details>

<details>
  <summary>Can I update my database credentials</summary>
  <div>
    <p>
      No! and we strongly advise against trying to do that, Creating a new project will always be the easiest way to go about it.
    </p>
  </div>
</details>

A `.env.local` file is created for every Hadmean installation. If you want to get the best of your installation then kindly go to the next section.
