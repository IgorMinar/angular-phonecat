angular.module('PhaneCat-unit', function($service){
  $service('$route', angular.noop);
});

afterEach(function(){
  window.globalCurrentInjector = undefined;
});

function block(fn){
  return function(){
    if (!window.globalCurrentInjector)
      window.globalCurrentInjector = angular.injector('PhoneCat-unit');
    window.globalCurrentInjector.inferInvoke(fn);
  };
}

