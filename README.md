# AngularDesignTraining - https://angular-design-training.netlify.app/

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.
This is a simple application designed for training purposes. The application contains a landing page with navigation, where you will find three tasks and a demo page showcasing selected components. The content of the tasks will be presented and discussed during the training. Additionally, Storybook is integrated into the application to show you how you can easily document and test the implemented components.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

### Managing Multiple Node.js Versions

If you work with multiple projects that require different versions of Node.js, it is recommended to use nvm (Node Version Manager). nvm allows you to easily switch between different versions of Node.js. You can install nvm by following the instructions on its GitHub page https://github.com/nvm-sh/nvm.

- (only if you don't use nvm) Node.js: Angular requires Node.js. You can download it from Node.js official website: https://nodejs.org/en/download.
- npm: Node Package Manager (npm) is included with Node.js. Verify the installation by running node -v and npm -v in your terminal.
- Angular CLI: Install Angular CLI globally using npm:

```bash
npm install -g @angular/cli
````

## Project Setup

1. Clone the Repository
   Clone this repository to your local machine using:

```bash
git clone https://github.com/NataliaGoreczna/angular-design-training.git
```

2. Navigate to Project Directory
   Move into the project directory:

```bash
cd angular-design-training
```

3. Install Project Dependencies
   Install the necessary dependencies for your Angular project:

```bash 
npm install
```

## Development server

To start a local development server, run:

```bash
ng serve -o
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. (unless you already have another application running on this port; if so, allow Angular to start the application on a different port). The application will automatically reload whenever you modify any of the source files.

## Running Storybook

To start Storybook, run:

```
npm run storybook
```

This will launch Storybook and open it in your default web browser. You can use Storybook to develop and test your UI components in isolation.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

or its shorthand:

```bash
ng g c component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
