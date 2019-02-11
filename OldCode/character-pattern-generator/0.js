function g(){
	z(0).innerHTML='';
	i=parseInt(z(4).value)-1;
	do{
		j=parseInt(z(5).value)-1;
		q='<span>';
		do{
			q+=z(1).value
		}while(j--)
		q+='</span>';
		z(0).innerHTML=z(0).innerHTML+q
	}while(i--);
	q='';
	i=document.getElementsByTagName('span');
	j=i.length-1;
	do{
		i[j].style.letterSpacing=z(2).value+'px';
		i[j].style.marginBottom=z(3).value+'px'
	}while(j--)
}
function r(){
	if(confirm('Reset?')){
		z(0).innerHTML='';
		z(1).value='H';
		z(2).value=-5;
		z(3).value=-7;
		z(4).value=z(5).value=10
	}
}
function z(i){
	return document.getElementById(i)
}
window.onkeydown=function(e){
	i=window.event?event:e;
	i=i.charCode?i.charCode:i.keyCode;
	if(i===13){
		g()
	}
}
