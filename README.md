# Nexu Backend Coding Exercise

## Felipe Parra

It's an API, for handle of brands & models of vehicles, you can get, create & update models and brands

## Endpoints Required

```
                              GET    /brands
                              GET    /brands/:id/models
                              POST   /brands
                              POST   /brands/:id/models
                              PUT    /models/:id
                              GET    /models

```

## 🚀 Getting Start

To have a local copy and run the project, follow these simple steps.

### 📋 Prerequisites

You need to have the following installed, in the case of environment variables you will find a `.env.example` to validate if they are the same as the ones in the `.env` file:

- Node
- NPM
- Repository access
- VSCode
- `.env`

1. Clone the repository

   ```sh
   git clone git@github.com:felipe-parra/nexu-api.git
   ```

2. Install project packages

   ```sh
   npm install
   ```

### ☕ Start the project in local - Development mode

1.  Start the development server

    ```
    npm run dev
    ```

2.  Go to the following address:
    ```
    http://localhost:3000
    ```

### ⚙ Stack of technologies

- Node
- Express
- cors
- helmet
- morgan

### 😄 Usual problems

- When installing `node_modules`, there can commonly be problems installing the packages either due to cache or incomplete downloads due to internet connection problems.

_It can be solved by deleting the `node_modules` folder, and downloading them again:_

```
rm -rf node_modules
```
