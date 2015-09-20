
angular.module('starter.controllers')

.controller('ProductsCtrl', function($scope) {
  var cat = new Product('Frescos', 'assets/img/frescos.png', 'Lorem ipsum dolor');
  var skyrim = new Product('Pulpas', 'assets/img/pulpas.png', 'Lorem ipsum dolor');
  var ninja = new Product('Tipicos', 'assets/img/product1.jpg', 'Lorem ipsum dolor');
  $scope.products = [skyrim, cat, ninja];
});

var Product = function(title, image, description) {
  this.title = title;
  this.image = image;
  this.description = description;
};
