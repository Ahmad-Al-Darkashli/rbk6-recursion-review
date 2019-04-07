// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var str = '[';
	
var stringifyJSON = function(input) {
  // var arr = [];
  // for (var key in obj){
  // 	arr.push(key+ ':' +obj[key])
  // }
  // return arr.toString();
  //return JSON.stringify(input)

if(typeof(input) === 'number'){
	return input.toString();
} else if(input === null) {
	return 'null'
} else if (input === true){
	return 'true';
}else if(input === false){
	return 'false';
} else if(typeof(input) === 'string') {
	return '"' +input+ '"' ;
} else if(Array.isArray(input)){
	
	for(var i = 0; i < input.length; i ++){
	if(input.length === 0){
		return "[]";
	 } else if(input.length > 1){
	 	 str = str + input + ']';
	 	 
	 }
	
  	
	
	
}
}







};
