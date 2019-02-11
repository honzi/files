function a(e){
	if(u>0){
		q=0;
		s+=(e.wheelDelta||-e.detail>0)>0?.05:-.05;
		if(s<.1){
			s=.1
		}else if(s>3){
			s=3
		}
		s=parseFloat(s.toFixed(2))
	}
}
function d(){
	i=Math.round(g[2]/s);
	if(ka){
		px+=i*kh
	}
	if(kd){
		px-=i*kh
	}
	if(ks){
		py-=i*kh
	}
	if(kw){
		py+=i*kh
	}
	if(g[5]){
		b.clearRect(0,0,w,h)
	}
	b.translate(x,y);
	b.scale(s,s);
	b.translate(px,py);
	i=o.length-1;
	if(i>=0){
		do{
			if(o[i][0]==2){
				if(o[i][4]!=0){
					o[i][2]+=o[i][4];
					if(o[i][2]<o[i][6]){
						if(o[i][8]){
							o[i][5]=-o[i][4];
							o[i][4]=0;
							j=o[i][6];
							o[i][6]=o[i][9];
							o[i][9]=j;
							j=o[i][7];
							o[i][7]=o[i][10];
							o[i][10]=j
						}else{
							o[i][4]*=-1;
							o[i][2]=o[i][6]+1
						}
					}else if(o[i][2]>o[i][7]){
						if(o[i][8]){
							o[i][5]=-o[i][4];
							o[i][4]=0;
							j=o[i][6];
							o[i][6]=o[i][9];
							o[i][9]=j;
							j=o[i][7];
							o[i][7]=o[i][10];
							o[i][10]=j
						}else{
							o[i][4]*=-1;
							o[i][2]=o[i][7]-1
						}
					}
				}else{
					o[i][3]+=o[i][5];
					if(o[i][3]<o[i][6]){
						if(o[i][8]){
							o[i][4]=o[i][5];
							o[i][5]=0;
							j=o[i][6];
							o[i][6]=o[i][9];
							o[i][9]=j;
							j=o[i][7];
							o[i][7]=o[i][10];
							o[i][10]=j
						}else{
							o[i][5]*=-1;
							o[i][3]=o[i][6]+1
						}
					}else if(o[i][3]>o[i][7]){
						if(o[i][8]){
							o[i][4]=o[i][5];
							o[i][5]=0;
							j=o[i][6];
							o[i][6]=o[i][9];
							o[i][9]=j;
							j=o[i][7];
							o[i][7]=o[i][10];
							o[i][10]=j
						}else{
							o[i][5]*=-1;
							o[i][3]=o[i][7]-1
						}
					}
				}
			}
			if(o[i][0]==1){
				if(o[i][2]>-x/s-px-(o[i][4]?50:o[i][6]/2)&&o[i][2]<x/s-px+(o[i][4]?50:o[i][6]/2)&&o[i][3]>-y/s-py-(o[i][4]?o[i][6]/2:50)&&o[i][3]<y/s-py+(o[i][4]?o[i][6]/2:50)){
					b.fillStyle='#444';
					if(o[i][4]){
						b.fillRect(o[i][2]-30,o[i][3]-o[i][6]/2,10,o[i][6]);
						b.fillRect(o[i][2]+20,o[i][3]-o[i][6]/2,10,o[i][6])
					}else{
						b.fillRect(o[i][2]-o[i][6]/2,o[i][3]-30,o[i][6],10);
						b.fillRect(o[i][2]-o[i][6]/2,o[i][3]+20,o[i][6],10)
					}
				}
			}else if(o[i][2]>-x/s-px-50&&o[i][2]<x/s-px+50&&o[i][3]>-y/s-py-50&&o[i][3]<y/s-py+50){
				if(o[i][0]==3){
					b.fillStyle='#930';
					b.fillRect(o[i][2]-10,o[i][3]+25,20,20);
					b.beginPath();
					b.moveTo(o[i][2],o[i][3]-50);
					b.lineTo(o[i][2]-30,o[i][3]+25);
					b.lineTo(o[i][2]+30,o[i][3]+25);
					b.closePath();
					b.fillStyle='#090';
					b.fill()
				}else if(o[i][0]==2){
					b.fillStyle='#55f';
					if(o[i][4]!=0){
						b.fillRect(o[i][2]-40,o[i][3]+(o[i][4]>0?15:-35),80,20)
					}else if(o[i][5]!=0){
						b.fillRect(o[i][2]+(o[i][5]>0?-35:15),o[i][3]-40,20,80)
					}
				}else{
					b.fillStyle=o[i][4];
					b.fillRect(o[i][2]-o[i][5]/2,o[i][3]-o[i][6]/2,o[i][5],o[i][6])
				}
			}
		}while(i--)
	}
	if(q){
		i=(mx-x)/s-px;
		e=(my-y)/s-py;
		if(t==1){
			b.fillStyle='#930';
			b.fillRect(i-10,e-15,20,20);
			b.beginPath();
			b.moveTo(i,e-90);
			b.lineTo(i-30,e-15);
			b.lineTo(i+30,e-15);
			b.closePath();
			b.fillStyle='#090';
			b.fill()
		}else if(t==2){
			b.fillStyle='#ddd';
			b.fillRect(Math.round(i/100)*100-50,Math.round(e/100)*100-50,100,100)
		}else if(t!=4){
			b.fillStyle='#444';
			i=Math.round(i/100)*100;
			e=Math.round(e/100)*100;
			if(t==3){
				b.fillRect(i-50,e-30,100,10);
				b.fillRect(i-50,e+20,100,10)
			}else{
				b.fillRect(i-30,e-50,10,100);
				b.fillRect(i+20,e-50,10,100)
			}
		}
	}
	b.translate(-px,-py);
	b.scale(1/s,1/s);
	b.translate(-x,-y);

	i=2;
	b.strokeStyle='#000';
	b.lineWidth=2;
	do{
		j=1;
		do{
			b.beginPath();
			b.rect(50*j,50*i,50,50);
			b.closePath();
			b.fillStyle=t==2*i+j?'#777':'#444';
			b.fill();
			b.stroke()
		}while(j--)
	}while(i--);

	b.beginPath();
	b.moveTo(10,110);
	b.lineTo(40,140);
	b.moveTo(40,110);
	b.lineTo(10,140);
	b.closePath();
	b.strokeStyle='#f00';
	b.lineWidth=5;
	b.stroke();

	b.fillStyle='#ddd';
	b.fillRect(10,60,30,30);

	b.fillRect(55,60,40,5);
	b.fillRect(55,85,40,5);

	b.fillRect(60,105,5,40);
	b.fillRect(85,105,5,40);

	b.fillStyle='#930';
	b.fillRect(70,37.5,10,10);

	b.beginPath();
	b.moveTo(75,2.5);
	b.lineTo(60,37.5);
	b.lineTo(90,37.5);
	b.closePath();
	b.fillStyle='#090';
	b.fill();

	b.font='23pt sans-serif';
	b.fillStyle='#fff';
	b.fillText('zoom: '+s,5,h-30);
	b.fillText(-px+'x'+-py+'y',5,h-5);

	if(g[5]){
		c.clearRect(0,0,w,h)
	}
	c.drawImage(z('b'),0,0)
}
function r(){
	if(u>0){
		w=z('b').width=z('c').width=window.innerWidth;
		h=z('b').height=z('c').height=window.innerHeight;
		x=w/2;
		y=h/2
	}
}
function su(){
	i=2;
	do{
		j=['sv','si','sc'][i];
		if(isNaN(z(j).value)||z(j).value==[1,30,10][i]||z(j).value<[0,1,1][i]){
			l.removeItem('tr'+i);
			g[i]=[1,30,10][i];
			z(j).value=g[i]
		}else{
			g[i]=parseFloat(z(j).value);
			l.setItem('tr'+i,g[i])
		}
	}while(i--);
	i=1;
	do{
		if(z(['kc','kh'][i]).value==['WASD','H'][i]){
			l.removeItem('tr'+(i+3));
			g[i+3]=['WASD','H'][i]
		}else{
			g[i+3]=z(['kc','kh'][i]).value;
			l.setItem('tr'+(i+3),g[i+3])
		}
	}while(i--);
	g[5]=z('cl').checked;
	if(g[5]){
		l.removeItem('tr5')
	}else{
		l.setItem('tr5',0)
	}
}
function v(i){
	clearInterval(tm);
	o.length=0;
	u=i;
	if(i>0){
		su();
		ka=0;
		kd=0;
		kh=1;
		ks=0;
		kw=0;
		mx=-1;
		my=-1;
		py=0;
		px=0;
		s=1;
		t=0;
		if(u==2){
			o=[
				[3,1,-225,50],
				[3,1,-210,-100],
				[3,1,-125,50],
				[3,1,175,200],
				[3,1,225,150],
				[3,1,250,-200],

				[0,1,-400,0,'#ddd',100,100],
				[0,0,1000,-200,'#ddd',100,100],
				[0,0,1000,200,'#ddd',100,100],
				[0,1,1200,0,'#ddd',100,100],

				[2,2,268,0,-2,0,-400,1200,0],
				[2,2,184,0,-2,0,-400,1200,0],
				[2,2,100,0,-2,0,-400,1200,0],

				[1,1,400,0,0,0,1500],

				[0,1,0,0,'#830',150,100],
				[0,1,1000,0,'#830',150,100],

				[2,2,1000,0,0,-2,-200,200,0],

				[2,2,0,-268,0,-2,-800,800,1,-600,0],
				[2,2,0,-184,0,-2,-800,800,1,-600,0],
				[2,2,0,-100,0,-2,-800,800,1,-600,0],


				[1,0,0,0,1,0,1650],


				[3,1,800,-200],
				[3,1,800,-100],
				[3,1,800,100],
				[3,1,800,200],

				[1,0,-600,0,1,0,1650],
				[1,1,-300,-800,0,0,650],
				[1,1,-300,800,0,0,650],
				[1,0,1000,0,1,0,300],

				[3,1,1200,-200],
				[3,1,1200,-100],
				[3,1,1200,100],
				[3,1,1200,200]
			]
		}
		z('v').innerHTML='<canvas id=c></canvas>';
		b=z('b').getContext('2d');
		c=z('c').getContext('2d');
		r();
		tm=setInterval('d()',g[1])
	}else{
		b=0;
		c=0;
		z('v').innerHTML='<div style=display:inline-block;text-align:left;vertical-align:top><div class=c><a href=/><b>Trains-2D</b></a></div><hr><div class=c><ul><li><a onclick=v(1)>Start New Track</a></ul></div><hr><div class=c><ul><li><a onclick=v(2)>Honz\'s World of Trains</a></ul></div></div><div style="border-left:8px solid #222;display:inline-block;text-align:left"><div class=c><input id=kc maxlength=4 value='+g[3]+'>Camera ↑←↓→<br><input id=kh maxlength=1 value='+g[4]+'>Home<br><input disabled style=border:0 value=ESC>Main Menu<br><input disabled style=border:0 value=Shift>Sprint</div><hr><div class=c><input id=sv max=1 min=0 step=.01 type=range value='+g[0]+'>Audio<br><label><input '+(g[5]?'checked ':'')+'id=cl type=checkbox>Clear</label><br><input id=si value='+g[1]+'>ms/Frame<br><input id=sc value='+g[2]+'>Scroll Speed<br><a onclick="if(confirm(\'Reset settings?\')){z(\'cl\').checked=z(\'sv\').value=1;z(\'kc\').value=\'WASD\';z(\'kh\').value=\'H\';z(\'sc\').value=10;z(\'si\').value=30;su()}">Reset Settings</a></div></div>'
	}
}
function z(i){
	return document.getElementById(i)
}
var b=c=ka=kd=ks=kw=h=i=j=mx=my=px=py=q=s=t=tm=u=w=x=y=0,
kh=1,
l=window.localStorage,
g=[
	l.getItem('tr0')===null?1:parseFloat(l.getItem('tr0')),
	l.getItem('tr1')===null?30:parseInt(l.getItem('tr1')),
	l.getItem('tr2')===null?10:parseInt(l.getItem('tr2')),
	l.getItem('tr3')===null?'WASD':l.getItem('tr3'),
	l.getItem('tr4')===null?'H':l.getItem('tr4'),
	l.getItem('tr5')===null
],
o=[];
v(0);

