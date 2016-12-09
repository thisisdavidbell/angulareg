
//create my angular module
var drbTodo = angular.module('drbTodo', []);


function drbController ($scope, $http) {
    $scope.formData = {}; // create blank formData to start with

// code run when drbController initialised in the html
  $http.get('/api/todos')
      .success(function(data) {
          $scope.todos = data;
          console.log(data);
      })
      .error(function(data) {
          console.log('Error: ' + data);
      });

  $scope.createTodo = function() {

          $http.post('/api/todos', $scope.formData)
              .success(function(data) {
                  $scope.formData = {}; // clear the form so our user is ready to enter another
                  $scope.todos = data; //update todos in scope - which will update anything in UI using todos.

              })
              .error(function(data) {
                  console.log('Error: ' + data);
              });
  };

  // delete all done ToDos
  $scope.deleteTodos = function() {
        for (todo in $scope.todos) {
            if ($scope.todos[todo].done) {
              deleteTodo(todo)
            }
        }
  };

  // delete a todo
 var deleteTodo = function(id) {
      $http.delete('/api/todos/' + id)
          .success(function(data) {
              $scope.todos = data;
              console.log(data);
          })
          .error(function(data) {
              console.log('Error: ' + data);
          });
};

}
