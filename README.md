# NodeJS Express Postgresql



## Overview
The following repository is a `todo` API example developed with NodeJS, the Express framework and Postgres.

This repo serves two main goals:

1. Example application using [Codeship Pro]()
2. A [Todo Backend](http://todobackend.com/) community project.  

The following `README` is a guide to build and deploy. You will also be able to run this project locally, and use it as a starter app for NodeJS Docker projects.

Be sure to star/watch this repo to stay up-to-date with any changes. If you have any questions or suggestions regarding this example , please submit an

## Getting Started

There are a few resources to make sure you have available during this guide.

> This section makes the assumption that you will be following along from start to finish. If you wish to skip the deployment to Heroku, ignore step 5.

1. [Docker CE](https://store.docker.com/search?type=edition&offering=community) - Container service everything will run on
2. A public, cloud based [Github](https://github.com/join) Account - Git Repository service
  + These must be cloud based, and not on your own servers.

3. [Heroku](https://signup.heroku.com/) Account - App hosting

Signup for each of these is free, and should only take you a few minutes if you don't already have one.  You can use your current accounts if you already have one available.

Once you have everything ready to go, you can move on to the next step.

## Testing

This project uses [Jest]() integration testing of the `todo` api, and [eslint]() for code linting.  

In this section, you will set up your repositor and test the build locally.

### Fork repo
Using the account you set up in the Getting Started section, you will now create your own repository to connect to Codeship.

Since this repository is on Github, you can [fork this repo] ```(https://help.github.com/articles/fork-a-repo/) and move on to the next step.


> Make sure to copy the 'Repository Clone URL' link for the next step, you will use it to set up the project.

You now should have a remote repository that is publicly accessible in your account.


## Continuous Deployment to Heroku

Much like continuous integration, continuous deployment is the practice of shipping code to production on a frequent basis. You can add a deployment step that runs when all tests pass. You can also filter based on specific criteria like tags, which this repo does. When the branch is `master` and all tests pass, we deploy immediately following to Heroku.

Let's get the app set up, and start deploying code.

### Create Heroku app
1. Login to Heroku (if not already)
2. Click `New` -> `Create New App`
  + You can leave the defaults, or change them as needed
3. Click the `Create App` button

This app uses [`PostgreSQL`](https://www.postgresql.org/) as it's database, and Heroku has a free add-on you can use.

1. Click `Resources`
2. Under `Add-ons`, search for `postgres`
3. In the results drop down, click on  "Heroku Postgres"
4. Leave the selction as `Hobby Dev - Free`, then click the `Provision` button.

Copy the new application name for use later.

### Get Your Heroku API key
1. Click on your avatar in the upper right, then click `Account Settings`
2. Near the bottom, you will find `API key`. Click the `Reveal` button
3. Copy the API key
4. In the project files on your local machine, open `deployment.env.sample` and change `your_api_key_here` to your api key without any qutes.
13. Rename `deployment.env.sample` to `deployment.env`


### Commit changes and push

At this point, you have everything you need to test and deploy the project.

4. Make sure all files are added, and commit your changes.
3. Push to the master branch of your remote repository.
4. Open your Codeship project in a browser.
5. Click the build to watch it happen.

When complete and the build is green, you should now be able to navigate to the app with the Heroku provided url `yourappname.heroku.com`.

If you run into trouble at any point, please submit an [issue here](https://github.com/codeship-library/nodejs-express-todoapp/issues/new).
