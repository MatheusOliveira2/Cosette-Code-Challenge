# Cosette Code Challenge
## Matheus Oliveira

Code developed for a selection process at Cosette - Sydney - Australia

### Techs
- Javascript/Typescript
- HTML
- CSS
- React
- Node
- Shopify
- Styled Components
- Storybook
- Vite

### Project Structure
-root
&nbsp;&nbsp;&nbsp;-cosette-code-challenge (Frontend - React)
&nbsp;&nbsp;&nbsp;-server (Backend - Node)
  
## Running the project

In the root folder run: 
```sh
npm install
```

In the root folder run:
```sh
npm run initialize
```
This line installs the dependencies from both projects (server and cosette-code-challenge)

To run the server is necessary to add a .env file with the SHOPIFY_API_TOKEN. This file should be created at server folder.

-root
&nbsp;&nbsp;&nbsp;-server
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-src
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-**.env**

After the **.env** creation and filling with the "API - Acess token" run you are able to run the project

### Running in the browser
In the root folder run:
```sh
npm run dev
```
This line runs the dev mode from the server and the frontend concurrently.

- The default URL is: http://127.0.0.1:5173/

### Running the Storybook
In the root folder run:
```sh
npm run storybook
```
This line runs the dev mode from the server and the Storybook.

- The default URL is: http://localhost:6006/

### Tests
    Tests were developed using the Storybook Interaction Tests.
