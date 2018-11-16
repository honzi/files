function buf(){
	bx.clearRect(0,0,document.getElementById('b').width,document.getElementById('b').height);

	bx.font='23pt sans-serif';
	bx.textAlign='center';
	bx.textBaseline='middle';

	var i=w.length-1;
	do{
		if(w[i][0]+w[i][2]+hx>0&&w[i][0]+hx<document.getElementById('c').width&&w[i][1]+w[i][3]+hy>0&&w[i][1]+hy<document.getElementById('c').height){
			bx.fillStyle='rgb('+w[i][4]+','+w[i][5]+','+w[i][6]+')';
			bx.fillRect(w[i][0]+hx,w[i][1]+hy,w[i][2],w[i][3])
		}
	}while(i--);



	if(sb>0&&mx-hx>-250&&mx-hx<250&&my-hy>-250&&my-hy<250){
		var ij=Math.round((mx-hx-12.5*eb[sb-1][0])/25)*25+hx,jj=Math.round((my-hy-12.5*eb[sb-1][1])/25)*25+hy;
		if(sb==1){
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
	}else{
		var ij=null,jj=null
	}


	var i=bb.length-1,tl=0,tr=0,bl=0,br=0;
	if(i>=0){
		do{
			if(bb[i][0]+bb[i][2]+hx>0&&bb[i][0]+hx<document.getElementById('c').width&&bb[i][1]+bb[i][3]+hy>0&&bb[i][1]+hy<document.getElementById('c').height){
				bx.fillStyle='rgb('+bb[i][4]+','+bb[i][5]+','+bb[i][6]+')';
				bx.fillRect(bb[i][0]+hx-25,bb[i][1]+hy-25,bb[i][2],bb[i][3]);

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
			}
		}while(i--)
	}


	if(ij!=null&&jj!=null){
		if(sb==1){
			bx.fillStyle='rgba('+(50+tr)+',50,50,.5)';
			bx.fillRect(ij+25,jj,25,25);
			bx.fillStyle='rgba('+(50+bl)+',50,50,.5)';
			bx.fillRect(ij,jj+25,25,25);
			bx.fillStyle='rgba('+(50+br)+',50,50,.5)';
			bx.fillRect(ij+25,jj+25,25,25)
		}
		if(eb[sb-1][3]>0){
			bx.beginPath();
			bx.arc(ij+12.5*eb[sb-1][0],jj+12.5*eb[sb-1][1],eb[sb-1][3],0,Math.PI*2,false);
			bx.lineWidth=2;
			bx.strokeStyle='rgb(0,0,0)';
			bx.stroke();
			bx.closePath();
		}

		bx.fillStyle='rgba('+(50+tl)+',50,50,.5)';
		bx.fillRect(ij,jj,25,25)
	}



	var i=wtxt.length-1;
	if(i>=0){
		do{
			if(wtxt[i][1]+hx>0&&wtxt[i][1]+hx<document.getElementById('c').width&&wtxt[i][2]+hy>0&&wtxt[i][2]+hy<document.getElementById('c').height){
				bx.fillStyle='rgb(200,200,200)';
				bx.fillText(wtxt[i][0],wtxt[i][1]+hx,wtxt[i][2]+hy)
			}
		}while(i--)
	}



	bx.fillStyle='rgb(20,20,20)';
	bx.fillRect(0,0,150,115);

	bx.font='19pt sans-serif';
	bx.fillStyle='rgb(200,200,200)';
	bx.fillText('$'+mo,75,18);

	var i=eb.length-1;
	do{
		bx.fillStyle=(mo>=eb[i][2])?((sb==i+1)?'rgb(4,40,4)':'rgb(35,35,35)'):'rgb(40,4,4)';
		bx.fillRect(80*i,40,70,70);

		bx.fillStyle='rgb(200,200,200)';
		bx.fillText('$'+eb[i][2],35+80*i,55);
		bx.fillText(i+1,60+80*i,95)
	}while(i--);

	return document.getElementById('b')
}
function draw(){
	if(cx!=0){
		cx.clearRect(0,0,document.getElementById('c').width,document.getElementById('c').height);
		if(stat==1){



			cx.drawImage(buf(),0,0)





		}else{
			cx.font='23pt sans-serif';
			cx.textAlign='center';
			cx.textBaseline='middle';



			cx.fillStyle='rgb(34,34,34)';
			cx.fillRect(hx-200,295,400,50);


			cx.fillStyle='rgb(45,137,48)';



			cx.font='29pt sans-serif';
			cx.fillText('test map',hx,320);


			cx.fillStyle='rgb(160,160,160)';

			cx.fillText('(pre-alpha)',hx,175);

			cx.font='64pt cursive';
			cx.fillText('tower defense',hx,100);


			cx.font='23pt sans-serif';
			cx.textAlign='left';
			cx.fillText('more information can be found below ↓↓↓↓↓',20,document.getElementById('c').height-35)



		}
	}else{
		clearInterval(tim);
		tim=0
	}
}
function keydown(e){
	if(cx!=0&&stat==1){
		var a=window.event?event:e,i=eb.length-1;
		a=a.charCode?a.charCode:a.keyCode;
		do{
			if(a==49+i&&mo>=eb[i][2]){
				sb=i+1
			}
		}while(i--);
		if(a==27){
			clearInterval(tim);
			stat=0;
			tim=0;

			sb=0;

			lvlid=0;
			bb=[];
			un=[];
			w=[];
			wtxt=[];

			draw()
		}
	}
}
function mousedown(e){
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
			if(my>=40&&my<=110){
				if(mx>=0&&mx<=70&&mo>=eb[0][2]){
					sb=(sb==1)?0:1
				}else if(mx>=80&&mx<=150&&mo>=eb[1][2]){
					sb=(sb==2)?0:2
				}
			}
			if(sb>0&&mx-hx>-250&&mx-hx<250&&my-hy>-250&&my-hy<250){
				var i=Math.round((mx-hx-12.5*eb[sb-1][0])/25)*25+25,j=Math.round((my-hy-12.5*eb[sb-1][0])/25)*25+25;
				if(sb==1){
					if(i<=-250){
						i=-225
					}else if(i>=225){
						i=225
					}
					if(j<=-250){
						j=-225
					}else if(j>=225){
						j=225
					}
				}
				var qq=bb.length-1,yes=1;
				if(qq>=0){
					do{
						if(bb[qq][7]==2){
							if(sb==2){
								if(i==bb[qq][0]&&j==bb[qq][1]){
									yes=0
								}
							}else{
								if(i>=bb[qq][0]-25&&i<=bb[qq][0]&&j>=bb[qq][1]-25&&j<=bb[qq][1]){
									yes=0
								}
							}
						}else{
							if(sb==2){
								if(i>=bb[qq][0]&&i<=bb[qq][0]+25&&j>=bb[qq][1]&&j<=bb[qq][1]+25){
									yes=0
								}
							}else{
								if(i>=bb[qq][0]-25&&i<=bb[qq][0]+25&&j>=bb[qq][1]-25&&j<=bb[qq][1]+25){
									yes=0
								}
							}
						}
					}while(qq--)
				}
				if(yes){
					if(mo>=eb[sb-1][2]){
						if(sb==2){
							mo-=eb[sb-1][2];
							bb.push([i,j,25,25,37,37,37,2])
						}else if(sb==1){
							mo-=eb[sb-1][2];
							bb.push([i,j,50,50,50,50,50,1])
						}
					}
					sb=0
				}
			}
		}else{
			if(mx>=hx-200&&mx<=hx+200&&my>=295&&my<=345){
				lvl(0);
				document.body.style.cursor='default';
				stat=1;
				tim=setInterval('draw()',20)
			}
		}
	}
}
function mousemove(e){
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
			if(my>=40&&my<=110&&((mx>=0&&mx<=70&&mo>=eb[0][2])||(mx>=80&&mx<=150&&mo>=eb[1][2]))){
				document.body.style.cursor='pointer'
			}
		}else{
			if(mx>=hx-200&&mx<=hx+200&&my>=295&&my<=345){
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
		draw()
	}
}
function l(){
	if(cx==0){
		document.getElementById('cv').innerHTML="<canvas id=\"c\" tabindex=\"0\">get a <a href=\"https://google.com/chrome\">real browser</a>!</canvas>";
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
mx=0,
my=0,
stat=0,
tim=0,

sb=0;

window.onkeydown=window.onkeypress=keydown;
window.onload=l;
window.onmousedown=mousedown;
window.onmousemove=mousemove;
window.onresize=r
