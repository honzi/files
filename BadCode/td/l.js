var 
lvlid=0,

bb=[],
eb=[],
mo=0,
un=[],



w=[],
wtxt=[];


function lvl(id){
	lvlid=id;
	if(id==1){
	}else{
		document.getElementById('c').style.background='rgb(0,0,0)';
		bb=[
			[-100,-100,25,25,15,10,5,2],
			[-100,-75,25,25,15,10,5,2],
			[-100,-50,25,25,15,10,5,2],
			[-100,-25,25,25,15,10,5,2],
			[-100,0,25,25,15,10,5,2],
			[-100,25,25,25,15,10,5,2],
			[-100,50,25,25,15,10,5,2],
			[-100,75,25,25,15,10,5,2],
			[-100,100,25,25,15,10,5,2],
			[-75,-100,25,25,15,10,5,2],
			[-75,100,25,25,15,10,5,2],
			[-50,-100,25,25,15,10,5,2],
			[-50,100,25,25,15,10,5,2],
			[-25,-100,25,25,15,10,5,2],
			[-25,100,25,25,15,10,5,2],
			[0,-100,25,25,15,10,5,2],
			[0,100,25,25,15,10,5,2],
			[25,-100,25,25,15,10,5,2],
			[25,100,25,25,15,10,5,2],
			[50,-100,25,25,15,10,5,2],
			[50,100,25,25,15,10,5,2],
			[75,-100,25,25,15,10,5,2],
			[75,100,25,25,15,10,5,2],
			[100,-100,25,25,15,10,5,2],
			[100,-25,50,50,42,42,42,1],
			[100,25,25,25,15,10,5,2],
			[100,50,25,25,15,10,5,2],
			[100,75,25,25,15,10,5,2],
			[100,100,25,25,15,10,5,2],
			[125,-100,25,25,15,10,5,2],
			[150,-100,25,25,15,10,5,2],
			[175,-100,25,25,15,10,5,2],
			[200,-100,25,25,15,10,5,2],
			[225,-100,25,25,15,10,5,2],
			[250,-100,25,25,15,10,5,2]
		];
		eb=[
			[2,2,100,125],
			[1,1,50,75]
		];
		mo=200;
		un=[];
		w=[
			[-250,-250,500,500,2,20,2]
		];
		wtxt=[
			['test map: work in progress',0,-280]
		]
	}
}