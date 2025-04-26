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

# filter, map and reduce funtions

They all are used as tools for an array.

- **Filter**: It is used to pick out only the values from the array which meet the condition specified.
  <img src="https://i.imgur.com/xK0TcH6.png">

- **Map**: It is used to perform operations on all elements of the array. These operations can range from simply printing all values to changing them via some logic.
  <img src="https://i.imgur.com/FQwexTD.png">
  It is not used when we want to log something. It should only be used when we want to return something. For logging, we should always use `forEach()`.

- **Reduce**: It is used to reduce the entire contents of the array to a single value by summing them up, multiplying them or via any other logic.
  <img src="https://i.imgur.com/XoHdESd.png">
  It needs an initial value to work on.

These all functions do not modify the original array. Rather, they create a copy of the array and work on it.

# Arrow Functions

They are a shorter way to write functions in JS. They do not have their own `this` keyword. They inherit it from the function where they are created not the object.
<img src="https://i.imgur.com/OgQt8Xm.png">

# Rest and Spread operator

- **Spread Operator**: It is used to spread out all values of an array or object into distinct entities.
  <img src="https://i.imgur.com/5JhzvNb.png">
  <img src="https://i.imgur.com/7Tb2Jpk.png">

- **Rest Operator**: It collects all distinct values into one object or array.
  <img src="https://i.imgur.com/WISPy0E.png">
  <img src="https://i.imgur.com/ZWh7ozc.png">

Both the operators create copies of the original array/object and do not modify the existing ones.

# Destructuring Assigment

It allows us to extract values from arrays and objects and assign them to variables in a clean and effieicnt way.

- **In Arrays:**
  <img src="https://i.imgur.com/OeLZkxw.png">
  <img src="https://i.imgur.com/fC1MZO1.png">

- **In Objects:**
  <img src="https://i.imgur.com/QCzQ3bH.png">
