var 
evt=[],
lvlid=0,
npc=[],
w=[],
wtxt=[];



function lvl(id){
	lvlid=id;
	if(id==2){
		document.getElementById('c').style.background='rgb(0,0,0)';
		evt=[
			[0,0,200,200,'☺',100,100]
		];
		npc=[
			[100,100,80,80,200]
		];
		w=[
			['c',15,15,15],
			[-200,-200,400,400,0],

			['c',37,37,37],
			[-200,200,400,25,1],
			[-225,-225,25,450,1],
			[200,-225,25,450,1],
			[-200,-225,400,25,1],

			['c',51,17,17],
			[-200,75,125,125,3,-1,0],

			['c',17,51,17],
			[-200,-200,125,125,3,.5,0],

			[0,-100,20,20,4,1,99,100,100],

			['c',17,17,51],
			[75,-200,125,125,3,0,.5],
			
		];
		wtxt=[
		]
	}else if(id==1){
		document.getElementById('c').style.background='rgb(24,36,14)';
		evt=[
			[-750,80,100,150,'What am I looking at?',-740,100],
			[350,-225,1,1,'lol',275,-175]
		];
		npc=[
			[-740,155,80,80,200]
		];
		w=[
			['c',25,25,25],
			[-565,520,15,70,1],
			[-550,575,540,15,1],
			[-545,-450,15,150,1],
			[-450,-535,920,15,1],
			[90,575,180,15,1],
			[530,-515,15,700,1],


			['c',2,20,2],
			[-875,75,100,100,1],
			[-860,200,100,100,1],
			[-750,-50,100,100,1],
			[-730,315,100,100,1],
			[-625,-300,100,100,1],
			[-680,-200,100,100,1],
			[-665,-100,100,100,1],
			[-615,420,100,100,1],
			[-550,-550,100,100,1],
			[-500,200,100,100,1],
			[-450,-80,100,100,1],
			[-355,475,100,100,1],
			[-300,-275,100,100,1],
			[-300,175,100,100,1],
			[-250,-500-(Math.random()>.5?150:0),100,100,1],
			[-200,300,100,100,1],
			[-150,-10,100,100,1],
			[-140,-130,100,100,1],
			[-125,90,100,100,1],
			[-50,-400,100,100,1],
			[-25,-150,100,100,1],
			[-10,550,100,100,1],
			[0,75,100,100,1],
			[75,300,100,100,1],
			[50,-450,100,100,1],
			[100,100,100,100,1],
			[200,125,100,100,1],
			[225,-225,100,100,1],
			[225,225,100,100,1],
			[270,525,100,100,1],
			[300,75,100,100,1],
			[325,-200,100,100,1],
			[350,400,100,100,1],
			[350,-300,100,100,1],
			[400,100,100,100,1],
			[470,-615,100,100,1],
			[470,420,100,100,1],
			[515,185,100,100,1],
			[525,320,100,100,1],


			['c',36,24,14],
			[-23,-23,46,46,2,0,0,0],


			['c',255,215,0],
			[500,300,20,20,4,1,0,0,25]
		];
		wtxt=[
		]
	}else{
		document.getElementById('c').style.background='rgb(0,0,0)';

		evt=[
		];
		npc=[
		];
		w=[
			['c',15,15,15],
			[-200,-175,400,400,0],


			['c',37,37,37],
			[-200,225,400,25,1],
			[-225,-200,25,450,1],
			[200,-200,25,450,1],
			[-200,-200,400,25,1],

			['c',24,36,14],
			[-200,-175,75,75,2,420,270,1],

			['c',0,0,0],
			[125,150,75,75,2,0,0,2]
		];
		wtxt=[
			['The Forest',-175,-225],
			['Test Chamber',175,275]
		]
	}
}