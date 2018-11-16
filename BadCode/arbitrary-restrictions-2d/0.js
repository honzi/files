function d(){
	if(p.length>1){
		ar-=1;
		if(ar<1){
			ar=n(g[3]);
			ec+=1;

			art=n(100)+1;
			if(art==100){
				att='MercyEvent';
				lv.length=0
			}else{
				att='LavaSpawnEvent';
				lv.push([n(g[4])-g[4]/2-15,n(g[5])-g[5]/2-15])
			}
			rd()
		}
	}
	if(g[6]){
		c.clearRect(0,0,w,h)
	}

	c.font='23pt sans-serif';
	c.textAlign='left';
	c.fillStyle='#fff';
	c.fillText(ec+' events, '+ar,5,35);
	c.fillText('Latest: '+att,5,70);
	c.fillText(p.length+'/'+g[2]+' alive ('+(p.length/g[2]*100).toFixed(2)+'%)',5,105);

	if(p.length<2){
		c.fillText(p.length==1?'Winner: #'+p[0][0]:'DRAW',5,140)
	}

	c.drawImage(z('b'),0,0)
}
function n(i){
	return Math.floor(Math.random()*i)
}
function ps(i){
	if(g[0]>0){
		z(i).currentTime=0;
		z(i).play()
	}
}
function r(){
	if(u>0){
		w=z('b').width=z('c').width=window.innerWidth;
		h=z('b').height=z('c').height=window.innerHeight;
		x=w/2;
		y=h/2;
		rd()
	}
}
function rd(){
	if(g[6]){
		b.clearRect(0,0,w,h)
	}

	b.translate(x,y);
	b.fillStyle='#111';
	b.fillRect(-g[4]/2,-g[5]/2,g[4],g[5]);

	i=lv.length-1;
	if(i>=0){
		b.fillStyle='#f00';
		do{
			b.fillRect(lv[i][0],lv[i][1],30,30)
		}while(i--)
	}

	b.font='23pt sans-serif';
	b.textAlign='center';

	i=p.length-1;
	if(i>=0){
		if(lv.length>0){
			do{
				j=lv.length-1;
				do{
					if(p[i][1]<lv[j][0]+30
						&&p[i][1]>lv[j][0]-30
						&&p[i][2]<lv[j][1]+30
						&&p[i][2]>lv[j][1]-30){
						p.splice(i,1);
						break
					}
				}while(j--)
			}while(i--)
		}

		b.fillStyle='#0f0';
		i=p.length-1;
		if(i>=0){
			do{
				b.fillRect(p[i][1],p[i][2],30,30);
			}while(i--);

			b.fillStyle='#000';
			i=p.length-1;
			do{
				b.fillText(p[i][0],p[i][1]+15,p[i][2]+25)
			}while(i--)
		}
	}
	b.translate(-x,-y);
}
function su(){
	i=5;
	do{
		var ii=['sv','si','np','art','hi','wi'][i];
		if(isNaN(z(ii).value)||z(ii).value==[1,30,5,150,500,500][i]||z(ii).value<[0,1,1,1,2,2][i]){
			l.removeItem('sim-arbitr2d'+i);
			g[i]=[1,30,5,150,500,500][i];
			z(ii).value=g[i]
		}else{
			g[i]=parseFloat(z(ii).value);
			l.setItem('sim-arbitr2d'+i,g[i])
		}
	}while(i--);
	g[6]=z('cl').checked;
	if(g[6]){
		l.removeItem('sim-arbitr2d6')
	}else{
		l.setItem('sim-arbitr2d6',0)
	}
}
function v(i){
	clearInterval(tm);
	lv.length=p.length=0;
	u=i;
	if(i>0){
		su();

		ar=100;
		art=0;
		att='';
		ec=0;

		i=g[2]-1;
		do{
			p.push([i,n(g[4])-g[4]/2-15,n(g[5])-g[5]/2-15])
		}while(i--);

		z('v').innerHTML='<canvas id=c></canvas>';
		b=z('b').getContext('2d');
		c=z('c').getContext('2d');
		r();
		tm=setInterval('d()',g[1])
	}else{
		b=c=0;
		z('v').innerHTML='<div style=display:inline-block;text-align:left;vertical-align:top><div class=c><a href=/><b>ArbitraryRestrictions-2D</b></a></div><hr><div class=c><ul><li><a onclick=v(1)>Test Survival</a></ul></div></div><div style="border-left:8px solid #222;display:inline-block;text-align:left"><div class=c><input disabled style=border:0 value=ESC>Main Menu</div><hr><div class=c><input id=sv max=1 min=0 step=.01 type=range value='+g[0]+'>Audio<br><label><input '+(g[6]?'checked ':'')+'id=cl type=checkbox>Clear</label><br><input id=art value='+g[3]+'>Event Timer<br><input id=hi value='+g[4]+'>Height<br><input id=si value='+g[1]+'>ms/Frame<br><input id=np value='+g[2]+'>#Players<br><input id=wi value='+g[5]+'>Width<br><a onclick="if(confirm(\'Reset settings?\')){z(\'art\').value=150;z(\'cl\').checked=z(\'sv\').value=1;z(\'hi\').value=z(\'wi\').value=500;z(\'np\').value=5;z(\'si\').value=30;su();v(0)}">Reset Settings</a></div></div>'
	}
}
function z(i){
	return document.getElementById(i)
}
var ar=art=b=c=ec=h=i=j=tm=u=x=y=0,
att='',
l=window.localStorage,
g=[
	l.getItem('sim-arbitr2d0')===null?1:parseFloat(l.getItem('sim-arbitr2d0')),
	l.getItem('sim-arbitr2d1')===null?30:parseInt(l.getItem('sim-arbitr2d1')),
	l.getItem('sim-arbitr2d2')===null?5:parseInt(l.getItem('sim-arbitr2d2')),
	l.getItem('sim-arbitr2d3')===null?150:parseInt(l.getItem('sim-arbitr2d3')),
	l.getItem('sim-arbitr2d4')===null?500:parseInt(l.getItem('sim-arbitr2d4')),
	l.getItem('sim-arbitr2d5')===null?500:parseInt(l.getItem('sim-arbitr2d5')),
	l.getItem('sim-arbitr2d6')===null
],
lv=[],
p=[];
v(0);
window.onkeydown=function(e){
	if(u>0){
		i=window.event?event:e;
		if((i.charCode?i.charCode:i.keyCode)==27){
			v(0)
		}
	}
};
window.onresize=r
