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

