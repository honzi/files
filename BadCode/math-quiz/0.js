function c(i){
	j=parseInt(z(0).innerHTML);
	k=parseInt(z(2).innerHTML);
	if(i==0){
		t=j+k
	}else if(i==1){
		t=j-k
	}else if(i==2){
		t=j*k
	}else{
		t=j/k
	}
}
function r(i){
	return Math.floor(Math.random()*i)
}
function q(i){
	if(i>0){
		if(parseInt(z(3).value)==t){
			z(4).innerHTML='correct!';
			z(5).innerHTML=parseInt(z(5).innerHTML)+1
		}else{
			z(4).innerHTML='incorrect!';
			z(5).innerHTML=0
		}
	}else if(i==0){
		z(4).innerHTML='skipped!';
		z(5).innerHTML=0
	}
	z(3).value='';
	z(0).innerHTML=r(100);
	j=r(z(6).checked?3:2);
	z(1).innerHTML='+-*'[j];
	z(2).innerHTML=r(100);
	c(j)
}
function z(i){
	return document.getElementById(i)
}
var t=0;
window.onkeydown=function(e){
	i=window.event?event:e;
	i=i.charCode?i.charCode:i.keyCode;
	if(i===13){
		q(1)
	}else if(i==72){
		q(0)
	}
};
window.onload=function(e){
	q(-1);
}
