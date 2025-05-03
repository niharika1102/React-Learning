# Difference between npm and npx
|npm|npx|
|---|---|
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
1. We create a context (a store of all data).
<img src="https://media-hosting.imagekit.io/60436b226a984e64/Screenshot%202025-04-30%20231913.png?Expires=1840723381&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SzFWtV8LeCPooran1oXU5JMjMPSFCgUDnnaWK0bR~qIRxGemo6FIkmXbcrQX8-uH7R2ioBeZYUOoko2Ior6VFDYzg2HLZx1y5kmHR1zCjgUcqbUVSXh124r1BuJLNZ5Ao9an1Le0XAau82Cgzl~rXOW-MjMUnN0wmukFy6uqyafi3EGTeFiSEywdeS7VY1bBwc3OssUUuto-Wiy-CSzmwJTBihDlllb8aum1PBzgHA~ZEmHjEc6-RVvHvAUO~7QQUr5spxFjz0pQ4GrEoaqTZFzDYvyqb9c~sSGt4H48LITgkjxovijIBHeDnd~ifE00CmzNYSqd2GX6PSQFCaMzIQ__">
2. Provide the context at the top of the component where the prop is defined. 
<img src="https://media-hosting.imagekit.io/67f1a4e07ce64e77/Screenshot%202025-04-30%20232448.png?Expires=1840723381&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=noI3VF7X8lAdd60f7ECMQXCjjCXIDTx~umrbS4F9j6kxkyuscKUjoVM-KW28gIKY1kDZg5FhsDSU8E1kK5bRf4ZoUC7sG0-aAG1hwNYXquDxzwK4xQSGYsxxA1MCnFg~CobuyIrOPo0m~mE7fpIKa2dI4t551c-UDfo~uHremoWfSEnuFWoAKNetWtupg0gwz9bqP-v~Sw8IT1i-ooJVV2QrNSPptLHh68wkuCKQPDKKzNyjagScv6W-ZMnTep4S9hNvvOjjzDoc2BABIOpX~7xtOXoWEoZ7Z5kybBbEdkr31gfTug77vr09JaR4uhgjZsDf8GQuweua2pKN8sA-VA__">
3. Call the context wherever needed and use the prop value.
<img src="https://media-hosting.imagekit.io/be27eb9c32384c13/Screenshot%202025-04-30%20232503.png?Expires=1840723381&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YNdNXFWzuUBCkd6bsoq6p17NX-CGME-29vV9e2fR-uIApakyiZ8XSeX3J7YaMeqvXDA0R~6OpGt~PKELzgaSzwk-Z6vovdr0I35bsVIqNbG-3yNwfLtgoL3JYi4TdjKqHZcHpfn6DDGjCHFFFc2gp9Cec1tI0ovu4kPdM7GnH37wmmlv~uChswMD2Wh-D1EoVKzkB2VCA6q1UiOLKFTxz9eRUI66q47UWoipbbwn2S16l4eU6i8oZr0nRpMJBiAGb9FVGavaG-AuAT4cGU4MRmi-8mNT6J4dZklnRmG~DFlRyAn9tAujpuQrdvyG6FxYZu9J0wnR2I5lBoELGQ9qwQ__">

# States
|Prop|State|
|---|---|
|They are passed to the component by its parent.|They are managed within the component.|
|They are similar to function parameters.|They are similar to variable passed to a function.|
|Immutable|Mutable|
|Accessed using `props` keyword.|Accessed using `useState` hook.|

- When the state changes, the component is re-rendered.

### State in functional component
<img src="https://media-hosting.imagekit.io/dc4e4d7483d14ad4/screenshot_1746121263720.png?Expires=1840729264&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DS39uEsZIY5y9UDr4qoZfVtXFm5WzwLdi-n0BGFXm6-GscsQRlK54HUosMLDmwDsiF0eSYereMJ0xAJc7xYCP7ajHvvMh3kSbEBcbuxqLgkyKEBOhi49o-zu1-ruJR3WP151yK~misNu82JMcpB0ob5x~zxQr0HarBOLmrpQY9V4jeuZVFYYlCAnRc9bKVI1VzxT~EJit5H26v~CqesPmCxear2h0JAnwQRax5OfmRqQ5zCTkt63NjY8Pf7sOHEfeU0cghmG9CCR6bVIxbMkLhbiM8RMTtxHizJuqJNj6CNFqKNLmQWd0n2pa~gcgeeVaM~TQWrLVDAH2tTsDmJkFQ__">
<img src="https://media-hosting.imagekit.io/d8853d25d532400e/screenshot_1746121340713.png?Expires=1840729341&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=s4TpK6em25VdIJMocQ-TSyQz5qfKBolLCR~3RS2mFn6Q9TO1ZWhdX7Y~hf4jShOpsyUmr0OKcC7C223v6m5RwFcN-GlJWiiCasgn0rClRKHUbtmi6p6JCFcVHKNvZv4lBs3MfbKF-mBXzegT-09GSnaymU0NFBOLuNhd6Xz8KPY23HVU976iOPm7MFeKVqL-HvUByib3k3GZiKronboJ-jZDV5bBPHllWN06OhlOPV6wdq1nskJhC5mHcpPNrdrQ~i1WpkpPFeWwveZmizMUsbjM3Cmzjz9uLokOVSfz-2p6l6RP6WaOv~aj8ZZDv0hU~IGbTr-pJzGmCHBCAr1hnA__">

