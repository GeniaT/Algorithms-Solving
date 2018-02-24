function _if(bool, func1, func2) {
  bool == true ? func1() : func2();
}

_if(false,function(){console.log("True")}, function(){console.log("false")});
