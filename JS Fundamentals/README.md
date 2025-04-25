# 'this' Keyword in JS

- It is a pointer or reference to an object

## Output of 'this' in different scopes

- Global scope:
<img src="https://i.imgur.com/YMdAAXd.png">

- Functions:
<img src="https://i.imgur.com/3Dgh4j8.png">

- Object Methods:
<img src="https://i.imgur.com/MH49WF5.png">

- Arrow Functions:<br>
Arrow functions do not have their own `this`. They pick it up from the place where the function was defined.
<img src="https://i.imgur.com/0d6hZwI.png">
    It might seem that this should point to the user. But it does not. This is because sayHi() is an arrow function so does not have a "this" of its own. Its outer scope is the global scope, so it shows undefined. Remember: in an arrow function, it will pick the scope of a function and user is an object.
    <br>
    <br>
    <img src="https://i.imgur.com/2PHLOMr.png">
    Here it works because it is a normal function.
    <br>
    <br>
    <img src="https://i.imgur.com/eqlwMjA.png">
    Since, psrent scope is that of a function, the this keyword in setInterval() picks the scope from Timer() function and works as expected.

- Class Methods:
<img src="https://i.imgur.com/D0nXgI1.png">