- `setState` is an async call. So, the data of the state takes some time to update.
- To update the state based on the previous state, we use:
<img src="https://media-hosting.imagekit.io/86131a34780a436d/screenshot_1746121435314.png?Expires=1840729436&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1EnaqIb-7pcOuXGq3EOxGl2mM0hOHZ6thmha-6e~7AG5pgASxk2vCnPYzkRkcn7GrPqw6pHeZBG3aMJ94eqf0tNCQw2MDcbBrp~QFr7f6Qt~s5wdc88pvqVVSzJuyeFvlKKBscBk8EMR0xPh061ZnV-XsQ2VIxHFP1A1llTzkK5GMuIJgO9zOoQyNSNI14VUUvHXoUY02cGfLA5sx~UfdiBf2NhF9-SRi1fgxCvt4bkKvdl8df0POY7Dw5131km7zjomO7VnIxiIz~K6OyqH2IAyM~KZuKl-xAdhaehqUtbdBNWf-lkmmszkLviO7lqmcuLLRX5sIuqLvu2uu-zYLA__">
- We can merge states using this:
<img src="https://media-hosting.imagekit.io/2966c0e6d6544b09/screenshot_1746121553304.png?Expires=1840729554&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=srrsUYa0XG3Nytm2goq5JlIXjMvyD~6BDdreaOLOXOGthRWYLh2kfT34Mugl5cD-g5URNOvPF4ANHZpcdf0-oVVbUM02upFibRYZqz9HqyvWM2-UB5ONIKDikrV4wVkbTK-tWaiJ4FYSWWazjhJbLUW3zuAJSmtmtCDmFSeayUf2XTutb82gcu3E6DxEirmhWrw1x86gtA0TdQlsGATegK4akpIubxHr-ZvZgpTscr2ILxQfgSVEXt0idNxk6kA3khjsWa6w7iqA8Lh5NFgTmPrtG~sT-39Gg6oZahDJjF~LAoyIdqlkyYOfqy7f2WdSPeLKNG~lPu4Pm5FrMgioUQ__">
- The state resets on page reload. It persists on component re-render. If we wish to persist the state on page reload, we must use some database or redux.

### State Hoisting
- When 2 or more child components need a state, we hoist the state to the closest parent so that all children can access it. 
<img src="https://media-hosting.imagekit.io/39cd4400b7094aca/screenshot_1746122067914.png?Expires=1840730069&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jkiHqAZYd4km9S-qGGjFhIwKtTRIloM6uOMNOooi3N7NCHEP5OXPzzsYTIe5gPMQFnxzRO~kp3sUMaKXA7sZg~4zYUUXCcVbdJUYhiZ4DEkIOFLltEraotqFiEdUWEKy6xNjguuzsnMbb8cGn5GQ2iOGlKXPnE0k0RsAU6rt25XWON91qhcCZ~DDh8mfrd0Gb90lqmFQz3mcX0Gi5jua-FFhYigNBa8cc7hHC244QPJNVPjQttlyax~0sGajCc9M5dgE3Rxdk1Vn-wwMfE2aCftUnnblokSpwmUzVrLfzc4IX4DEgkJhF8Cdb9rgrPPqf1kpjG9J7Fh4lAzgYccxyQ__">
Here, since both Counter and Message components need the "count", we put it in their parent component from where both can access it.
- State is private to the component we declare it in. This means that only the component that declares the state can change or manage it. But, it does not mean that the state can't be sent to the component's children.
- The children cannot update the parent's state directly, but they can do it indirectly using `useCallback`.

# Event Handling
- We must always pass the event handler function as a function and not a function call i.e., not as `clickHandler()` but as `clickHandler`.
- We can pass the parent's events to its child as well.
- We do not interact with the browser's native event objects directly when we deal with events. Instead, React wraps the browsers' events in its own wrapper called **SyntheticEvent**. It is basically used to maintain consistency across all browsers.
- The event object clears out once the event handler finishes running. To persist it, we use `e.persist()`.

### Prevent Default and Stop Propogation
- Prevent default prevents the event from carrying out its default behaviour post the event execution is complete.
- Stop Propogation stops the event from bubbling up to the parent element.

### Event Bubbling
- The event just doesn't stay in the current component. It goes all the way upto the DOM tree. To prevent this, we use `stopPropogation()`.
