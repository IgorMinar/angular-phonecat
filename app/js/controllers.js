function CatalogCtrl() {
  this.phones = this.Phone.query();
}
CatalogCtrl.$inject = [];


function DetailCtrl() {
  this.phones = this.Phone.get({phoneId: this.params.phoneId});
}