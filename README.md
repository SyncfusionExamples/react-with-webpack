# ej2-grid-react-webpack

Repository Description: Sample React project showing Syncfusion React Grid integrated with webpack bundling.

## Project Overview

A minimal sample that integrates Syncfusion React Grid into a React app and uses webpack to produce a single bundle for development or static hosting.

## Features

- Demonstrates Syncfusion React Grid usage
- Bundles React/JSX sources using webpack
- Minimal dev server for local testing

## Prerequisites

- Node.js and npm installed (use `node -v` and `npm -v` to verify)

## Install

Install project dependencies:

```bash
npm install
```

If you encounter dependency resolution errors (ERESOLVE) related to `webpack-dev-server`, install the compatible v3 dev server first and then run the install:

```bash
npm install --save-dev webpack-dev-server@3.11.3
npm install
```

## Run the sample (development)

Start the development server which serves the compiled bundle and opens the sample in your browser:

```bash
npm start
```

## How it works

Webpack compiles sources into a bundle that `index.html` loads. Example files in `app/` (e.g., `sample.jsx`, `main.js`) demonstrate data wiring and grid setup. The bundle in `dist/` can be used for static hosting or served via the webpack dev server.
