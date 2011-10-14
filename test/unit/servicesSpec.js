describe('favorites', function(){

  describe('add', function() {

    it('should add phones to favorites and store them in cookie store',
      block(function($cookieStore, favarites) {
        expect($cookieStore.get('favorites')).toBeUndefined();
        favorites.add('abc123');
        expect($cookieStore.get('favorites')).toEqual({'abc123':true});
      }));

  });


  describe('remove', function() {

    it('should remove phones from favorites', block(function(favorites, $cookieStore) {
      favorites.add('abc123');
      expect($cookieStore.get('favorites')).toEqual({"abc123":true});

      favorites.remove('abc123');
      expect($cookieStore.get('favorites')).toEqual({});
    }));

  });


  describe('has', function() {

    it('should return true if an item is favorite', block(function(favorites) {
      expect(favorites.has('abc123')).toBe(false);

      favorites.add('abc123');

      expect(favorites.has('abc123')).toBe(true);
    }));

  });

});
