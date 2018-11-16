function d(){
	if(ka){
		px+=g[2]*kh
	}
	if(kd){
		px-=g[2]*kh
	}
	if(ks){
		py-=g[2]*kh
	}
	if(kw){
		py+=g[2]*kh
	}
	if(g[5]){
		b.clearRect(0,0,w,h)
	}
	b.translate(px+x,py+y);
	i=s.length-1;
	if(i>=0){
		b.fillStyle='#243';
		do{
			b.fillRect(s[i][0],s[i][1],s[i][2],s[i][3])
		}while(i--)
	}
	i=ns.length-1;
	if(i>=0){
		do{
			if(ns[i][5]>=ns[i][6]){
				ns[i][5]=0;
				ns[i][7]=n(ns[i][2]);
				ns[i][8]=n(ns[i][3]);
				ns[i][9]=n(ns[i][4])
			}else{
				ns[i][5]+=1
			}
			j[i]=[ns[i][7],ns[i][8],ns[i][9]];
			b.fillStyle='rgb('+j[i][0]+','+j[i][1]+','+j[i][2]+')';
			b.fillRect(ns[i][0],ns[i][1],40,40)
		}while(i--)
	}
	i=no.length-1;
	if(i>=0){
		b.fillStyle=sl!=-1?'rgb('+j[sl][0]+','+j[sl][1]+','+j[sl][2]+')':'#fff';
		do{
			b.fillRect(no[i][0],no[i][1],40,40)
		}while(i--)
	}
	if(sl>-1){
		i=nl.length-1;
		if(i>=0){
			b.lineWidth=(j[sl][0]+j[sl][1]+j[sl][2])/30;
			b.beginPath();
			do{
				b.moveTo(nl[i][0],nl[i][1]);
				b.lineTo(nl[i][2],nl[i][3]);
			}while(i--);
			b.moveTo([-540,-420][sl],[110,195][sl]);
			b.lineTo(-420,110);
			b.closePath();
			b.strokeStyle='rgb('+j[sl][0]+','+j[sl][1]+','+j[sl][2]+')';
			b.stroke()
		}
	}
	b.translate(-px-x,-py-y);
	b.font='23pt sans-serif';
	b.fillStyle='#fff';
	b.fillText(-px+'x'+-py+'y',5,h-5);
	if(g[5]){
		c.clearRect(0,0,w,h)
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
		d()
	}
}
function su(){
	i=2;
	do{
		var ii=['sv','si','sc'][i];
		if(isNaN(z(ii).value)||z(ii).value==[1,30,10][i]||z(ii).value<[0,1,1][i]){
			l.removeItem('sim-node'+i);
			g[i]=[1,30,10][i];
			z(ii).value=g[i]
		}else{
			g[i]=parseFloat(z(ii).value);
			l.setItem('sim-node'+i,g[i])
		}
	}while(i--);
	i=1;
	do{
		if(z(['km','kh'][i]).value==['WASD','H'][i]){
			l.removeItem('sim-node'+(i+3));
			g[i+3]=['WASD','H'][i]
		}else{
			g[i+3]=z(['km','kh'][i]).value;
			l.setItem('sim-node'+(i+3),g[i+3])
		}
	}while(i--);
	g[5]=z('cl').checked;
	if(g[5]){
		l.removeItem('sim-node5')
	}else{
		l.setItem('sim-node5',0)
	}
}
function v(i){
	clearInterval(tm);
	u=i;
	if(u>0){
		su();
		ka=0;
		kd=0;
		ks=0;
		kw=0;
		px=0;
		py=0;
		sl=-1;
		nl=[
			[-420,110,-80,110],
			[-80,110,120,-80],
			[120,-80,0,-200],
			[120,-80,240,-200],
			[120,-80,240,40]
		];
		no=[
			[-440,90],
			[-100,90],
			[100,-100]
		];
		j=[
			[0,0,0],
			[0,0,0]
		];
		ns=[
			[-560,90,0,256,256,0,11,0,256,256],
			[-440,175,256,256,0,0,4,256,256,0]
		];
		s=[
			[-570,80,60,60],
			[-450,80,400,150],
			[90,-110,60,60]
		];
		z('v').innerHTML='<canvas id=c></canvas>';
		b=z('b').getContext('2d');
		c=z('c').getContext('2d');
		r();
		tm=setInterval('d()',g[1])
	}else{
		b=0;
		c=0;
		z('v').innerHTML='<div style=display:inline-block;text-align:left;vertical-align:top><div class=c><a href=/><b>Nodes-2D</b></a></div><hr><div class=c style=color:#f00>SEIZURE WARNING!<br>FLASHING COLORS!</div><hr><div class=c><ul><li><a onclick=v(1)>Test Network</a></ul></div></div><div style="border-left:8px solid #222;display:inline-block;text-align:left"><div class=c>Camera:<ul><li><input id=km maxlength=4 value='+g[3]+'>↑←↓→<li><input disabled style=border:0 value=Shift>Sprint</ul><input id=kh maxlength=1 value='+g[4]+'>Home<br><input disabled style=border:0 value=ESC>Main Menu<br><input disabled style=border:0 value=Click>Select</div><hr><div class=c><input id=sv max=1 min=0 step=.01 type=range value='+g[0]+'>Audio<br><label><input '+(g[5]?'checked ':'')+'id=cl type=checkbox>Clear</label><br><input id=si value='+g[1]+'>ms/Frame<br><input id=sc value='+g[2]+'>Scroll Speed<br><a onclick="if(confirm(\'Reset settings?\')){z(\'cl\').checked=z(\'sv\').value=1;z(\'kh\').value=\'H\';z(\'km\').value=\'WASD\';z(\'sc\').value=10;z(\'si\').value=30;su();v(0)}">Reset Settings</a></div></div>'
	}
}
function z(i){
	return document.getElementById(i)
}
var b=c=h=ka=kd=ks=kw=mx=my=px=py=tm=u=x=y=0,
j=nl=no=ns=s=wtxt=[],
kh=1,
i=3,
l=window.localStorage,
g=[
	l.getItem('sim-node0')===null?1:parseFloat(l.getItem('sim-node0')),
	l.getItem('sim-node1')===null?30:parseInt(l.getItem('sim-node1')),
	l.getItem('sim-node2')===null?10:parseInt(l.getItem('sim-node2')),
	l.getItem('sim-node3')===null?'WASD':l.getItem('sim-node3'),
	l.getItem('sim-node4')===null?'H':l.getItem('sim-node4'),
	l.getItem('sim-node5')===null
],
sl=-1;
v(0);
window.onkeydown=function(e){
	if(u>0){
		i=window.event?event:e;
		i=i.charCode?i.charCode:i.keyCode;
		if(String.fromCharCode(i)===g[3][1]){
			ka=1
		}else if(String.fromCharCode(i)===g[3][3]){
			kd=1
		}else if(String.fromCharCode(i)===g[3][2]){
			ks=1
		}else if(String.fromCharCode(i)===g[3][0]){
			kw=1
		}else if(i==16){
			kh=2
		}else if(i==72){
			px=0;
			py=0
		}else if(i==27){
			v(0)
		}
	}
};
window.onkeyup=function(e){
	i=window.event?event:e;
	i=i.charCode?i.charCode:i.keyCode;
	if(String.fromCharCode(i)===g[3][1]){
		ka=0
	}else if(String.fromCharCode(i)===g[3][3]){
		kd=0
	}else if(String.fromCharCode(i)===g[3][2]){
		ks=0
	}else if(String.fromCharCode(i)===g[3][0]){
		kw=0
	}else if(i==16){
		kh=1
	}
};
window.onmousedown=function(e){
	if(u>0){
		e.preventDefault();
		sl=-1;
		i=ns.length-1;
		if(i>=0){
			mx=e.pageX;
			my=e.pageY;
			do{
				if(mx>ns[i][0]+x+px&&mx<ns[i][0]+x+px+40&&my>ns[i][1]+y+py&&my<ns[i][1]+y+py+40){
					sl=i;
					break
				}
			}while(i--)
		}
	}
};
window.onresize=r