if('onmousewheel'in window){
	window.onmousewheel=a
}else{
	document.addEventListener('DOMMouseScroll',a,false)
}

window.onkeydown=function(e){
	if(u>0){
		q=0;
		i=window.event?event:e;
		i=i.charCode?i.charCode:i.keyCode;
		if(i>48&&i<53){
			t=i-49
		}else if(i==27){
			v(0)
		}else if(i==16){
			kh=2
		}else{
			i=String.fromCharCode(i);
			if(i===g[3][1]){
				ka=1
			}else if(i===g[3][3]){
				kd=1
			}else if(i===g[3][2]){
				ks=1
			}else if(i===g[3][0]){
				kw=1
			}else if(i==g[4]){
				px=0;
				py=0;
				s=1
			}
		}
	}
};
window.onkeyup=function(e){
	i=window.event?event:e;
	i=i.charCode?i.charCode:i.keyCode;
	if(i==16){
		kh=1
	}else{
		i=String.fromCharCode(i);
		if(i===g[3][1]){
			ka=0
		}else if(i===g[3][3]){
			kd=0
		}else if(i===g[3][2]){
			ks=0
		}else if(i===g[3][0]){
			kw=0
		}
	}
};
window.onmousedown=function(e){
	if(u>0){
		e.preventDefault();
		if(mx>100||my>150){
			if((t>0&&q)||t==4){
				i=(mx-x)/s-px;
				e=(my-y)/s-py;
				if(t!=4){
					o.splice(
						0,
						0,
						[
							[3,1,i,e-40],
							[0,1,Math.round(i/100)*100,Math.round(e/100)*100,'#ddd',100,100],
							[1,1,Math.round(i/100)*100,Math.round(e/100)*100,0,0,100],
							0,
							[1,0,Math.round(i/100)*100,Math.round(e/100)*100,1,0,100]
						][t-1]
					)
				}else{
					j=o.length-1;
					if(j>=0){
						do{
							if(o[j][0]==2){
								if(o[j][4]!=0){
									if(i>o[j][2]-40&&i<o[j][2]+40&&e>o[j][3]+(o[j][4]>0?15:-35)&&e<o[j][3]+(o[j][4]>0?15:-35)+20){
										o.splice(j,1);
										break
									}
								}else if(o[j][5]!=0){
									if(i>o[j][2]+(o[j][4]>0?-35:15)&&i<o[j][2]+(o[j][4]>0?-35:15)+20&&e>o[j][3]-40&&e<o[j][3]+40){
										o.splice(j,1);
										break
									}
								}
							}else if(o[j][0]==1){
								if(o[j][1]==1){
									if(i>o[j][2]-o[j][6]/2&&i<o[j][2]+o[j][6]/2&&e>o[j][3]-50&&e<o[j][3]+50){
										o.splice(j,1);
										break
									}
								}else if(i>o[j][2]-50&&i<o[j][2]+50&&e>o[j][3]-o[j][6]/2&&e<o[j][3]+o[j][6]/2){
									o.splice(j,1);
									break
								}
							}else if(e>o[j][3]-50&&e<o[j][3]+50){
								if(o[j][0]==3){
									if(i>o[j][2]-30&&i<o[j][2]+30){
										o.splice(j,1);
										break
									}
								}else if(o[j][0]==0){
									if(i>o[j][2]-50&&i<o[j][2]+50){
										o.splice(j,1);
										break
									}
								}
							}
						}while(j--)
					}
				}
			}
		}else{
			t=my<50?(mx<50?0:1):(mx<50?(my<100?2:4):(my<100?3:5))
		}
	}
};
window.onmousemove=function(e){
	if(u>0){
		e.preventDefault();
		mx=e.pageX;
		if(mx<0){
			mx=0
		}else if(mx>w){
			mx=w
		}
		my=e.pageY;
		if(my<0){
			my=0
		}else if(my>h){
			my=h
		}
		q=0;
		if(t>0&&t!=4&&(mx>100||my>150)){
			q=1;
			j=o.length-1;
			if(j>0){
				i=Math.round(((mx-x)/s-px)/100)*100;
				e=Math.round(((my-y)/s-py)/100)*100;
				do{
					if(o[j][0]==0||o[j][0]==1){
						if(o[j][4]){
							if(i==o[j][2]&&e>o[j][3]-o[j][6]/2&&e<o[j][3]+o[j][6]/2){
								q=0;
								break
							}
						}else if(i>o[j][2]-o[j][6]/2&&i<o[j][2]+o[j][6]/2&&e==o[j][3]){
							q=0;
							break
						}
					}
				}while(j--)
			}
		}
	}
};
window.onresize=r
