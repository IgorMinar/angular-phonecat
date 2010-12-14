AppCtrl.$inject = ['$route', '$resource'];
function AppCtrl($route, $resource) {
  $route.when('/myctrl1', {template:'partials/p1.html', controller:MyCtrl1});
  $route.when('/myctrl2', {template:'partials/p2.html', controller:MyCtrl2});


  this.Data = $resource('');


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