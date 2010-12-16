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

  var pathBase = $location.path.match(/(.*\/)[^\/]*/)[1];
  this.Phone = $resource(pathBase + 'phones/:phoneId.json');

}, {$inject:['$route', '$location', '$resource', '$window'], $creation: 'eager'});


angular.service('favorites', function($cookieStore){
  return {
    has: function(phoneId){
      return !!($cookieStore.get('favorites') || {})[phoneId];
    },
    add:function(phoneId) {
      var favorites = $cookieStore.get('favorites') || {};
      favorites[phoneId] = true;
      $cookieStore.put('favorites', favorites);
    },
    remove:function(phoneId) {
      var favorites = $cookieStore.get('favorites') || {};
      delete favorites[phoneId];
      $cookieStore.put('favorites', favorites);
    }
  };
}, {$inject:['$cookieStore']});