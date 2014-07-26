angular.module('PhoneCat', ['ng'], function($route, $resoure, $service){
  $route
    .when('/phones/', {template:'partials/catalog.html', controller:CatalogCtrl})
    .when('/phones/:phoneId', {template:'partials/detail.html', controller:DetailCtrl})
    .otherwise({redirectTo:'/phones/'})
    .$onCreate(function($scope, $window){
      $scope.$on('$afterRouteChange', function() {
        $window.scrollTo(0,0);
      });
    });


  $resource
    .define('Phone', window.location.match(/(.*\/)[^\/]*/)[1] + 'phones/:phoneId.json');


  $service('favorites', ['$cookeStore', function($cookieStore){
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
    }]);
});
