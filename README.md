AngularJS Tweenmax Draggable Knob
=======

A directive to use the [Tweenmax Draggable Plugin ](http://www.greensock.com/draggable/ "Tweenmax Draggable Plugin ") (type: rotation) in your AngularJS applications.

![alt text](http://www.fabiobiondi.com/demo/github/angular-tweenmax-draggable-knob/demo/imgs/knob.png "")


## Example
Live demo: http://www.fabiobiondi.com/demo/github/angular-tweenmax-draggable-knob/demo

## Usage
Add AngularJS and angular-tweebmax-draggable-knob.js  to your main file (index.html)
```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.3/angular.min.js"></script>
<script src="../src/angular-tweebmax-draggable-knob.js"></script>
```


Set `FBAngular` as a dependency in your module:
```javascript
var app = angular.module('YourApp', ['FBAngular'])
```


## USAGE

html:
```html
<img tmax-knob
     src="imgs/knob.png"
     width="410" height="410"
     on-drag-end="onDragEnd(rotation)"
     on-drag="onDrag(rotation)"
     style="-webkit-user-select: none;">
```

Controller:
```javascript
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
```
