function d(){
	if(ka){
		prx+=4
	}
	if(kd){
		prx-=4
	}
	if(ks){
		pry-=4
	}
	if(kw){
		pry+=4
	}

	prx+=pcx;
	if(prx<0){
		prx+=360
	}else if(prx>360){
		prx-=360
	}
	pry+=pcy;
	if(pry>45){
		pry=45
	}else if(pry<-45){
		pry=-45
	}

	bx.fillStyle='#000';
	bx.fillRect(0,0,z('c').width,z('c').height);

	i=srs.length-1;
	if(i>=0){
		do{
			drw=0;
			dif=srs[i][0];
			if(pry>180){
				dif+=180
			}else{
				dif-=180
			}
			if(prx-dif>=70||prx-dif<=-70){
				if(!drw){
					dif+=360;
					if(prx-dif<70&&prx-dif>-70){
						drw=1
					}
				}
				if(!drw){
					dif-=360;
					if(prx-dif<70&&prx-dif>-70){
						drw=1
					}
				}
			}else{
				drw=1
			}
			if(drw){
				bx.fillStyle=srs[i][3];
				bx.beginPath();
				bx.arc(x+(x*(prx-dif))/45,y-y*.3-(y*srs[i][1])+(y*pry)/45,srs[i][2]!=0?srs[i][2]:n(3),0,Math.PI*2,false);
				bx.closePath();
				bx.fill()
			}
		}while(i--)
	}



	var ti=(y*pry)/45;
	i=bx.createLinearGradient(x,z('c').height+ti,x,y*.8+ti);
	i.addColorStop(0,gc);
	i.addColorStop(1,'#000');
	bx.fillStyle=i;
	bx.fillRect(0,y*.9+ti,z('c').width,y*2-ti);



	if(px>=0&&py<23){
		py+=egi[2];
		if(egi[4]){
			if(py>=23){
				prx-=90
			}
		}
	}else if(py>=23&&px>-11){
		px-=egi[2];
		if(egi[4]){
			if(px<=-11){
				prx-=90
			}
		}
	}else if(px<=-11&&py>-3){
		py-=egi[2];
		if(egi[4]){
			if(py<=-3){
				prx-=90
			}
		}
	}else if(py<=-3&&px<0){
		px+=egi[2];
		if(egi[4]){
			if(px>=0){
				prx-=90
			}
		}
	}


	lv.sort(function(a,b){return parseFloat(a[2])-parseFloat(b[2])});
	var dif=drw=mtx=mty=0;

	i=lv.length-1;
	do{
		lv[i][2]=Math.abs(Math.sqrt(Math.pow(lv[i][0]-px,2)+Math.pow(lv[i][1]-py,2)));
		if(lv[i][2]<egi[5]){
			dif=Math.atan((lv[i][0]-px)/(lv[i][1]-py))*(180/Math.PI);
			if(py>lv[i][1]){
				dif+=180
			}
			drw=0;

			if(prx-dif>=70||prx-dif<=-70){
				if(!drw){
					dif+=360;
					if(prx-dif<70&&prx-dif>-70){
						drw=1
					}
				}
				if(!drw){
					dif-=720;
					if(prx-dif<70&&prx-dif>-70){
						drw=1
					}
				}
			}else{
				drw=1
			}
			if(drw){
				bx.fillStyle='rgb('+parseInt(lv[i][3]-lv[i][3]*(lv[i][2]/egi[5]))+','+parseInt(lv[i][4]-lv[i][4]*(lv[i][2]/egi[5]))+','+parseInt(lv[i][5]-lv[i][5]*(lv[i][2]/egi[5]))+')';
				ti=(x*(prx-dif))/45;
				var ty=(lv[i][7]>40?-mty*.25:0)+(y*pry-lv[i][2])/45;
				mtx=(50/lv[i][2])*lv[i][6];
				mty=(50/lv[i][2])*lv[i][7];
				bx.beginPath();
				bx.moveTo(x+ti,y-mty*.6+ty);
				bx.lineTo(x-mtx*.4+ti,y+mty/2+ty);
				bx.lineTo(x+mtx*.4+ti,y+mty/2+ty);
				bx.closePath();
				bx.fill()
			}
		}
	}while(i--);
	prx-=pcx;
	if(prx<0){
		prx+=360
	}else if(prx>360){
		prx-=360
	}
	pry-=pcy;
	if(pry>90){
		pry=90
	}else if(pry<-90){
		pry=-90
	}
	cx.drawImage(z('b'),0,0)
}
function n(i){
	return Math.floor(Math.random()*i)
}
function r(){
	if(u>0){
		z('b').width=z('c').width=window.innerWidth;
		z('b').height=z('c').height=window.innerHeight;
		x=z('c').width/2;
		y=z('c').height/2
	}
}
function su(){
	i=6;
	do{
		j=['si','st','sp','pl','ct','dd','sv'][i];
		if(z(j).checked&&(isNaN(z(j).value)||z(j).value==[30,230,.07,0,1,25,1][i]||z(j).value<[1,0,0,0,0,1,0][i])){
			ls.removeItem('hr'+i);
			egi[i]=[30,230,.07,0,1,25,1][i];
			z(j).value=egi[i]
		}else{
			egi[i]=parseFloat(z(j).value);
			ls.setItem('hr'+i,egi[i])
		}
	}while(i--)
}
function v(i){
	clearInterval(tm);
	lv=[];
	srs=[];
	mlx=-1;
	u=i;
	if(i>0){
		gc='#330';
		ka=0;
		kd=0;
		ks=0;
		kw=0;
		i=220;
		px=0;
		pcx=0;
		pcy=0;
		prx=0;
		pry=0;
		py=0;
		do{
			lv.push([3+Math.random()*5,-5+Math.random()*30,0,n(150),n(150),0,8,40]);
			lv.push([8-Math.random()*25,25+Math.random()*10,0,n(150),n(150),0,8,40]);
			lv.push([-3-Math.random()*5,Math.random()*20,0,n(150),n(150),0,8,40]);
			lv.push([-20+Math.random()*5,-5+Math.random()*30,0,n(150),n(150),0,8,40]);
			lv.push([8-Math.random()*25,-15+Math.random()*10,0,n(150),n(150),0,8,40])
		}while(i--);
		if(egi[3]>0){
			i=egi[3]-1;
			do{
				srs.push([Math.random()*360,Math.random()*2,n(195)+5,'#'+n(9)+''+n(9)+''+n(9)])
			}while(i--)
		}
		if(egi[1]>0){
			i=egi[1]-1;
			do{
				srs.push([Math.random()*360,Math.random()*2.9-.2,0,'#fff'])
			}while(i--)
		}
		i=lv.length-1;
		do{
			lv[i][2]=Math.abs(Math.sqrt(Math.pow(lv[i][0]-px,2)+Math.pow(lv[i][1]-py,2)))
		}while(i--);
		z('v').innerHTML='<canvas id=c oncontextmenu="return false"></canvas>';
		bx=z('b').getContext('2d');
		cx=z('c').getContext('2d');
		r();
		tm=setInterval('d()',parseInt(egi[0]))
	}else{
		bx=0;
		cx=0;
		z('v').innerHTML='<div style=display:inline-block;text-align:left;vertical-align:top><div class=c><a href=/><b>Hayride</b></a></div><hr><div class=c><a onclick=v(1)>Test Hayride</a></div><hr><div class=c><input id=pl size=1 type=text value='+egi[3]+'>Planets<br><input id=sp size=1 type=text value='+egi[2]+'>Speed<br><input id=st size=1 type=text value='+egi[1]+'>Stars</div></div><div style="border-left:1px solid #444;display:inline-block;text-align:right"><div class=c><a onclick=su();v(0)>Save</a> | <a onclick=z(\'ct\').checked=z(\'pl\').value=1;z(\'dd\').value=25;z(\'si\').value=30;z(\'st\').value=230;z(\'sp\').value=.07;z(\'sv\').value=1;su();v(0)>Reset</a></div><hr><div class=c style=text-align:left><input id=sv max=1 min=0 step=.01 type=range value='+egi[6]+'>Audio<br><input disabled size=1 type=text value=S>Camera ↓<br><input disabled size=1 type=text value=A>Camera ←<br><input disabled size=1 type=text value=D>Camera →<br><input disabled size=1 type=text value=W>Camera ↑<br><input'+(egi[4]?' checked':'')+' id=ct type=checkbox>Camera Lock<br><input id=dd size=1 type=text value='+egi[5]+'>Draw Distance<br><input id=si size=1 type=text value='+egi[0]+'>ms/Frame</div></div>'
	}
}
function z(i){
	return document.getElementById(i)
}

