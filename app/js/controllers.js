function CatalogCtrl() {
  this.phones = this.Phone.query();
}


function DetailCtrl() {
  this.phone = this.Phone.get({phoneId: this.params.phoneId});
}