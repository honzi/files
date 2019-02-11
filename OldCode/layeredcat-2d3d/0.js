function d(){
	b.clearRect(0,0,w,h);

	b.strokeStyle='#000';
	i=l.length-1;
	do{
		if(i>0){
			var j0=Math.abs(l[i][0]-l[0][0]),
			j1=Math.abs(l[i][1]-l[0][1]),
			jd=Math.sqrt(Math.pow(j0,2)+Math.pow(j1,2))/i;
			if(jd>50){
				jd=50
			}
			if(j0>j1){
				j1=j1/j0*jd;
				j0=jd;
			}else if(j1>j0){
				j0=j0/j1*jd;
				j1=jd
			}else{
				j0=jd/2;
				j1=jd/2
			}
			l[i][0]+=l[i][0]>l[0][0]?-j0:j0;
			l[i][1]+=l[i][1]>l[0][1]?-j1:j1;

			b.beginPath();
			b.moveTo(l[i][0]+l[i][5][0][0],l[i][1]+l[i][5][0][1]);
			j=l[i][5].length-1;
			do{
				if(j>0){
					b.lineTo(l[i][0]+l[i][5][j][0],l[i][1]+l[i][5][j][1])
				}
			}while(j--);
			b.closePath();
			b.fillStyle=l[i][2];
			b.fill();
			b.stroke()
		}
	}while(i--);

	c.clearRect(0,0,w,h);
	c.drawImage(z('b'),0,0)
}
function r(){
	w=z('b').width=z('c').width=window.innerWidth;
	h=z('b').height=z('c').height=window.innerHeight
}
function n(i){
	return Math.floor(Math.random()*i)
}
function z(i){
	return document.getElementById(i)
}
var b=z('b').getContext('2d'),
c=z('c').getContext('2d'),
h=i=j=mx=my=w=0,
l=[];
window.onresize=r;
r();
l=[
	[mx,my],
	[mx,my,'#ea2',w/2,h/2,
		[
			[-12,-12],
			[12,-12],
			[0,12]
		]
	],

	[mx,my,'#fb3',w/2,h/2,
		[
			[-40,-40],
			[-20,-40],
			[-20,-30],
			[-40,-30]
		]
	],
	[mx,my,'#fb3',w/2,h/2,
		[
			[20,-40],
			[40,-40],
			[40,-30],
			[20,-30]
		]
	],

	[mx,my,'#d91',w/2,h/2,
		[
			[-50,-50],
			[-40,-80],
			[-30,-50],
			[30,-50],
			[40,-80],
			[50,-50],
			[50,0],
			[20,40],
			[-20,40],
			[-50,0]
		]
	],

	[mx,my,'#d91',w/2,h/2,
		[
			[-50,-50],
			[50,-50],
			[50,90],
			[30,90],
			[30,50],
			[-30,50],
			[-30,90],
			[-50,90],
			[-50,50]
		]
	],

	[mx,my,'#d91',w/2,h/2,
		[
			[-55,-55],
			[55,-55],
			[55,55],
			[-55,55]
		]
	],

	[mx,my,'#d91',w/2,h/2,
		[
			[-60,-60],
			[60,-60],
			[60,60],
			[-60,60]
		]
	],

	[mx,my,'#d91',w/2,h/2,
		[
			[-55,-55],
			[55,-55],
			[55,55],
			[-55,55]
		]
	],

	[mx,my,'#d91',w/2,h/2,
		[
			[-50,-50],
			[50,-50],
			[50,90],
			[30,90],
			[30,50],
			[-30,50],
			[-30,90],
			[-50,90],
			[-50,50]
		]
	],

	[mx,my,'#d91',w/2,h/2,
		[
			[-15,-50],
			[5,-50],
			[5,-30],
			[-15,-30]
		]
	],

	[mx,my,'#d91',w/2,h/2,
		[
			[-20,-55],
			[0,-55],
			[0,-35],
			[-20,-35]
		]
	],

	[mx,my,'#d91',w/2,h/2,
		[
			[-25,-60],
			[-5,-60],
			[-5,-40],
			[-25,-40]
		]
	],

	[mx,my,'#d91',w/2,h/2,
		[
			[-25,-65],
			[-5,-65],
			[-5,-45],
			[-25,-45]
		]
	],

	[mx,my,'#d91',w/2,h/2,
		[
			[-25,-70],
			[-5,-70],
			[-5,-50],
			[-25,-50]
		]
	],

	[mx,my,'#d91',w/2,h/2,
		[
			[-25,-75],
			[-5,-75],
			[-5,-55],
			[-25,-55]
		]
	],
];
setInterval('d()',50);

window.onmousemove=function(e){
	l[0][0]=mx;
	l[0][1]=my;
	mx=e.pageX;
	my=e.pageY
}
