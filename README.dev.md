# Learnt

### bind and {{ }}

To display a value in the page, you can use `ng-bind` to bind a dom element to the scope variable, or you can use {{}}

For example, both the following put the value of user.name from the Angular $scope into the div:
```
<div>
  Hello, <span ng-bind="user.name"></span>
</div>

```

```
<div>
  Hello, {{user.name}}
</div>
```

You can bind to a function too, so the response from the function will be displayed, e.g.:

Using `{{ }}`:
```
<div>I have this many todos to complete: {{ numTodos() }}</div>
```

and using `ng-bind`:
```
    <div ng-bind="numTodos()"></div>
```

### model

To push a value into the $scope from the web page, you use `ng-model`.
Note, model is 2 way, so it will show the value of the variable by default too.

For example, in the html below, the text in the text input field is pushed into the variable name within the Angular $scope. If the variable name had a value already, it will be displayed in the text field even before any user action.
```
<form name="frm">
  <input type="text" name="name" ng-model="name">
</form>
```
