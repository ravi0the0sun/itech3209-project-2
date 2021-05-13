# Aira Ticket Management System

## Table of content

1. [Introduction](#Introduction)
2. [Installation Guide](#Installation-Guide)
   - [Installation Guide Link](#Installation-Guide-Link)
3. [Notes](#Notes)

## Introduction

The application was developed using [TypeScript](https://www.typescriptlang.org/) as the primary programming language and is independent of any OS environment as long as the main runtime environment NodeJS and Database MongoDB are present.

## Installation Guide

This app requires [NodeJS(LTS)](https://nodejs.dev/) v14.16.00 and [mogoDB](https://www.mongodb.com/) v4.4.4. Please make sure that both node and mongodb and working properly before installation.

First clone this repo by typing this command

```bash
git clone https://github.com/ravi0the0sun/itech3209-project-2
```

If you don't have git download the zip file from this [link](https://github.com/ravi0the0sun/itech3209-project-2/archive/refs/heads/main.zip).

### Installation Guide Link

- [NodeJS(LTS)](https://nodejs.dev/)
- [MongoDB Server Community Edition](https://docs.mongodb.com/manual/administration/install-community/)

We have already setup many scripts for the application for easy installation and setup. First we need to install dependency packages using `npm` npm is a package manager for the node projects. Open the project folder in your terminal and type.

```bash
npm run pre-install
```

This command will install all the packages in the dependencies from `package.json` file in the main folder and the client folder.

We have divided this project into two main part client and server. The client folder contains the front-end react code and web application logics, and server or the root folder which is a basic REST-API for the front-end.

After the installation to run the application use.

```bash
npm run dev
```

This will run the front-nd app at port 3000 and the server in 8080.

### Notes

This app assumes that you are running the above version of the tools mentioned and that they are working in the default port especially the database which should run on port `27017` and that port `3000` and `8080` are not in use. Any changes to the port or credentials can be changes in the `/src/api/config/config.ts` file.
