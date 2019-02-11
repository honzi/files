function buf(){
	bx.clearRect(0,0,document.getElementById('b').width,document.getElementById('b').height);

	if(tim!==2&&tim!==3){
		cou+=1;
		if(cou>100){
			cou=0;
			mo[0]+=mo[1]
		}
	}


	var i=w.length-1;
	do{
		/*if(w[i][0]+w[i][2]+hx>0&&w[i][0]+hx<document.getElementById('c').width&&w[i][1]+w[i][3]+hy>0&&w[i][1]+hy<document.getElementById('c').height){*/
			bx.fillStyle='rgb('+w[i][4]+','+w[i][5]+','+w[i][6]+')';
			bx.fillRect(w[i][0]+hx,w[i][1]+hy,w[i][2],w[i][3])
		/*}*/
	}while(i--);


	var ij=null,jj=null;
	if(sb>0){
		if((mx>=140||my>=185||!uis)&&document.body.style.cursor=='default'){
			if(mx-hx>-250&&mx-hx<250&&my-hy>-250&&my-hy<250){
				ij=Math.round((mx-hx-12.5*eb[sb-1][0])/25)*25+hx,jj=Math.round((my-hy-12.5*eb[sb-1][1])/25)*25+hy;
				if(sb!=2){
					if(ij<=hx-250){
						ij=hx-250
					}else if(ij>=hx+200){
						ij=hx+200
					}
					if(jj<=hy-250){
						jj=hy-250
					}else if(jj>=hy+200){
						jj=hy+200
					}
				}
			}
		}
	}

	i=bb.length-1;
	var tl=0,tr=0,bl=0,br=0;
	if(i>=0){
		do{
			/*if(bb[i][0]+bb[i][2]+hx>0&&bb[i][0]+hx<document.getElementById('c').width&&bb[i][1]+bb[i][3]+hy>0&&bb[i][1]+hy<document.getElementById('c').height){*/
				bx.beginPath();
				bx.rect(bb[i][0]+hx-25,bb[i][1]+hy-25,bb[i][2],bb[i][3]);
				bx.lineWidth=2;
				bx.fillStyle='rgb('+bb[i][4]+','+bb[i][5]+','+bb[i][6]+')';
				bx.fill();
				bx.strokeStyle='#000';
				bx.stroke();
				bx.closePath();

				

				if(ij!=null&&jj!=null){
					if(bb[i][7]==2){
						if(bb[i][0]+hx-25==ij&&bb[i][1]+hy-25==jj){
							tl=100
						}
						if(bb[i][0]+hx-50==ij&&bb[i][1]+hy-25==jj){
							tr=100
						}
						if(bb[i][0]+hx-25==ij&&bb[i][1]+hy-50==jj){
							bl=100
						}
						if(bb[i][0]+hx-50==ij&&bb[i][1]+hy-50==jj){
							br=100
						}
					}else{
						if(bb[i][0]+hx-50==ij){
							if(bb[i][1]+hy-50==jj){
								br=100
							}else if(bb[i][1]+hy-25==jj){
								tr=100;
								br=100
							}else if(bb[i][1]+hy==jj){
								tr=100
							}
						}else if(bb[i][0]+hx-25==ij){
							if(bb[i][1]+hy-50==jj){
								bl=100;
								br=100
							}else if(bb[i][1]+hy-25==jj){
								tl=100;
								tr=100;
								bl=100;
								br=100
							}else if(bb[i][1]+hy==jj){
								tl=100;
								tr=100
							}

						}else if(bb[i][0]+hx==ij){
							if(bb[i][1]+hy-50==jj){
								bl=100
							}else if(bb[i][1]+hy-25==jj){
								tl=100;
								bl=100
							}else if(bb[i][1]+hy==jj){
								tl=100
							}
						}
					}
				}
			/*}*/
		}while(i--);
		i=bb.length-1;
		do{
			if(bb[i][8]!=-1){
				bx.beginPath();
				bx.rect(bb[i][0]+hx-25,bb[i][1]+hy-35,bb[i][2],5);
				bx.lineWidth=2;
				bx.fillStyle='#262';
				bx.fill();
				bx.strokeStyle='#000';
				bx.stroke();
				bx.closePath()
			}
		}while(i--)
	}


	if(ij!=null&&jj!=null&&mo[0]>=eb[sb-1][2]){
		if(sb!=2){
			bx.fillStyle='rgba('+(50+tr)+',50,50,.5)';
			bx.fillRect(ij+25,jj,25,25);
			bx.fillStyle='rgba('+(50+bl)+',50,50,.5)';
			bx.fillRect(ij,jj+25,25,25);
			bx.fillStyle='rgba('+(50+br)+',50,50,.5)';
			bx.fillRect(ij+25,jj+25,25,25)
		}
		if(eb[sb-1][3]>0&&tl==0){
			bx.beginPath();
			bx.arc(ij+12.5*eb[sb-1][0],jj+12.5*eb[sb-1][1],eb[sb-1][3],0,Math.PI*2,false);
			bx.lineWidth=2;
			bx.strokeStyle='#042804';
			bx.stroke();
			bx.closePath()
		}
		bx.fillStyle='rgba('+(50+tl)+',50,50,.5)';
		bx.fillRect(ij,jj,25,25)
	}


	bx.font='23pt sans-serif';
	bx.textAlign='center';
	bx.textBaseline='middle';

	i=wtxt.length-1;
	if(i>=0){
		do{
			/*if(wtxt[i][1]+hx>0&&wtxt[i][1]+hx<document.getElementById('c').width&&wtxt[i][2]+hy>0&&wtxt[i][2]+hy<document.getElementById('c').height){*/
				bx.fillStyle='#c8c8c8';
				bx.fillText(wtxt[i][0],wtxt[i][1]+hx,wtxt[i][2]+hy)
			/*}*/
		}while(i--)
	}

	if(uis){
		bx.fillStyle='#111';
		bx.fillRect(0,35,140,140);

		bx.fillStyle='#19140f';
		bx.fillRect(35,70,70,70);

		bx.font='35pt sans-serif';
		bx.fillStyle='#c8c8c8';

		i=eb.length-1;
		var dx=0,dy=0,hov=[-1];
		do{
			bx.beginPath();
			bx.rect(70*dx,175+70*dy,70,70);
			bx.lineWidth=2;
			bx.fillStyle=(mo[0]>=eb[i][2])?((sb==i+1)?'#042804':'#222'):'#311';
			bx.fill();
			bx.strokeStyle='#000';
			bx.stroke();
			bx.closePath();

			bx.fillStyle='#c8c8c8';

			bx.fillText(eb[i][8][0].toUpperCase(),35+70*dx,210+70*dy);

			if(ml==i){
				hov=[70*dx+70,175+70*dy,eb[i][8],parseInt(eb[i][2]),eb[i][4],eb[i][9]]
			}


			if(dx==1){
				dy+=1
			}
			dx=!dx
		}while(i--);

		if(hov[0]!=-1){
			bx.fillStyle='#323232';
			bx.fillRect(hov[0],hov[1],400,200);

			bx.fillStyle='#c8c8c8';


			bx.textAlign='right';
			bx.fillText('$'+hov[3],hov[0]+397,hov[1]+25);
			bx.fillText((hov[4]>0?'+':'')+hov[4],hov[0]+397,hov[1]+75);

			bx.textAlign='left';
			bx.fillText(hov[2],hov[0]+3,hov[1]+25);

			bx.textAlign='center';
			bx.font='20pt sans-serif';
			bx.fillText(hov[5],hov[0]+200,hov[1]+175)
		}


		i=bb.length-1;
		if(i>=0){
			do{
				bx.fillStyle='rgb('+bb[i][4]+','+bb[i][5]+','+bb[i][6]+')';
				bx.fillRect(66.5+bb[i][0]*0.14,101.5+bb[i][1]*0.14,bb[i][2]==50?7:3.5,bb[i][3]==50?7:3.5)
			}while(i--)
		}
		if(ij!=null&&jj!=null&&mo[0]>=eb[sb-1][2]){
			var i=70+(ij-hx)*0.14,j=105+(jj-hy)*0.14;
			if(sb!=2){
				bx.fillStyle='rgba('+(50+tr)+',50,50,.5)';
				bx.fillRect(i+3.5,j,3.5,3.5);
				bx.fillStyle='rgba('+(50+bl)+',50,50,.5)';
				bx.fillRect(i,j+3.5,3.5,3.5);
				bx.fillStyle='rgba('+(50+br)+',50,50,.5)';
				bx.fillRect(i+3.5,j+3.5,3.5,3.5)
			}
			bx.fillStyle='rgba('+(50+tl)+',50,50,.5)';
			bx.fillRect(i,j,3.5,3.5)
		}
	}
	bx.fillStyle='#141414';
	bx.fillRect(0,0,140,35);
	
	bx.font='23pt sans-serif';
	bx.textAlign='left';

	bx.fillStyle='#c8c8c8';
	bx.fillText('$'+mo[0],3,18);

	bx.textAlign='right';
	bx.fillText(mo[1]>0?'+'+mo[1]:mo[1],137,18);

	return document.getElementById('b')
}
function drw(){
	if(cx!=0){
		cx.clearRect(0,0,document.getElementById('c').width,document.getElementById('c').height);
		if(stat==1){
			cx.drawImage(buf(),0,0)
		}else{
			cx.fillStyle='#222';
			cx.fillRect(hx-200,290,400,50);

			cx.textAlign='center';
			cx.textBaseline='middle';
			cx.font='29pt sans-serif';
			if(ui==2){
				var i=1;
				do{
					cx.fillStyle=i==sl?'#666':'#222';
					cx.fillRect(hx-265+60*i,10,50,50);

					cx.fillStyle='#c8c8c8';
					cx.fillText(i,hx-240+60*i,35)
				}while(i--);
				cx.fillStyle='#222';
				cx.fillRect(hx-250,220,500,60);


				cx.fillStyle='#2d8930';


				cx.fillText(['Freebuild','Valley Cliffs'][sl],hx,250);
				cx.fillText('Back',hx,315)
			}else if(ui==1){
				cx.fillStyle='#c8c8c8';
				cx.fillText('Nothing Yet',hx,250);

				cx.fillStyle='#2d8930';
				cx.fillText('Back',hx,315)
			}else{
				cx.fillRect(hx-250,150,500,60);


				cx.fillStyle='#2d8930';

				cx.fillText('Map Selection',hx,180);
				cx.fillText('Settings',hx,315);

				cx.fillStyle='#c8c8c8';
				cx.fillText('(pre-alpha version, use at own risk)',hx,110);

				cx.font='64pt cursive';
				cx.fillText('RTS',hx,45)
			}
		}
	}else{
		clearInterval(tim);
		tim=-1
	}
}
function keyd(e){
	if(cx!=0){
		var a=window.event?event:e,i=eb.length-1;
		a=a.charCode?a.charCode:a.keyCode;
		if(stat==1){
			if(!kl){
				do{
					if(a===eb[i][8].charCodeAt(0)){
						sb=sb==i+1?0:i+1;
						kl=1
					}
				}while(i--)
			}
			if(a==27){
				clearInterval(tim);
				stat=0;
				tim=-1;

				cou=0;
				kl=0;
				sb=0;

				lvlid=0;
				bb=[];
				ml=-1;
				un=[];
				w=[];
				wtxt=[];

				drw()
			}else if(a==72){
				uis=!uis
			}
		}
	}
}
function keyu(e){
	kl=0
}
function mdown(e){
	if(cx!=0){
		mx=e.pageX;
		my=e.pageY;
		if(stat==1){
			var i=eb.length-1,it=eb.length-1,jx=0,jy=1;
			do{
				if(i==0){
					jx=0
				}else if(i==1){
					jx=1;
					jy=0
				}
				if(mo[0]>=eb[it-i][2]&&mx>=70*jx&&mx<=70+70*jx&&my>=175+70*jy&&my<=245+70*jy){
					sb=sb==(it-i)+1?0:(it-i)+1
				}
			}while(i--);
			if(sb>0&&(mx>=140||my>=185||!uis)&&document.body.style.cursor=='default'&&mx<=document.getElementById('c').width&&my<=document.getElementById('c').height&&mx-hx>-250&&mx-hx<250&&my-hy>-250&&my-hy<250){
				var ij=Math.round((mx-hx-12.5*eb[sb-1][0])/25)*25+25,jj=Math.round((my-hy-12.5*eb[sb-1][0])/25)*25+25;
				if(sb!=2){
					if(ij<=-250){
						ij=-225
					}else if(ij>=225){
						ij=225
					}
					if(jj<=-250){
						jj=-225
					}else if(jj>=225){
						jj=225
					}
				}
				var qq=bb.length-1,yes=1;
				if(qq>=0){
					do{
						if(bb[qq][7]==2){
							if(sb==2){
								if(ij==bb[qq][0]&&jj==bb[qq][1]){
									yes=0
								}
							}else{
								if(ij>=bb[qq][0]-25&&ij<=bb[qq][0]&&jj>=bb[qq][1]-25&&jj<=bb[qq][1]){
									yes=0
								}
							}
						}else{
							if(sb==2){
								if(ij>=bb[qq][0]&&ij<=bb[qq][0]+25&&jj>=bb[qq][1]&&jj<=bb[qq][1]+25){
									yes=0
								}
							}else{
								if(ij>=bb[qq][0]-25&&ij<=bb[qq][0]+25&&jj>=bb[qq][1]-25&&jj<=bb[qq][1]+25){
									yes=0
								}
							}
						}
					}while(qq--)
				}
				if(yes){
					var i=eb.length-1;
					if(i>=0){
						do{
							if(sb==i+1&&mo[0]>=eb[i][2]){
								mo[1]+=eb[i][4];
								mo[0]-=eb[i][2];
								if(eb[i][8]==='Refinery'){
									eb[i][2]*=2
								}
								bb.push([ij,jj,i==1?25:50,i==1?25:50,eb[i][5],eb[i][6],eb[i][7],sb,0,100]);
								break
							}
						}while(i--)
					}
					sb=0
				}
			}
		}else{
			if(ui==2){
				if(my>=10&&my<=60){
					var i=1;
					do{
						if(mx>=hx-265+60*i&&mx<=hx-215+60*i){
							sl=i;
							drw()
						}
					}while(i--)
				}else if(mx>=hx-250&&mx<=hx+250&&my>=220&&my<=280){
					lvl(sl);
					document.body.style.cursor='default';
					stat=1;
					tim=setInterval('drw()',25)
				}
			}else if(ui==0){
				if(mx>=hx-250&&mx<=hx+250){
					if(my>=150&&my<=210){
						ui=2;
						drw()
					}
				}
			}
			if(mx>=hx-200&&mx<=hx+200&&my>=290&&my<=340){
				ui=ui==0?1:0;
				drw()
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
			ml=-1;
			if(uis){
				var i=eb.length-1,it=eb.length-1,jx=0,jy=1;
				do{
					if(i==0){
						jx=0
					}else if(i==1){
						jx=1;
						jy=0
					}
					if(mx>=70*jx&&mx<=70+70*jx&&my>=175+70*jy&&my<=245+70*jy){
						ml=it-i;
						if(mo[0]>=eb[ml][2]){
							document.body.style.cursor='pointer'
						}
					}
				}while(i--)
			}
		}else{
			if(ui==2){
				document.body.style.cursor=(mx>=hx-200&&mx<=hx+200&&my>=290&&my<=340)||((my>=10&&my<=60&&((mx>=hx-265&&mx<=hx-215)||(mx>=hx-205&&mx<=hx-155)))||(mx>=hx-250&&mx<=hx+250&&my>=220&&my<=280))?'pointer':'default'
			}else if(ui==1){
				document.body.style.cursor=(mx>=hx-200&&mx<=hx+200&&my>=290&&my<=340)?'pointer':'default'
			}else{
				document.body.style.cursor=(mx>=hx-250&&mx<=hx+250&&my>=150&&my<=210)||(mx>=hx-200&&mx<=hx+200&&my>=290&&my<=340)?'pointer':'default'
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
cx=0,

hx=0,
hy=0,

kl=0,

ml=-1,
mx=0,
my=0,

sl=1,

stat=0,
tim=-1,

ui=0,

cou=0,
sb=0,
uis=1;

window.onkeydown=window.onkeypress=keyd;
window.onkeyup=keyu;
window.onload=l;
window.onmousedown=mdown;
window.onmousemove=mmove;
window.onresize=r
