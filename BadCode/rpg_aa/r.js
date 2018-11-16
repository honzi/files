function buf(){
	bx.clearRect(0,0,document.getElementById('b').width,document.getElementById('b').height);
	
	var ptx=0,
	pty=0;
	wh=0;
	wm=0;
	if(tim!==2&&tim!==3){
		if(ka){
			ptx=-2
		}
		if(kd){
			ptx+=2
		}
		if(ks){
			pty=2
		}
		if(kw){
			pty-=2
		}
		if(!ksh[2]){
			if(ksh[0]&&(ptx!=0||pty!=0)){
				if(ksh[1]>0){
					ksh[1]=Math.floor(ksh[1])-.5;
					if(ksh[1]<0){
						ksh[1]=0
					}
					ptx*=2;
					pty*=2
				}else{
					ksh[2]=1
				}
			}else if(ksh[1]<pksh){
				ksh[1]+=(ptx==0&&pty==0)||wh>0?.4:.1
			}else if(ksh[1]>pksh){
				ksh[1]=pksh
			}
		}else if(pksh!=0){
			ksh[1]+=(ptx==0&&pty==0)||wh>0?.2:0;
			if(ksh[1]>=pksh){
				ksh[1]=pksh;
				ksh[2]=0
			}
		}
		var temptx=px+ptx,
		tempty=py+pty;
	}
	for(var i=0;i<w.length;i++){
		if(pty!=0||ptx!=0||w[i][4]!=1){
			var tempgx=w[i][0]+w[i][2],
			tempgy=w[i][1]+w[i][3];
			if(!((temptx-20>w[i][0]+w[i][2])||(temptx+20<w[i][0])||(tempty-20>w[i][1]+w[i][3])||(tempty+20<w[i][1]))){
				if(w[i][4]==1){
					if(ka&&!kd){
						if(py+20>w[i][1]&&py-20<tempgy&&temptx-20<tempgx){
							ptx=w[i][0]+w[i][2]-px+20
						}
					}
					if(kd&&!ka){
						if(py+20>w[i][1]&&py-20<tempgy&&temptx+20>w[i][0]){
							ptx=w[i][0]-px-20
						}
					}
					if(ks&&!kw){
						if(px+20>w[i][0]&&px-20<tempgx&&tempty+20>w[i][1]){
							pty=w[i][1]-py-20
						}
					}
					if(kw&&!ks){
						if(px+20>w[i][0]&&px-20<tempgx&&tempty-20<tempgy){
							pty=w[i][1]+w[i][3]-py+20
						}
					}
				}else if(w[i][4]==2){
					px=w[i][5];
					py=w[i][6];
					ptx=0;
					pty=0;
					lvl(w[i][7]);
					break
				}else if(w[i][4]==3){
					wh=w[i][5];
					wm=w[i][6]
				}else if(w[i][5]&&w[i][4]==4){
					w[i][5]=0;
					ph[0]+=w[i][6];
					pm[0]+=w[i][7];
					pksh+=w[i][8]
				}
			}
		}
		if(w[i][0]=='c'){
			color=[w[i][1],w[i][2],w[i][3]]
		}else if(w[i][4]!=4||w[i][5]){
			if(w[i][0]+w[i][2]-px+hx>0&&w[i][0]-px+hx<document.getElementById('c').width&&w[i][1]+w[i][3]-py+hy>0&&w[i][1]-py+hy<document.getElementById('c').height){
				bx.fillStyle='rgb('+color[0]+','+color[1]+','+color[2]+')';
				bx.fillRect(w[i][0]-px+hx,w[i][1]-py+hy,w[i][2],w[i][3])
			}
		}
	}


	bx.font='23pt sans-serif';
	bx.textAlign='center';
	bx.textBaseline='middle';

	var i=npc.length-1;
	if(i>=0){
		do{
			if(npc[i][0]+20-px+hx>0&&npc[i][0]-20-px+hx<document.getElementById('c').width&&npc[i][1]+20-py+hy>0&&npc[i][1]-20-py+hy<document.getElementById('c').height){
				bx.fillStyle='rgb('+npc[i][2]+','+npc[i][3]+','+npc[i][4]+')';
				bx.fillRect(npc[i][0]-px+hx-20,npc[i][1]-py+hy-20,40,40)
			}
		}while(i--)
	}
	i=evt.length-1;
	if(i>=0){
		do{
			if(!((px-20>evt[i][0]+evt[i][2])||(px+20<evt[i][0])||(py-20>evt[i][1]+evt[i][3])||(py+20<evt[i][1]))){
				bx.fillStyle='rgb(150,150,150)';
				bx.fillText(evt[i][4],evt[i][5]-px+hx,evt[i][6]-py+hy)
			}
		}while(i--)
	}



	if(tim!==2&&tim!==3){
		px+=ptx;
		py+=pty;
		ph[1]+=wh;
		pm[1]=pm[1]>=pm[0]||pm[0]==0?pm[0]:pm[1]+wm;
		if(ph[1]<=0){
			re(0)
		}else if(ph[1]>ph[0]){
			ph[1]=ph[0]
		}
	}


	bx.fillStyle='#262';
	bx.fillRect(hx-20,hy-20,40,40);

	i=wtxt.length-1;
	if(i>=0){
		do{
			if(wtxt[i][1]-px+hx>0&&wtxt[i][1]-px+hx<document.getElementById('c').width&&wtxt[i][2]-py+hy>0&&wtxt[i][2]-py+hy<document.getElementById('c').height){
				bx.fillStyle='#c8c8c8';
				bx.fillText(wtxt[i][0],wtxt[i][1]-px+ptx+hx,wtxt[i][2]-py+pty+hy)
			}
		}while(i--)
	}



	bx.fillStyle='#141414';
	bx.fillRect(0,90,50,250);

	bx.fillStyle='#222';
	bx.fillRect(0,90+50*sps,50,50);
	
	

	bx.fillStyle='#262';
	bx.fillRect(0,0,ph[1]*(100/ph[0]),25);

	bx.fillStyle='#476291';
	bx.fillRect(0,30,pm[1]*(100/pm[0]),25);

	bx.fillStyle=ksh[2]?'#646464':'#ffd700';
	bx.fillRect(0,60,ksh[1]*(100/pksh),25);





	bx.textAlign='left';
	bx.fillStyle='#c8c8c8';
	bx.fillText(Math.floor(ph[1])+'/'+ph[0],105,12.5);
	bx.fillText(Math.floor(pm[1])+'/'+pm[0],105,42.5);
	bx.fillText(Math.floor(ksh[1])+'/'+pksh,105,72.5);

	bx.textAlign='right';
	bx.textBaseline='bottom';
	bx.font='12pt sans-serif';
	i=4;
	do{
		bx.fillText(i!=9?i+1:0,45,135+50*i)
	}while(i--);

	return document.getElementById('b')
}
function drw(){
	if(cx!=0){
		cx.clearRect(0,0,document.getElementById('c').width,document.getElementById('c').height);
		if(stat==1){
			cx.drawImage(buf(),0,0)
		}else{
			cx.font='23pt sans-serif';
			cx.textAlign='center';
			cx.textBaseline='middle';



			cx.fillStyle='#222';
			cx.fillRect(hx-250,150,500,60);


			cx.fillStyle='#2d8930';

			cx.font='29pt sans-serif';
			cx.fillText('Enter World',hx,180);


			cx.fillStyle='#c8c8c8';

			cx.fillText('(pre-alpha version, work in progress)',hx,110);

			cx.font='64pt cursive';
			cx.fillText('RPG',hx,45);

			cx.font='23pt sans-serif';
			cx.fillText('WASD or IJKL == Move your Character',hx,250);
			cx.fillText('Shift == Sprint',hx,285);
			cx.fillText('Escape == Return to Main Menu',hx,320)
		}
	}else{
		clearInterval(tim);
		tim=-1
	}
}
function re(ct){
	clearInterval(tim);
	ka=0;
	kd=0;
	ks=0;
	kw=0;
	px=0;
	py=0;
	ph=[1,1];
	pm=[0,0];
	pksh=0;
	ksh=[0,0,1];
	sp=[0,0,0,0,0];
	sps=0;
	wh=0;
	wm=0;
	if(ct==1){
		stat=0;

		evt=[];
		lvlid=0;
		npc=[];
		w=[];
		wtxt=[];
		drw()
	}else{
		lvl(0);
		tim=setInterval('drw()',20)
	}
}
function keyd(e){
	if(cx!=0){
		var a=window.event?event:e;
		a=a.charCode?a.charCode:a.keyCode;
		if(stat==1){
			if(a==65||a==74){
				ka=1
			}else if(a==68||a==70||a==76){
				kd=1
			}else if(a==83||a==75){
				ks=1
			}else if(a==87||a==73){
				kw=1
			}else if(a==16){
				ksh[0]=1
			}else if(a>47&&a<54){
				sps=a-49
			}else if(a==27){
				re(1)
			}
		}else if(a==13){
			lvl(0);
			document.body.style.cursor='default';
			stat=1;
			tim=setInterval('drw()',20)
		}
	}
}
function keyu(e){
	var a=window.event?event:e;
	a=a.charCode?a.charCode:a.keyCode;
	if(a==65||a==74){
		ka=0
	}else if(a==68||a==70||a==76){
		kd=0
	}else if(a==83||a==75){
		ks=0
	}else if(a==87||a==73){
		kw=0
	}else if(a==16){
		ksh[0]=0
	}
}
function mdown(e){
	if(cx!=0){
		mx=e.pageX;
		if(mx<0){
			mx=0
		}else if(mx>document.getElementById('c').width){
			mx=document.getElementById('c').width
		}
		my=e.pageY;
		if(my<0){
			my=0
		}else if(my>document.getElementById('c').height){
			my=document.getElementById('c').height
		}
		if(stat==1){
		}else{
			if(mx>=hx-250&&mx<=hx+250&&my>=150&&my<=210){
				lvl(0);
				document.body.style.cursor='default';
				stat=1;
				tim=setInterval('drw()',20)
			}
		}
	}
}
function mmove(e){
	if(cx!=0){
		mx=e.pageX;
		if(mx<0){
			mx=0
		}else if(mx>document.getElementById('c').width){
			mx=document.getElementById('c').width
		}
		my=e.pageY;
		if(my<0){
			my=0
		}else if(my>document.getElementById('c').height){
			my=document.getElementById('c').height
		}
		document.body.style.cursor='default';
		if(stat==1){
		}else{
			if(mx>=hx-250&&mx<=hx+250&&my>=150&&my<=210){
				document.body.style.cursor='pointer'
			}
		}
	}
}
function r(){
	var i=document.createElement('p');
	i.style.width='100%';

	var out=document.createElement('div');
	out.style.position='absolute';
	out.style.left=out.style.top='0';
	out.style.overflow=out.style.visibility='hidden';
	out.style.width='200px';
	out.appendChild(i);

	document.body.appendChild(out);
	var w1=i.offsetWidth;
	out.style.overflow='scroll';
	var w2=i.offsetWidth;
	if(w1==w2){
		w2=out.clientWidth
	}

	document.body.removeChild(out);


	document.getElementById('c').width=window.innerWidth-(w1-w2);
	hx=Math.round(document.getElementById('c').width*.5);
	document.getElementById('c').height=window.innerHeight;
	hy=Math.round(document.getElementById('c').height*.5);

	document.getElementById('b').width=document.getElementById('c').width;
	document.getElementById('b').height=document.getElementById('c').height;
	if(cx!=0){
		drw()
	}
}
function l(){
	if(cx==0){
		document.getElementById('cv').innerHTML="<canvas id=\"c\" tabindex=\"0\">Get a <a href=\"https://google.com/chrome\">real browser</a>!</canvas>";
		if(document.getElementById('c').getContext){
			bx=document.getElementById('b').getContext('2d');
			cx=document.getElementById('c').getContext('2d');
			r()
		}
	}
}

var 
bx=0,
color=[],
cx=0,

hx=0,
hy=0,

ka=0,
kd=0,
ks=0,
kw=0,

mx=0,
my=0,

ph=[1,1],
pm=[0,0],
pksh=0,
ksh=[0,0,1],

sp=[0,0,0,0,0],
sps=0,

px=0,
py=0,

stat=0,
tim=-1,


wh=0;
wm=0;



window.onkeydown=window.onkeypress=keyd;
window.onkeyup=keyu;
window.onload=l;
window.onmousedown=mdown;
window.onmousemove=mmove;
window.onresize=r
