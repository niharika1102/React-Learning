# Difference between npm and npx
|npm|npx|
|:---:|:---:|
|It is *node package manager*.|It is *node package executor*.|
|It installs packages in a project.|It runs a package without installing it in the project.|
|In case of version updation, it requires manual update.|It automatically uses latest package versions.|

# Folder Structure
- `public` directory serves as a place for all static files. Vite does no processing of the files coming from this folder. They are rendered as it is.
- `index.css` contains global styles.
- `main.jsx` is the entry point where the entire React code is injected into an HTML page.
- `vite.config.js` is the config file for vite and is used to configure aliases, proxy APIs and plugins.
- `public` directory is handled directly by the browser and `src/assets` is handled by vite.
- In `main.jsx`, we specify the component that must be rendered (App) and the DOM element it must be rendered in (div with an id of "root");

### Working of a react app
- Vite reads the `vite.config.js` to get vite configs.
- `main.jsx` is injected into `index.html`
- `App.jsx` is rendered.
- Styles come from all relevant files.

# Functional Components
These components take in props into JS functions and return JSX/HTML code.

# Class Components
These components are ES6 classes which take in props and return JSX/HTML code.

# Props
They are optionsl inputs that the components can accept.
When we have an idea of what data we want to pass, we pass it as attributes. When we have no idea of what kind of data has to be passed or we want to pass dynamic HTML, we pass them as children inside the component's opening and closing tag. These are rendered using `{props.children}` inside the specific component.
Props are immutable. Think of them as constant values being passed which cant be changed.

Some info about props:
- We can pass default values for props to fall back onto. 
<img src="https://i.imgur.com/2Sesdby.png">
- We can pass functions as props. IT comes handy in cases like event management etc. 
<img src="https://i.imgur.com/HbcMuVO.png">

### Prop Validation
It is used to check if the correct data types are being passed as props into the components.
Consider it very similar to an interface in typescript.
<img src="https://i.imgur.com/hFuhZvY.png">
Here, we are describing what data types can each prop have for the component.

### Prop Drilling
It is when a prop gets passed from parents to child components without some components needing it. 
Say, a prop gets passed from *App -> Parent -> Child -> Grandchild* and only the grandchild needs it. So, this is a case of prop drilling. 
We can deal with it using **React Context and Redux.**

### React Context
We create a global kind of data store that allows access of data to all components. 

Steps to use React Context:
1. We create a context (a store of all data);
2. Provide the context at the top of the component where the prop is defined. 
3. Call the context wherever needed and use the prop value.