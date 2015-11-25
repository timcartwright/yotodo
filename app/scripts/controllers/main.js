'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', function ($q) {

    var main = this;

    var getItemsFromParse = function() {

      var ToDoList = Parse.Object.extend("Task");
      var deffered = $q.defer();
      var query = new Parse.Query(ToDoList);
      query.find({
        success: function(data) {
          deffered.resolve(data);
          console.log("got em");
        },
        error: function(error) {
          deffered.reject(error);
          console.log("bugger");
        }
      });

      return deffered.promise;
        
    };

    getItemsFromParse()
      .then(function(data) {
        main.todos = [];
        for(var i=0; i < data.length; i++) {
          main.todos.push(data[i].get("task"));
        };
      }, function(error) {
        console.log("bugger");
      });


    main.addTodo = function() {

      var task = Parse.Object.extend("Task");
      var newTask = new task();
      newTask.set("task", main.todo);
  
      newTask.save(null, {
        success: function(newTask) {
          console.log('Saved');
        },
        error: function(newTask, error) {
          alert('Failed to create new object, with error code: ' + error.message);
        }
      });

    };

    main.removeTodo = function(index) {
      main.todos.splice(index, 1);
    };
  });
