function CatalogCtrl() {
  this.phones = this.Phone.query();
}


function DetailCtrl() {
  this.phone = this.Phone.get({phoneId: this.params.phoneId});
  this.selectedImg = 0;
}

DetailCtrl.prototype.selectImg = function(index) {
  this.selectedImg = index;
}