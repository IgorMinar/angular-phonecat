AppCtrl.$inject = ['$route', '$resource'];
function AppCtrl($route, $resource) {
  $route.when('/phones', {template:'partials/catalog.html', controller:CatalogCtrl});
  //$route.when('/phones/:phoneId', {template:'partials/detail.html', controller:DetailCtrl});
  //$route.when('/compare/:phoneIds', {template:'partials/compare.html', controller:CompareCtrl});


  this.phones = $resource('/app/phones.json').query();


  this.greet = function(name) {
    return 'Hello ' + (name || 'world');
  }
}


function MyCtrl1() {

  this.action = function() {
    return 'no action';
  }

}


function MyCtrl2() {

  var counter = 0;

  this.incCounter = function() {
    return counter++;
  }

}