describe('MyCtrl', function(){
  var myCtrl, $browser;

  beforeEach(function(){
    myCtrl = angular.scope().$new(AppCtrl).$new(MyCtrl);
    $browser = myCtrl.$inject('$browser');
  });
  
});

