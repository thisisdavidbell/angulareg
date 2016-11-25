
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
          console.log($scope.formData);
          $http.post('/api/todos', $scope.formData)
              .success(function(data) {
                          console.log($scope.formData);
                  $scope.formData = {}; // clear the form so our user is ready to enter another
                  $scope.todos = data; //update todos in scope - which will update anything in UI using todos.
                  console.log(data);
              })
              .error(function(data) {
                  console.log('Error: ' + data);
              });
      };

      // delete a todo after checking it
      $scope.deleteTodo = function(id) {
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
