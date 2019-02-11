function d(){
	if(pp){
		pdx=pdz=0;
		if(ka){
			if(kw){
				pr=45
			}else{
				pr=ks?135:90
			}
			pdx-=.2
		}
		if(kd){
			if(kw){
				pr=315
			}else{
				pr=ks?225:270
			}
			pdx+=.2
		}
		if(ks){
			if(ka){
				pr=135
			}else{
				pr=kd?225:180
			}
			pdz+=.2
		}
		if(kw){
			if(ka){
				pr=45
			}else{
				pr=kd?315:0
			}
			pdz-=.2
		}

		if(sc>0){
			sc-=1
		}else if(md){
			sc=23;
			ab.push([0,0,0,0,px,1,pz,
						-.2,0,-.2,
						-.2,0,.2,
						.2,0,.2,
						.2,0,-.2,
						1,1,1,1,
						0,1,0,
						mdx,1,1]);
			ob(ab)
		}

		i=ab.length-1;
		if(i>=0){
			do{
				j=ab[i][26];
				ab[i][4]+=.25*Math.cos(j);
				ab[i][6]-=.25*Math.sin(j);

				if(ab[i][4]>99||ab[i][4]<-99||ab[i][6]>99||ab[i][6]<-99){
					ab.splice(i,1);
					continue
				}

				j=as.length-1;
				if(j>=0){
					do{
						if(ab[i][4]>as[j][4]+as[j][7]-.5&&ab[i][4]<as[j][4]+as[j][13]+.5
						&&ab[i][6]>as[j][6]+as[j][9]-.5&&ab[i][6]<as[j][6]+as[j][15]+.5){
							ab.splice(i,1);
							as.splice(j,1);
							j=-9;
							break
						}
					}while(j--)
				}

				if(j!=-9){
					j=aw.length-1;
					if(j>=0){
						do{
							if(aw[j][26]){
								if(ab[i][4]>aw[j][4]+aw[j][7]-.5&&ab[i][4]<aw[j][4]+aw[j][13]+.5
									&&ab[i][6]>aw[j][6]+aw[j][9]-.5&&ab[i][6]<aw[j][6]+aw[j][15]+.5){
									ab.splice(i,1);
									j=-9;
									break
								}
							}
						}while(j--)
					}
					
					if(j!=-9){
						j=ae.length-1;
						if(j>=0){
							do{
								if(ab[i][4]>ae[j][4]+ae[j][7]&&ab[i][4]<ae[j][4]+ae[j][13]
									&&ab[i][6]>ae[j][6]+ae[j][9]&&ab[i][6]<ae[j][6]+ae[j][12]){
									ab.splice(i,1);
									ae.splice(j,1);
									break
								}
							}while(j--)
						}
					}
				}
			}while(i--)
		}

		i=ae.length-1;
		if(i>=0){
			do{
				j=dx(ae[i][4],ae[i][6],px,pz);
				var tx=(ae[i][4]>px?-j[0]:j[0])*.1,
				ty=(ae[i][6]>pz?-j[1]:j[1])*.1;
				j=aw.length-1;
				if(j>=0){
					do{
						if(aw[j][23]!=0){
							if(tx<0){
								if(ae[i][4]>aw[j][6]+aw[j][9]&&ae[i][6]<aw[j][6]+aw[j][15]+1.5){
									if(ae[i][4]>aw[j][4]+aw[j][7]&&ae[i][4]<aw[j][4]+aw[j][7]+2){
										tx=0
									}
								}
							}else if(tx>0){
								if(ae[i][6]>aw[j][6]+aw[j][9]-1.5&&ae[i][6]<aw[j][6]+aw[j][15]){
									if(ae[i][4]>aw[j][4]+aw[j][7]-2&&ae[i][4]<aw[j][4]+aw[j][7]){
										tx=0
									}
								}
							}
						}else if(aw[j][25]!=0){
							if(ty<0){
								if(ae[i][4]>aw[j][4]+aw[j][7]&&ae[i][4]<aw[j][4]+aw[j][13]+2){
									if(ae[i][6]>aw[j][6]+aw[j][9]&&ae[i][6]<aw[j][6]+aw[j][9]+1.5){
										ty=0
									}
								}
							}else if(ty>0){
								if(ae[i][4]>aw[j][4]+aw[j][7]-2&&ae[i][4]<aw[j][4]+aw[j][13]){
									if(ae[i][6]>aw[j][6]+aw[j][9]-1.5&&ae[i][6]<aw[j][6]+aw[j][9]){
										ty=0
									}
								}
							}
						}
					}while(j--)
				}
				ae[i][4]+=tx;
				ae[i][6]+=ty
			}while(i--)
		}

		i=aw.length-1;
		if(i>=0){
			do{
				if(aw[i][23]!=0){
					if(pdx<0){
						if(pz>aw[i][6]+aw[i][9]
							&&pz<aw[i][6]+aw[i][15]+1.5
							&&px>aw[i][4]+aw[i][7]
							&&px<aw[i][4]+aw[i][7]+1.5){
							pdx=0
						}
					}else if(pdx>0){
						if(pz>aw[i][6]+aw[i][9]-1.5
							&&pz<aw[i][6]+aw[i][15]
							&&px>aw[i][4]+aw[i][7]-1.5
							&&px<aw[i][4]+aw[i][7]){
							pdx=0
						}
					}
				}else if(aw[i][25]!=0){
					if(pdz<0){
						if(px>aw[i][4]+aw[i][7]
							&&px<aw[i][4]+aw[i][13]+1.5
							&&pz>aw[i][6]+aw[i][9]
							&&pz<aw[i][6]+aw[i][9]+1.5){
							pdz=0
						}
					}else if(pdz>0){
						if(px>aw[i][4]+aw[i][7]-1.5
							&&px<aw[i][4]+aw[i][13]
							&&pz>aw[i][6]+aw[i][9]-1.5
							&&pz<aw[i][6]+aw[i][9]){
							pdz=0
						}
					}
				}
			}while(i--)
		}

		px+=pdx;
		py+=pdy;
		pz+=pdz;

		if(as.length>0){
			smc+=1;
			if(smc>42){
				smc=0;
				i=as.length-1;
				do{
					ae.push([0,0,0,0,as[i][4],1,as[i][6],
						-1,0,-1,
						-1,0,1,
						1,0,1,
						1,0,-1,
						1,0,0,1,
						0,1,0])
				}while(i--);
				ob(ae)
			}
		}
	}

	g.viewport(0,0,w,h);
	g.clear(g.COLOR_BUFFER_BIT|g.DEPTH_BUFFER_BIT);

	mat4.perspective(45,w/h,.1,100,mp);

	mat4.identity(mv);
	mat4.rotate(mv,35*p,[1,0,0]);
	mat4.translate(mv,[-px,-py-10,-pz-12]);

	g.uniform3f(g.getUniformLocation(sp,'uLL'),px,py,pz);
	var nM=mat3.create();
	mat4.toInverseMat3(mv,nM);
	mat3.transpose(nM);
	g.uniformMatrix3fv(g.getUniformLocation(sp,'uN'),0,nM);

	dl(ab,0);
	dl(ae,0);
	dl(ap,1);
	dl(as,0);
	dl(at,0);
	dl(aw,0);
	dl(aws,0);

	if(pp){
		i=ae.length-1;
		if(i>=0){
			do{
				if(px>ae[i][4]&&px<ae[i][4]+ae[i][13]&&pz>ae[i][6]&&pz<ae[i][6]+ae[i][12]){
					ph-=1;
					if(ph<1){
						v(0,1);
						return
					}
				}
			}while(i--)
		}
		i=at.length-1;
		if(i>=0){
			do{
				if(px>at[i][4]&&px<at[i][4]+at[i][13]&&pz>at[i][6]&&pz<at[i][6]+at[i][12]){
					ph-=1;
					if(ph<1){
						v(0,1)
					}
				}
			}while(i--)
		}
	}
}
function dl(a,j){
	i=a.length-1;
	if(i>=0){
		do{
			var oi=mat4.create();
			mat4.set(mv,oi);
			mvs.push(oi);

			if(j){
				mat4.translate(mv,[px,0,pz]);
				mat4.rotate(mv,i!=0?pr*p:mdx-Math.PI/2,[0,1,0])
			}

			mat4.translate(mv,[a[i][4],a[i][5],a[i][6]]);

			g.bindBuffer(g.ARRAY_BUFFER,a[i][1]);
			g.vertexAttribPointer(vpa,3,g.FLOAT,0,0,0);

			g.bindBuffer(g.ARRAY_BUFFER,a[i][2]);
			g.vertexAttribPointer(vca,4,g.FLOAT,0,0,0);

			g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,a[i][3]);

			g.uniformMatrix4fv(g.getUniformLocation(sp,'uP'),0,mp);
			g.uniformMatrix4fv(g.getUniformLocation(sp,'uM'),0,mv);

			g.drawElements(g.TRIANGLES,6,g.UNSIGNED_SHORT,0);

			mv=mvs.pop()
		}while(i--)
	}
}
function dx(x0,y0,x1,y1){
	var j0=Math.abs(x0-x1),
	j1=Math.abs(y0-y1);
	if(j0>j1){
		return[1,j1/j0]
	}else{
		return j1>j0?[j0/j1,1]:[.5,.5]
	}
}
function n(i){
	return Math.floor(Math.random()*i)
}
function ob(a){
	var i=a.length-1;
	do{
		a[i][1]=g.createBuffer();
		g.bindBuffer(g.ARRAY_BUFFER,a[i][1]);
		g.bufferData(g.ARRAY_BUFFER,new Float32Array([
			a[i][7],a[i][8],a[i][9],
			a[i][10],a[i][11],a[i][12],
			a[i][13],a[i][14],a[i][15],
			a[i][16],a[i][17],a[i][18]
		]),g.STATIC_DRAW);

		a[i][2]=g.createBuffer();
		g.bindBuffer(g.ARRAY_BUFFER,a[i][2]);
		g.bufferData(g.ARRAY_BUFFER,new Float32Array([
			a[i][19],a[i][20],a[i][21],a[i][22],
			a[i][19],a[i][20],a[i][21],a[i][22],
			a[i][19],a[i][20],a[i][21],a[i][22],
			a[i][19],a[i][20],a[i][21],a[i][22]
		]),g.STATIC_DRAW);

		a[i][3]=g.createBuffer();
		g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,a[i][3]);
		g.bufferData(g.ELEMENT_ARRAY_BUFFER,new Uint16Array([
			0,1,2,0,2,3
		]),g.STATIC_DRAW)
	}while(i--)
}
function ps(i){
	if(g[0]>0){
		z(i).currentTime=0;
		z(i).play()
	}
}
function r(){
	if(u>0){
		w=z('c').width=window.innerWidth;
		h=z('c').height=window.innerHeight;
		x=w/2;
		y=h/2
	}
}
function su(){
	if(z(0).value==='WASD'){
		st[0]='WASD';
		l.removeItem('lq0')
	}else{
		st[0]=z(0).value;
		l.setItem('lq0',st[0])
	}
}
function v(i,j){
	clearInterval(tm);
	u=i;
	if(i>0){
		ka=0;
		kd=0;
		ks=0;
		kw=0;
		mdx=0;
		pdx=0;
		pdy=0;
		pdz=0;
		ph=100;
		pp=1;
		pr=0;
		px=0;
		py=0;
		pz=0;
		smc=0;
		if(j){
			su();
			z('v').innerHTML='<canvas id=c></canvas>';
			r();
			g=z('c').getContext('experimental-webgl');

			sf=g.createShader(g.FRAGMENT_SHADER);
			g.shaderSource(sf,'precision mediump float;varying lowp vec4 vC;void main(void){gl_FragColor=vC;}');
			g.compileShader(sf);

			sv=g.createShader(g.VERTEX_SHADER);
			g.shaderSource(sv,'attribute vec4 aVC;attribute vec3 aVN;attribute vec3 aVP;uniform mat4 uM;uniform mat3 uN;uniform mat4 uP;uniform vec3 uLL;varying lowp vec4 vC;void main(void){vec4 mVP=uM*vec4(aVP,1);gl_Position=uP*mVP;vC=aVC;highp vec3 tN=uN*aVN;}');
			g.compileShader(sv);

			sp=g.createProgram();
			g.attachShader(sp,sv);
			g.attachShader(sp,sf);
			g.linkProgram(sp);
			g.useProgram(sp);

			g.clearColor(0,0,0,1);
			g.clearDepth(1);
			g.enable(g.CULL_FACE);
			g.enable(g.DEPTH_TEST);
			g.depthFunc(g.LEQUAL);

			vpa=g.getAttribLocation(sp,'aVP');
			g.enableVertexAttribArray(vpa);

			vca=g.getAttribLocation(sp,'aVC');
			g.enableVertexAttribArray(vca);

			ab.length=0;

			ae=[
				[0,0,0,0,-8,1,-8,
					-1,0,-1,
					-1,0,1,
					1,0,1,
					1,0,-1,
					1,0,0,1,
					0,1,0]
			];
			ob(ae);

			ap=[
				[0,0,0,0,0,2,0,
					-1,0,-2,
					-1,0,1,
					1,0,1,
					1,0,-2,
					0,0,1,1,
					0,1,0],
				[1,0,0,0,0,1,0,
					-1,0,-1,
					-1,0,1,
					1,0,1,
					1,0,-1,
					0,1,0,1,
					0,1,0],
				[2,0,0,0,0,.1,0,
					-1,0,-1,
					-1,0,1,
					1,0,1,
					1,0,-1,
					.2,.2,.2,1,
					0,1,0]
			];
			ob(ap);

			as=[
				[0,0,0,0,-5,0,-9.99,
					-2,3,0,
					-2,0,0,
					2,0,0,
					2,3,0,
					.4,.2,.1,1,
					0,0,1]
			];
			ob(as);

			at=[
				[0,0,0,0,-10+n(20),.05,-2+n(5),
					0,0,0,
					0,0,4,
					2,0,4,
					2,0,0,
					.5,0,0,1,
					0,1,0]
			];
			ob(at);
	
			aw=[
				[0,0,0,0,-10,0,0,
					0,0,-10,
					0,10,-10,
					0,10,10,
					0,0,10,
					.5,.5,.5,1,
					1,0,0,
					1],
				[1,0,0,0,0,0,-10,
					-10,10,0,
					-10,0,0,
					10,0,0,
					10,10,0,
					.4,.4,.4,1,
					0,0,1,
					1],
				[2,0,0,0,-10,0,10,
					0,0,0,
					0,-10,0,
					20,-10,0,
					20,0,0,
					.4,.4,.4,1,
					0,0,1,
					0],
				[3,0,0,0,10,0,-10,
					0,-10,0,
					0,0,0,
					0,0,6,
					0,-10,6,
					.5,.5,.5,1,
					1,0,0,
					0],
				[4,0,0,0,10,0,4,
					0,-10,0,
					0,0,0,
					0,0,6,
					0,-10,6,
					.5,.5,.5,1,
					1,0,0,
					0],

				[5,0,0,0,10,0,-4,
					0,-2,0,
					0,0,0,
					10,0,0,
					10,-2,0,
					.4,.4,.4,1,
					0,0,-1,
					0],
				[6,0,0,0,10,0,4,
					0,0,0,
					0,-2,0,
					10,-2,0,
					10,0,0,
					.4,.4,.4,1,
					0,0,1,
					0],
				[7,0,0,0,20,0,-4,
					0,-10,0,
					0,0,0,
					0,0,8,
					0,-10,8,
					.5,.5,.5,1,
					1,0,0,
					0],
			];
			ob(aw);

			aws=[
				[0,0,0,0,-10,0,-10,
					0,0,0,
					0,0,20,
					20,0,20,
					20,0,0,
					.3,.3,.3,1,
					0,1,0],
				[1,0,0,0,10,0,-4,
					0,0,0,
					0,0,8,
					10,0,8,
					10,0,0,
					.3,.3,.3,1,
					0,1,0],
				[2,0,0,0,10,-2,-4,
					0,-8,0,
					0,0,0,
					0,0,8,
					0,-8,8,
					.5,.5,.5,1,
					1,0,0]
			];
			ob(aws)
		}
		tm=setInterval('d()',30)
	}else{
		ab.length=ae.length=ap.length=as.length=at.length=aw.length=aws.length=0;
		g=0;
		z('v').innerHTML='<div style=display:inline-block;text-align:left;vertical-align:top><div class=c><a href=/><b>LegendsQuest</b></a></div><hr><div class=c><ul><li><a onclick=v(1,1)>Test Level</a></ul></div></div><div style="border-left:8px solid #222;display:inline-block;text-align:left"><div class=c><input disabled style=border:0 value=Click>Fire<br><input disabled style=border:0 value=ESC>Main Menu<br><input id=0 maxlength=4 value='+st[0]+'>Move<br><input disabled style=border:0 value=P>Pause</div><hr><div class=c><a onclick="if(confirm(\'Reset settings?\')){z(0).value=\'WASD\';su()}">Reset Settings</a></div></div>'
	}
}
function z(i){
	return document.getElementById(i)
}
var ab=ae=ap=as=at=aw=aws=[],
g=h=i=j=ka=kd=ks=kw=md=mdx=pdx=pdy=pdz=ph=pp=pr=px=py=pz=sc=sf=smc=sp=sv=tm=ts=u=vca=vna=vpa=x=y=0,
l=window.localStorage,
mp=mat4.create(),
mv=mat4.create(),
mvs=[],
p=Math.PI/180,
st=[
	l.getItem('lq0')===null?'WASD':l.getItem('lq0')
];
v(0,1);
window.onkeydown=function(e){
	if(u>0){
		i=window.event?event:e;
		i=i.charCode?i.charCode:i.keyCode;
		if(i==80){
			pp=!pp
		}else if(i==27){
			v(0,1)
		}else{
			i=String.fromCharCode(i);
			if(i===st[0][1]){
				ka=1
			}else if(i===st[0][3]){
				kd=1
			}else if(i===st[0][2]){
				ks=1
			}else if(i===st[0][0]){
				kw=1
			}
		}
	}
};
window.onkeyup=function(e){
	i=window.event?event:e;
	i=String.fromCharCode(i.charCode?i.charCode:i.keyCode);
	if(i===st[0][1]){
		ka=0
	}else if(i===st[0][3]){
		kd=0
	}else if(i===st[0][2]){
		ks=0
	}else if(i===st[0][0]){
		kw=0
	}
};
window.onmousedown=function(e){
	md=1
};
window.onmousemove=function(e){
	if(u>0){
		mdx=Math.atan2(y-e.pageY,e.pageX-x)
	}
};
window.onmouseup=function(e){
	md=0
};
window.onresize=r
