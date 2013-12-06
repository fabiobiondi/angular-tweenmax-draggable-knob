angular.module('FBAngular', []).

directive("tmaxKnob", function () {

   return {
      restrict: "A",
      scope: {
         onDragEnd: "&",
         onDrag: "&"
      },

      link: function (scope, element) {


         Draggable.create(element, {
            
            type: "rotation", 

            // throwProps (ONLY TWEENMAX PREMIUM): enables kinetic-based flicking (continuation of movement, decelerating after releasing the mouse/finger)
            throwProps: false, 

            onDrag  : function (){

               scope.rotation = this.rotation;
               
               scope.$apply(function () {
                  scope.onDrag({rotation: scope.rotation})
               });

            },
            
            onDragEnd : function (){

               scope.rotation = this.rotation;

               scope.$apply(function () {
                  scope.onDragEnd({rotation: scope.rotation})
               });
            }

         });

         
         

      }

   }

})