var bx=cx=gc=i=ka=kd=ks=kw=mlx=mly=mx=my=pcx=pcy=prx=pry=px=py=tm=u=x=y=0,
ls=window.localStorage,
egi=[
	ls.getItem('hr0')===null?30:parseInt(ls.getItem('hr0')),
	ls.getItem('hr1')===null?230:parseInt(ls.getItem('hr1')),
	ls.getItem('hr2')===null?.07:parseFloat(ls.getItem('hr2')),
	ls.getItem('hr3')===null?1:parseInt(ls.getItem('hr3')),
	ls.getItem('hr4')===null?1:0,
	ls.getItem('hr5')===null?25:parseInt(ls.getItem('hr5')),
	ls.getItem('hr6')===null?1:parseFloat(ls.getItem('hr6'))
],
lv=[],
srs=[];
v(0);

window.onkeydown=function(e){
	i=window.event?event:e;
	i=i.charCode?i.charCode:i.keyCode;
	if(i==27){
		v(0)
	}else if(u>0){
		if(i==65){
			ka=1
		}else if(i==68){
			kd=1
		}else if(i==83){
			ks=1
		}else if(i==87){
			kw=1
		}
	}
};
window.onkeyup=function(e){
	i=window.event?event:e;
	i=i.charCode?i.charCode:i.keyCode;
	if(i==65){
		ka=0
	}else if(i==68){
		kd=0
	}else if(i==83){
		ks=0
	}else if(i==87){
		kw=0
	}
};
window.onmousedown=function(e){
	if(u>0){
		mx=e.pageX;
		if(mx<0){
			mx=0
		}else if(mx>z('c').width){
			mx=z('c').width
		}
		my=e.pageY;
		if(my<0){
			my=0
		}else if(my>z('c').height){
			my=z('c').height
		}
		mlx=mx;
		mly=my
	}
};
window.onmousemove=function(e){
	if(mlx>0){
		mx=e.pageX;
		if(mx<0){
			mx=0
		}else if(mx>z('c').width){
			mx=z('c').width
		}
		my=e.pageY;
		if(my<0){
			my=0
		}else if(my>z('c').height){
			my=z('c').height
		}
		pcx=(mlx-mx)/5;
		pcy=(mly-my)/5
	}
};
window.onmouseup=function(){
	mlx=-1;
	mly=-1;
	prx+=pcx;
	pry+=pcy;
	pcx=0;
	pcy=0
};
window.onresize=r
