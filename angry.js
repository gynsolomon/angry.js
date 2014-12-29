(function(win, undefined){

  var ANGRY = function(){
    console.log("I'm ANGRY.js");
  };

  //expose
  win[ 'angry' ] = ANGRY;

})(window);
