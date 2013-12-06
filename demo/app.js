'use strict';

//var app = angular.module('DemoApp', ['FBAngular']);
var app = angular.module("DemoApp", ["FBAngular"]);




/**
 * Main Controller
 */
function MainCtrl($scope) {

   /**
    * DRAG event handler
    */
   $scope.onDrag = function(value) {
      $scope.currentRotation = value;
   }

   /**
    * DRAG END event handler
    */
   $scope.onDragEnd = function(value) {

      $scope.currentRotation = value;
      console.log ("DRAG_END", value)
   }

   
}

