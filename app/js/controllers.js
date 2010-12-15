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
  this.selectedImg = 0;
}

DetailCtrl.prototype.selectImg = function(index) {
  this.selectedImg = index;
}