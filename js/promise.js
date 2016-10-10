
//Promise 用法 回调函数串行执行
function f1(data){
	var po=new Promise(function(resolved,reject){
		setTimeout(function(){
			$("#word").append(data);
			$("#word").show();
			
		},1000);
		resolved();
	});
	return po;
}
 function f2(data){
	var po=new Promise(function(resolved,reject){
		setTimeout(function(){
			$("#word").append(data);$("#word").show();
			
		},1000);
		resolved('f1');
	});
	return po;
}
 function f3(data){
	var po=new Promise(function(resolved,reject){
		setTimeout(function(){
			$("#word").append(data);$("#word").show();
			
		},1000);
		resolved('f2');
	});
	return po;
}