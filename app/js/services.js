angular.service('myAngularApp', function($route) {

  this.$become(AppCtrl);

  $route.when('/myctrl1', {template:'partials/p1.html', controller:MyCtrl1});
  $route.when('/myctrl2', {template:'partials/p2.html', controller:MyCtrl2});

}, {$inject:['$route']});