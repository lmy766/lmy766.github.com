
// 并行执行6次async,最后执行done
 function start(){
	
	var items = [ 1, 2, 3, 4, 5, 6 ];
	var results = [];

	items.forEach(function(item) {
		async(item, function(result){
			results.push(result);
			if(results.length == items.length) {
				done(results);
			}
		})
	});
 
}
function async(item,callback){
	//var po=new Promise(function(resolved,reject){
		setTimeout(function(){
			$("#word").append(item);
			$("#word").show();
			callback();
		},1000);
	//	resolved();
//	});
	//return po;
}
function done(){
	setTimeout(function(){
			$("#word").append('done');
			$("#word").show();
			
		},1000);
}


