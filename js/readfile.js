
var fileUrl="./logs/log.txt";



$(document).ready(function(){
  $("#b01").click(function(){//比如再按钮的单击事件中
	htmlobj=$.ajax({url:fileUrl,async:false});//通过ajax读取test1.txt文本文件。
	var strArr=htmlobj.responseText.split(/\r\n/g);//根据回车换行符
	var strOut="";	
	for(var i=0;i<strArr.length;i++){
		strOut+=strArr[i]+"<br/>";
	}
	$("#myDiv").html(strOut);
  });
  
  $('#b02').click(function(){
    $(this).attr('disabled','disabled');
	$("#myDiv").html("比如再按钮的单击事件中");
    // other code
	});
});
 
 
