function d(){
	dx=dy=0;
	if(ka){
		dx-=5
	}
	if(kd){
		dx+=5
	}
	if(ks){
		dy+=5
	}
	if(kw){
		dy-=5
	}

	i=w.length-1;
	do{
		if(!(px+dx-9>w[i][0]+w[i][2]
			||px+dx+9<w[i][0]
			||py+dy-9>w[i][1]+w[i][3]
			||py+dy+9<w[i][1])){
			if(py!=w[i][1]-10
				&&py!=w[i][1]+w[i][3]+10
				&&py+dy-9<w[i][1]+w[i][3]
				&&py+dy+9>w[i][1]
				&&((ka&&px+dx-9<w[i][0]+w[i][2])
					||(kd&&px+dx+9>w[i][0])
				)){
				dx=0
			}
			if(px+dx+9>w[i][0]
				&&px+dx-9<w[i][0]+w[i][2]
				&&((ks&&py+dy+9>w[i][1])
					||(kw&&py+dy-9<w[i][1]+w[i][3])
				)){
				dy=0
			}
		}
	}while(i--);

	px+=dx;
	py+=dy;

	b.fillStyle='#060';
	b.fillRect(0,0,420,420);

	b.translate(210-px,210-py);

	i=ws.length-1;
	do{
		if(!(ws[i][0]+ws[i][2]<px-210
			||ws[i][0]>px+210
			||ws[i][1]+ws[i][3]<py-210
			||ws[i][1]>py+210)){
			b.fillStyle=ws[i][4];
			b.fillRect(ws[i][0],ws[i][1],ws[i][2],ws[i][3])
		}
	}while(i--);

	b.font='10pt sans-serif';
	b.textAlign='center';

	i=o.length-1;
	if(i>=0){
		do{
			if(o[i][0]>px-10
				&&o[i][0]<px+10
				&&o[i][1]>py-10
				&&o[i][1]<py+10){
				o.splice(i,1);
				z('g').innerHTML=parseInt(z('g').innerHTML)+n(9)+1
			}
		}while(i--);

		i=o.length-1;
		if(i>=0){
			do{
				if(!(o[i][0]<px-210
					||o[i][0]>px+210
					||o[i][1]<py-210
					||o[i][1]>py+210)){

					b.fillStyle=o[i][4];
					b.fillRect(o[i][0]-o[i][2]/2,o[i][1]-o[i][3]/2,o[i][2],o[i][3]);

					if(si){
						b.fillStyle='#fff';
						b.fillText(o[i][5],o[i][0],o[i][1]-o[i][2]*2)
					}
				}
			}while(i--)
		}
	}

	i=w.length-1;
	do{
		if(!(w[i][0]+w[i][2]<px-210
			||w[i][0]>px+210
			||w[i][1]+w[i][3]<py-210
			||w[i][1]>py+210)){
			b.fillStyle=w[i][4];
			b.fillRect(w[i][0],w[i][1],w[i][2],w[i][3])
		}
	}while(i--);

	i=npc.length-1;
	if(i>=0){
		do{
			b.fillStyle='#7f7';
			b.fillRect(npc[i][0],npc[i][1],20,20);
			if(!(px>npc[i][2]+npc[i][4]
				||px<npc[i][2]
				||py>npc[i][3]+npc[i][5]
				||py<npc[i][3])){
				b.fillStyle='#fff';
				b.fillText(npc[i][8],npc[i][6],npc[i][7])
			}
		}while(i--)
	}

	b.translate(-210+px,-210+py);

	b.fillStyle='#fff';
	b.fillRect(200,200,20,20);

	z('px').innerHTML=px;
	z('py').innerHTML=py;

	c.drawImage(z('b0'),0,0)
}
function n(i){
	return Math.floor(Math.random()*i)
}
function z(i){
	return document.getElementById(i)
}
var b=z('b0').getContext('2d'),
c=z('c0').getContext('2d'),
dx=dy=ka=kd=ks=kw=px=py=0,
si=1,
npc=[
	[-180,-190,-200,-200,150,160,-125,-155,'My store is not yet open.'],
	[115,10,40,-30,160,250,125,-13,'I cannot train you yet.']
],
o=[
	[-250,50,5,5,'#ff0','Coins']
],
w=[
	[-200,-50,90,10,'#333'],
	[-200,-150,150,20,'#432'],
	[-50,-200,10,160,'#333'],

	[40,-50,10,200,'#333'],
	[50,-50,150,10,'#333'],

	[-210,-210,180,10,'#222'],
	[-210,-200,10,170,'#222'],
	[-210,30,10,170,'#222'],
	[-210,200,180,10,'#222'],
	[30,-210,180,10,'#222'],
	[30,200,180,10,'#222'],
	[200,-200,10,80,'#222'],
	[200,-60,10,260,'#222']
],
ws=[
	[-200,-200,150,150,'#543'],
	[-210,-30,180,60,'#777'],
	[-110,-50,60,20,'#777'],
	[-30,-210,60,450+n(100),'#777'],
	[30,150,20,50,'#777'],
	[30,-120,200+n(125),60,'#777'],
	[50,-40,150,240,'#543']
];
z('b0').height=z('b0').width=z('c0').height=z('c0').width=420;
setInterval('d()',50);
window.onkeydown=function(e){
	i=window.event?event:e;
	i=String.fromCharCode(i.charCode?i.charCode:i.keyCode);
	if(i==z('s1').value[1]){
		ka=1
	}if(i==z('s1').value[3]){
		kd=1
	}else if(i==z('s1').value[2]){
		ks=1
	}else if(i==z('s1').value[0]){
		kw=1
	}else if(i==z('s0').value){
		si=!si
	}
};
window.onkeyup=function(e){
	i=window.event?event:e;
	i=String.fromCharCode(i.charCode?i.charCode:i.keyCode);
	if(i==z('s1').value[1]){
		ka=0
	}if(i==z('s1').value[3]){
		kd=0
	}else if(i==z('s1').value[2]){
		ks=0
	}else if(i==z('s1').value[0]){
		kw=0
	}
}
