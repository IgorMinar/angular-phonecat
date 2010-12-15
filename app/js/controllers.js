CatalogCtrl.$inject=['favorites'];
function CatalogCtrl(favorites) {
  this.favorites = favorites;
  this.phones = this.Phone.query();
  this.predicate = {
      carrier:''
  };
  this.orderField = 'age';
}

function DetailCtrl() {
  this.phone = this.Phone.get({phoneId: this.params.phoneId});
}