angular.module('starter.controllers')

.controller('GaleryCtrl', function($scope, $ionicSlideBoxDelegate) {
  $scope.images = [new ImageSlide(null, 'assets/img/product1.jpg'), new ImageSlide(null, 'assets/img/product2.jpg'), new ImageSlide(null, 'assets/img/product3.jpg')];
  $ionicSlideBoxDelegate.update();
});

var ImageSlide = function(title, path) {
  this.title = title;
  this.path = path;
};
