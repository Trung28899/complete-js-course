1. Execution Context: 
- In javascript, any variables or function that are not
inside any function has the global execution context. 
In other words, code are not in any function is associated
with global object
etc: lastName === window.lastName
- Code that is in the function has the scope of that function
only
- see video 37 minute 2:19 to see execution context demomstration
- Execution Context in details: Video 38

2. Hoisting: 
- Hoisting refering to calling the function (or variable) before even declaring it
+, See example in the code example

- Function Hoisting doesn't work with function expression. Only work
with function declaration
+, See example in the code example

3. Scope of variables: 
See videos

4. The 'this' Keyword: 
- 'this' key word refering to the current object 
of the context that contain it
- if the this key word is not inside any specified object 
> it will be referred to the Window object
- see code for more info