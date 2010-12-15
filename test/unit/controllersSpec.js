beforeEach(function(){
  this.addMatchers({
    toEqualData: function(expected) {
      return angular.equals(this.actual, expected);
    }
  });
});


describe('CatalogCtrl', function(){
  var rootScope, catalogCtrl, $browser;

  beforeEach(function(){
    rootScope = angular.scope();
    $browser = rootScope.$inject('$browser');
    $browser.xhr.expectGET('/app/phones/.json').respond([
      {id:'phone1', name:'Phone One', imageUrl:'http://img/url', snippet:'phone one snippet'},
      {id:'phone2', name:'Phone Two', imageUrl:'http://img/url', snippet:'phone two snippet'}
    ]);
    
    catalogCtrl = rootScope.$new(CatalogCtrl);
    $browser.xhr.flush();
  });


  it('should load phones', function() {
    expect(catalogCtrl.phones).toEqualData([
      {id: 'phone1', name: 'Phone One', imageUrl: 'http://img/url', snippet: 'phone one snippet'},
      {id: 'phone2', name: 'Phone Two', imageUrl: 'http://img/url', snippet: 'phone two snippet'}
    ]);
  });
  
});


describe('DetailCtrl', function() {
  var rootScope, detailCtrl, $browser;

  beforeEach(function(){
    rootScope = angular.scope();
    rootScope.params = {phoneId: 'phone1'};

    $browser = rootScope.$inject('$browser');
    $browser.xhr.expectGET('/app/phones/phone1.json').respond({
      id: 'phone1',
      name: 'Phone One',
      description: 'Shiny phone with nice display.'
    });

    detailCtrl = rootScope.$new(DetailCtrl);
    $browser.xhr.flush();
  });


  it('should load phone', function() {
    expect(detailCtrl.phone).toEqualData({
      id: 'phone1',
      name: 'Phone One',
      description: 'Shiny phone with nice display.'
    });
  });
});
