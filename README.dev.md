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

### model

To push a value into the $scope from the web page, you use `ng-model`.

For example, in the html below, the text in the text input field is pushed into the variable name within the Angular $scope.
```
<form name="frm">
  <input type="text" name="name" ng-model="name">
</form>
```
