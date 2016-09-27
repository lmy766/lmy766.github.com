var data=new Array(
"You are being watch.",/*
"The government has a secret system,",
"A machine that spies on you every hour of every day",
"I know because I built it.",
"I designed the machine to detect acts of terror but it sees everything.",
"Vielent crimes involving ordinary people,",
"People like you,",
"Crimes government considered irrelevant.",
"They wouldn't act so I decided I would.",
"I work in secret.",
"You'll never find me.",
"If your number is up,",*/
"I will find you."
);


var _index=0;
var flag=true;//Is allow print words
document.oncontextmenu = function (){ return false;} //ban mouse right button
document.touchstart=function(E){E.preventDefault();E.stopPropagation();}
window.onload = function(){	
    $("#icon").flicker(700);
    autoPrint(data[_index],openKey);//输出完成后开启键盘
} 
function createMenu(){
	$('body').GalMenu({
		'menu': 'GalDropDown'
	});    
	var items = document.querySelectorAll('.menuItem');
	for (var i = 0,	l = items.length; i < l; i++) {
		items[i].style.left = (50 - 35 * Math.cos( - 0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
		items[i].style.top = (50 + 35 * Math.sin( - 0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%"
  }    
}
 function openKey(){ 
	document.onkeydown=keydown;
	document.onmousedown=keydown;
 }
function closeKey(){
	document.onkeydown=null;
	document.onmousedown=null;
}
function keydown(event){
	var e = event || window.event || arguments.callee.caller.arguments[0]; 
	if(e && e.keyCode==13){ // enter  
		if(flag){
			_index++;
			if(_index==data.length){
				flag=false;
			}else{	 
				closeKey();
				autoPrint(data[_index],openKey);
			}	
		}	  
    }	
	if (event.button==2){  
		if(flag){
			if(_index>0){
				_index--;
				closeKey();
				autoPrint(data[_index],openKey);
			}	
		}else{
		createMenu();
		}		
	}else{ 
		if(flag){
			_index++;
			if(_index==data.length){
				flag=false;
			}else{	 
				closeKey();
				autoPrint(data[_index],openKey);
			}	
		}
	} 
}

$.fn.flicker = function (speed) {
    var n = 0;
    var _this = $(this);
    var timer = function () {        
        if (n % 2 == 0) {
            _this.show();
        } else {
            _this.hide();            
        }
        n++;
        setTimeout(arguments.callee, speed);//arguments.callee：引用当前正在执行的函数
   };   
   timer();
}

function autoPrint(words, callback) {
    var _this = $("#word");
    _this.html('');
    if (words.length * 10 < 400) {
        _this.width(words.length * 10);
    } else {
        _this.width(400);
    }
    _this.show();    
    var i = 0;
    var timer = function () {
        var current = words.slice(i, i + 1);
        if (current === '<') {
            i = words.indexOf('>', i) + 1;
        } else {
            i++;
        }        
        if (i < words.length) {
            _this.html(words.substring(0, i) + (i & 1 ? '_' : ''));
            setTimeout(arguments.callee, 100);
          
        } else {
            _this.html(words.substring(0, i));
            setTimeout(callback, 100);
        };       
    }
    setTimeout(timer, 1000);  
}
 





   