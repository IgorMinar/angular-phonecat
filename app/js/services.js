angular.service('phoneCatApp', function($route, $location, $resource, $window) {
  $route.when('/phones/', {template:'partials/catalog.html', controller:CatalogCtrl});
  $route.when('/phones/:phoneId', {template:'partials/detail.html', controller:DetailCtrl});
  $route.onChange(function() {
    if ($location.hash === '') {
      $location.updateHash('/phones/');
      this.$eval();
    } else {
      $route.current.scope.params = $route.current.params;
      $window.scrollTo(0,0);
    }
  });

  this.Phone = $resource('/app/phones/:phoneId.json');

}, {$inject:['$route', '$location', '$resource', '$window'], $creation: 'eager'});
