---
title: Why you should write more integration tests.
authors: [ayobami]
tags: [testing]
---

![Banner](./banner.png)

After writing software, engineers usually have to write tests for whatever reason they have but major write three types.
1. Unit tests.
This are mostly Isolation tests i.e you take a part of the software and you isolate it and write a test for it. Isolation means that piece of software usually a function or component does not interact with other parts of the system. This isolation makes it very easy to write tests are you good control of the component making it very easy for you to have it in a desired state and test that state and also very easy to get the expected state and assert that. and another benefit is that it they are very easy to run as they are usually lightweights so usually run under seconds
2. End to End Tests.
End to End(E2E) tests are tests that are writting usually in the way a user will use the application. These tests are meant to be agnostic of the internal workings of the application. Infact they can be writing in another langauge different from the one the application is written in.
End to End needless to say gives the greatest confidence as they actually test the flow of the user in the way an actually user will use them.
3. Integration Tests. 
Integration tests are tests that test the interactions between two or more components of the software i.e you are test that yes these components are working seperately but do they communicate with each other correctly

Developers usually get confused on what Integration tests are. Writing a test for a function though it calls other function is not an integration test even though it has some integration as this is still a unit test

Integration tests are tests that have a high level of abstraction over implementation detail

For example
1. A good integration test for the BE will be to setup the application to take in a route and the method and it should do something and that something is asserted by calling another route to check the effects. A bad way of doing this is to instead call the controller and mock the services and that the end check that the services are called correctly instead
2. For the FE a good integration test will be to take a page component or a large component and render with not passing any props and instead get the page to the desired state by mocking the API requests using a tool like MSW and interacting with the application clicking on button and asserting desired UI effects

So why should you write more Integrations test over the others. Integrations tests basically averages the good and bad part of unit tests and E2E tests 

1. You can easily achieve desired state
Primarily E2E tests in my un-popular opinion is what you should strive for the most but the major pain point of E2E tests is the ability to acheive desired state. Let say you want to test the application for a user that is under the age of 35, male, Arabian and is christian. This conditions are very easy to achieve with Unit tests as you can easily pass the desired state as props and test the application as you see fit. 
But this is a pain point with E2E tests so really have to options.
1. You seed the application database with the desired state which is almost un-scalable as you will have to HardCode the userId in the tests or you use the E2E suites to get the application to the desired state before actually starting to test cases
But with Integration tests you can easily set the state in the test suite though you will not be as nimble as unit-test but it will be way more easier than with a E2E test. 


2. It is relatively lightweight.
    One big problem with e2e tests is that they are bulky, Like you will first need to setup the application itself i.e proviion database, run migrations, run seeds, start the application, start the frontend. Wait for both of them to be up, launch other services needed, fire up a browser then start the test cases. 
    But wuth

4. Less flaky.
    Because of the 


3. It brings good enough confidences
    This is the major problem with most unit tests being that they are mostly implementation details, like they follow you components parameters around and they usually have to be updated the component changes during a refactor without any changes to the functionality


Nothing in software are hard rules, this articles doesn't say scrape your e2e tests, or unit tests but rather try to see if you can test the case with an integration test, if the case is too complex i.e too many if-elses then you can abstract that to a function and unit-test that. And it is considered good practice to have e2e tests for critical flows in your application. like
- User can register
- User can login
- User can add product to cart
- User can checkout
Basically things that are primary to your business function should be test e2e and others should be test with integrations.

