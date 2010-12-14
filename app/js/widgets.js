angular.widget('my:time', function(compileElement){
  compileElement.css('display', 'block');
  return function(linkElement){
    function update(){
      linkElement.text('Current time is: ' + new Date());
      setTimeout(update, 1000);
    }
    update();
  };
});