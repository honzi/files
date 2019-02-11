function ca(i){
	ai=i;
	ad=[
		'It\'s a quiet and windy autumn day. Ominus dark clouds loom over the golden-brown trees.',
		'The damp autumn air and dark grey sky relax you as you walk along the town path.',
		'The chill of the wind seems amplified by the crashing waves. The ominous clouds are now part of a massive storm a few kilometers offshore.',
		'A few guards stand upon the wooden wall that separates the Town from the Woods. The guards warn you of the amplified darkness between the trees.',
		'Fog has developed around you, strangely impervious to the storm you can no longer seem to find. The eerie calm chills you in more ways than one.',
		'The fog truely lives up to the warning given by the guards. With the onset of rather untimely darkness, you can barely see a few meters ahead.','It really feels like you shouldn\'t be here.'
	][i];
	an=[
		'<span class=it1>Town Square</a>',
		'<span class=it1>Town Path</span>',
		'<span class=it1>Frigid Beach</span>',
		'<span class=it1>Town Gates</span>',
		'<span class=it2>Cemetary</span>',
		'<span class=it2>Woods</a>',
		'<span class=it2>Crypt</a>'
	][i];
	ap=[
		['<a onclick=dc(2)>Visit the <span class=it1>Shop & Inn</span>.</a>','The <span class=it1>Library</span> is closed.','<a onclick=ca(1)>Walk along the <span class=it1>Town Path</span>.</a>'],
		['<a onclick=ca(0)>Walk to the <span class=it1>Town Square</span>.</a>','<a onclick=ca(3)>Walk to the <span class=it1>Town Gates</span>.</a>','<a onclick=ca(4)>Walk to the <span class=it2>Cemetary</span>.</a>','<a onclick=ca(2)>Walk to the <span class=it1>Beach</span>.</a>'],
		['<a onclick=ca(1)>Walk back up to the <span class=it1>Town Path</span>.</a>','The <span class=it1>Seaside Cliffs</span> look too dangerous.'],
		['<a onclick=ca(1)>Walk along the <span class=it1>Town Path</span>.</a>','<a onclick=ca(5)>Enter the <span class=it2>Woods</span>!</a>'],
		['<a onclick=ca(1)>Briskly return to the <span class=it1>Town Path</span>.</a>','<a onclick=ca(6)>Enter the <span class=it2>Crypt</span>!</a>','<a onclick=stmm(n(2),0);dc(1)>What was that noise?</a>'],
		['<a onclick=ca(3)>Return to the light of the <span class=it1>Town Gates</span></a>.','<a onclick=stmm(5,0);dc(1)>What was that noise?</a>'],
		['<a onclick=ca(4)><span class=it2>Retreat</span> towards the light.</a>','<a onclick="stmm(6+n(2),0);dc(1)">Open a casket!</a>']
	][i];
	ql=[ql0,[],ql2,[],[],[],[]][i];
	dc(0)
}
function cof(){
	i=10;
	var j=[5,5,50,1,1,60,10,0,10,10,10];
	do{
		if(isNaN(w('c'+i))){
			z('c'+i).value=j[i]
		}
	}while(i--);
	stmm(0,[w('c6'),0,w('c7'),parseInt(w('c3')),parseInt(w('c4')),(w('c0')>0?w('c0'):1),w('c1'),'Custom Opponent',w('c5'),w('c5'),w('c5'),w('c8'),w('c9'),w('c10'),w('c2'),'Weapon',0,w('ct'),0,parseInt(w('c11'))]);
	cl=co=0;
	dc(1)
}
function dc(i){
	tpi='';
	if(i==1){
		tpi='<table><tr><td style=border-left:0;border-top:0;text-align:right valign=top><b>'+nm+'</b><br>Level '+lv+' Organic<br><span class=l>'+hc+'/'+hm+'</span><br><span class=it1>'+mc+'/'+mm+'</span><td style=border-right:0;border-top:0 valign=top>'+mpf+'<b>'+mnm+'</b><br>Level '+ml+' '+(['Organic','Mechanical','Undead'][mty])+'<br><span class=r>'+mhc+'/'+mhm+'</span>'+(mmm>0?('<br><span class=it1>'+mmc+'/'+mmm+'</span>'):'<br>')+'<tr><td style=border-left:0;padding:0;text-align:right;width:50% valign=top><div class=c><a onclick="';
		if(hc>0){
			if(mhc>0){
				tpi+='ff(0,'+aty+')"'+(eq[7].length!=0?' class='+(eq[7][5]?'it1':'it0')+'>'+eq[7][0]:'>Fist')+'</a> ('+[dmi,dri,dsi][aty]+'-'+[dmx,drx,dsx][aty]+' '+['Melee','Ranged','Magical'][aty]+')</div><hr>'+(sp[0]>0?'<div class=c><a class=it1 onclick=ff(1,0)>Charged Magical Strike</a> ('+(dmi+sp[0])+'-'+(dmx+sp[0])+' Melee Damage, '+sp[0]+' Mana) '+(mc<sp[0]?'<span style=color:#f00>Not Enough Mana</span>':'')+'</div><hr>':'')+(sp[1]>0?'<div class=c><a class=it1 onclick=ff(1,1)>Magically Enhanced Arrow</a> ('+(dri+sp[1])+'-'+(drx+sp[1])+' Ranged Damage, '+sp[1]+' Mana) '+(mc<sp[1]?'<span style=color:#f00>Not Enough Mana</span>':'')+'</div><hr>':'')+(sp[2]>0?'<div class=c><a class=it1 onclick=ff(1,2)>Pure Magic Bolt</a> ('+(dsi+sp[2])+'-'+(dsx+sp[2])+' Spell Damage, '+sp[2]+' Mana) '+(mc<sp[2]?'<span style=color:#f00>Not Enough Mana</span>':'')+'</div><hr>':'')+'<div class=c><a onclick=ra()>Attempt to Flee!'
			}else{
				tpi+=(co&&q==-1?'rf('+n(19)+')">Collect Loot':'dc(0)">'+(q>-1?'Complete Quest':'Back to Character Sheet'))
			}
		}else{
			mmc=-1;
			tpi+=(pd==1?'go=0;q=-1;hc=hm;mc=mm;ca(0);dc(0)">Awaken in <span class=it1>Town</span>':'nf(0)">Create New Character</a><br><a onclick=svl()>Load Character')
		}
		tpi+='</a></div><td style=border-right:0 valign=top><b>Battlelog</b> (<a onclick="cl=1;bc=1;ftxt=\'\';dc(1)">Clear</a>)';
		i=new Date();
		var ttxt='';
		if(ak[0]!=-1||ak[1]!=-1){
			var tvar=[
				'<br><b>'+mnm+'</b> attacks with its <b>'+mw+'</b> and '+(ak[1]>-2?'does <b>'+ak[1]+'</b> '+(['melee','ranged','spell'][mwt])+' damage!'+(ak[6]?' Critical hit!':'')+(hc<=0?'<br><span style=color:#f00>You '+(pd==1?'are knocked unconscious':'died')+'! ☹</span>':''):(ak[1]==-3?'is resisted!':'misses!')),
				ak[0]==-4?'<br><b>You</b> try to run away but are too slow!':'<br><b>You</b> attack with your <b>'+ak[4]+'</b> and '+(ak[0]>-2?'do <b>'+ak[0]+'</b> '+['melee','ranged','spell'][ak[3]]+' damage!'+(ak[5]?' Critical hit!':'')+(mhc<=0?'<br><span style=color:#0f0><b>'+mnm+'</b> '+(mnl?'is knocked out':'dies')+'!</span>':''):(ak[0]==-3?'are resisted!':'miss!'))
			];
			ttxt=(mspd>spd?tvar[0]+(hc>0?tvar[1]:''):tvar[1]+(mhc>0?tvar[0]:''));
			tvar=0
		}
		if(!bc){
			ftxt='<br><br>'+i.getFullYear()+'-'+(i.getMonth()<10?'0':'')+i.getMonth()+'-'+(i.getDate()<10?'0':'')+i.getDate()+' '+(i.getHours()<10?'0':'')+i.getHours()+':'+(i.getMinutes()<10?'0':'')+i.getMinutes()+':'+(i.getSeconds()<10?'0':'')+i.getSeconds()+ttxt+ftxt;
			tpi+=ftxt+(cl?'':'<br>'+mnm+' attacks you!')
		}else{
			bc=0
		}
		tpi+='</table>'
	}else if(i==2){
		tpi='<div class="c t"><b class=it1 style=font-size:150%>Shop & Inn</b><br><span class=l>'+hc+'/'+hm+' Life</span> | <span class=it1>'+mc+'/'+mm+' Mana</span> | <span class=g>'+go+' Gold</span> | <a onclick=dc(0)>Exit</a></div><table class=t><tr><td style=border:0;padding:0;width:50% valign=top><table><tr style=background:#222><td colspan=3><b>Buy</b><tr><td>Memory Wipe<td><span class=g>Free!</span><td>'+(skp<lv?'<a onclick="if(confirm(\'Reset skills and passives?\')){i=8;do{if(sk[i]>0){sfk(-1,i,([10,16,18,14,9,11,17,12,15][i]),-sk[i])}}while(i--);sk=[0,0,0,0,0,0,0,0,0];skp=lv;sp=[0,0,0];dc(2)}">Reset Skills & Passives</a>':'You remember nothing.')+'<tr><td>Night of Rest<td><span class=g>Free!</span><td>'+(hc<hm||mc<mm?'<a onclick="hc=hm;mc=mm;dc(2)">Rest</a>':'You feel well rested.')+'</table><td style=border:0;padding:0 valign=top><table><tr style=background:#222><td colspan=3><b>Sell</b>';
		i=iv.length-1;
		if(i>=0){
			tpi+=' (<a onclick="if(confirm(\'Sell everything?\')){sf(-1)}">Sell Everything</a>)';
			do{
				tpi+='<tr><td><a class='+(iv[i][5]?'it1':'it0')+' onmouseout=y() onmouseover=tt('+i+',1)>'+iv[i][0]+'</a>'+(iv[i][2]?'<br>(equipped)':'')+'<td><span class=g>'+(iv[i][5]?5:1)+' Gold</span><td><a class=bl onclick="if(confirm(\'Sell '+iv[i][0]+'?\')){sf('+i+')}">Sell</a>'
			}while(i--)
		}else{
			tpi+=''
		}
		tpi+='</table></table>'
	}else if(i==3){
		z('c').innerHTML='<div class="c t"><span style=color:#0f0>'+skp+'</span> Unused Point'+(skp!=1?'s':'')+' | <a onclick=dc(0)>Back to Character Sheet</a></div><table class=t><tr><td style=border:0;padding:0;width:50% valign=top><table><tr style=background:#333;font-weight:bold><td colspan=3>Skills<tr><td><a class=it1>Charged<br>Magical Strike</a><td>Level '+sp[0]+(skp>0?'<br><a onclick="if(confirm(\'Level up Magical Strike?\')){skp-=1;sp[0]+=1;dc(3)}">Level Up</a>':'')+'<td>'+sp[0]+' Mana Cost<br>'+(sp[0]>0?sp[0]+1:0)+'-'+(sp[0]>0?sp[0]+1:0)+' Base Melee Damage<tr style=background:#111><td><a class=it1>Magically<br>Enhanced Arrow</a><td>Level '+sp[1]+(skp>0?'<br><a onclick="if(confirm(\'Level up Enhanced Arrow?\')){skp-=1;sp[1]+=1;dc(3)}">Level Up</a>':'')+'<td>'+sp[1]+' Mana Cost<br>'+(sp[1]>0?sp[1]+1:0)+'-'+(sp[1]>0?sp[1]+1:0)+' Base Ranged Damage<tr><td><a class=it1>Bolt of<br>Pure Magic</a><td>Level '+sp[2]+(skp>0?'<br><a onclick="if(confirm(\'Level up Bolt of Pure Magic?\')){skp-=1;sp[2]+=1;dc(3)}">Level Up</a>':'')+'<td>'+sp[2]+' Mana Cost<br>'+(sp[2]>0?sp[2]+1:0)+'-'+(sp[2]>0?sp[2]+1:0)+' Base Spell Damage<tr style=background:#333;font-weight:bold><td colspan=3>Base Passives<tr><td class=t>Divine Blood<td>Level '+lv+'<td><tr><td>Quiver of Infinite Arrows<td>Level '+lv+'<td></table><td style=border:0;padding:0 valign=top><table><tr style=background:#333;font-weight:bold><td colspan=3>Passives<tr><td>Close Combat Experience<td>'+sk[0]+'/25'+(sk[0]<25&&skp>0?'<br><a onclick="if(confirm(\'Have a vivid action dream?\')){sfk(1,0,10,1)}">Have a Vivid Action Dream</a>':'')+'<td>+'+sk[0]+'% Chance to Hit with Melee Attacks<tr style=background:#111><td>Depth Perception Encyclopedia Research<td>'+sk[1]+'/25'+(sk[1]<25&&skp>0?'<br><a onclick="if(confirm(\'Pull an all-nighter?\')){sfk(1,1,16,1)}">Pull an All-Nighter</a>':'')+'<td>+'+sk[1]+'% Chance to Resist Ranged Attacks<tr><td>Energy Drink<td>'+sk[2]+'/50'+(sk[2]<50&&skp>0?'<br><a onclick="if(confirm(\'Drink 500ml?\')){sfk(1,2,18,1)}">Drink 500ml</a>':'')+'<td>+'+sk[2]+' <span class=s>Speed</span><tr style=background:#111><td>Expanding Knowledge<td>'+sk[3]+'/50'+(sk[3]<50&&skp>0?'<br><a onclick="if(confirm(\'Google things?\')){sfk(1,3,14,1)}">Google Things</a>':'')+'<td>+'+sk[3]+' <span class=it1>Mana</span><tr><td>Healthy Diet<td>'+sk[4]+'/50'+(sk[4]<50&&skp>0?'<br><a onclick="if(confirm(\'Eat from the Bucket of Health?\')){sfk(1,4,9,1)}">Eat from the Bucket of Health</a>':'')+'<td>+'+sk[4]+' <span class=l>Life</span><tr style=background:#111><td>Keen Eye<td>'+sk[5]+'/25'+(sk[5]<25&&skp>0?'<br><a onclick="if(confirm(\'Dramatically look into the distance?\')){sfk(1,5,11,1)}">Dramatically Look into the Distance</a>':'')+'<td>+'+sk[5]+'% Chance to Hit with Ranged Attacks<tr><td>Magical Blood<td>'+sk[6]+'/25'+(sk[6]<25&&skp>0?'<br><a onclick="if(confirm(\'Hit this bong?\')){sfk(1,6,17,1)}">Hit this Bong</a>':'')+'<td>+'+sk[6]+'% Chance to Resist Spells<tr style=background:#111><td>Magical Experimentation<td>'+sk[7]+'/25'+(sk[7]<25&&skp>0?'<br><a onclick="if(confirm(\'Compose magical symphonys?\')){sfk(1,7,12,1)}">Compose Magical Symphonys</a>':'')+'<td>+'+sk[7]+'% Chance to Hit with Spells<tr><td>Self-Defense Training Course<td>'+sk[8]+'/25'+(sk[8]<25&&skp>0?'<br><a onclick="if(confirm(\'Attend a training session?\')){sfk(1,8,15,1)}">Attend a Training Session</a>':'')+'<td>+'+sk[8]+'% Chance to Resist Melee Attacks</table></table>'
	}else if(i==4){
		z('c').innerHTML='<div class="c t"><b style=font-size:150%>Custom Opponent Editor</b><br><a onclick=dc(0)>Back</a> | <a onclick=cof()>FIGHT!</a></div><table class=t><tr><td>Level <input id=c11 value='+lv+'><select id=ct><option value=0>Organic</option><option value=1>Mechanical</option><option value=2>Undead</option></select><br>Life: <input id=c0 value=5><br>Mana: <input id=c1 value=5><br>Speed: <input id=c2 value=50><td><select id=c7><option value=0>Melee</option><option value=1>Ranged</option><option value=2>Spell</option></select><br>Min Damage: <input id=c3 value=1><br>Max Damage: <input id=c4 value=1><br>Hit: <input id=c5 value=60>%<br>Crit: <input id=c6 value=10>%<td>Resist Melee: <input id=c8 value=10>%<br>Resist Ranged: <input id=c9 value=10>%<br>Resist Spells: <input id=c10 value=10>%</table>'
	}else{
		co=1;
		var temp='';
		i=ap.length-1;
		do{
			temp+='<li>'+ap[i]
		}while(i--);
		temp+='</ul>';
		i=ql.length-1;
		if(i>=0){
			temp+='<br><b>Available Quests in this Area:</b><ul>';
			do{
				temp+='<li><a class=it2 onclick=q='+i+';cl=0;mhc=1;mmc=-1;dc(0)>'+ql[i][0]+'</a>'
			}while(i--);
			temp+='</ul>'
		}
		tpi='<table><tr><td colspan=5 style=background:#222;border:0;border-bottom:1px rowspan=2><b style=font-size:125%>'+nm+'</b><br>Level '+lv+(dx?', '+xp+'/'+(lv*10)+' xp':'')+'<td class=t style=background:#222;border-top:0;font-weight:bold;width:1px>Slot<td class=t style=background:#222;border-top:0;font-weight:bold;min-width:150px>Item<td rowspan=12 style=border-top:0;border-right:0 valign=top>'+(q>-1?'<b class=it2 style=font-size:125%>'+ql[q][0]+'</b> Quest<br>'+(mhc>0?ql[q][1]:ql[q][4])+'<br><br>'+(mhc>0?'<b>Quest Choices:</b><ul><li><a onclick=stmm(ql[q][5][n(ql[q][5].length)],0);dc(1)>'+ql[q][2]+'</a><li><a onclick="q=-1;dc(0)">'+ql[q][3]:'<b>Choose Reward:</b><ul><li><a onclick=rf('+n(19)+')>Mystery Item</a><li><a onclick=rf(-2)>+<span class=g>3 Gold</span>')+'</a></ul>':'<b style=font-size:125%>'+an+'</b><br>'+ad+'<br><br><b>Continue Your Adventure:</b><ul>'+temp+'<br><b>Character Management:</b><ul><li><a onclick="if(confirm(\'Create new character?\')){nf(0)}">Create New Character</a><li><a onclick=dc(4)>Custom Opponent Editor</a><li><a onclick="dx=!dx;dc(0)">'+(dx?'Dis':'En')+'able Experience</a><li><a onclick=sv()>Save Character</a> (incomplete)</ul>')+'<tr><td class=t style=background:#111>Head<td class=t>'+(eq[0].length!=0?'<a class='+(eq[0][5]?'it1':'it0')+' onmouseout=y() onmouseover=tt(0,0)>'+eq[0][0]+'</a>':'')+'<tr><td colspan=5 rowspan=3 style=border-left:0 valign=top><span class=l>Life: '+hc+'/'+hm+'</span><br><span class=it1>Mana: '+mc+'/'+mm+'</span><br><span class=s>Speed: '+spd+'</span><td class=t style=background:#111>Neck<td class=t>'+(eq[1].length!=0?'<a class='+(eq[1][5]?'it1':'it0')+' onmouseout=y() onmouseover=tt(1,0)>'+eq[1][0]+'</a>':'')+'<tr><td class=t style=background:#111>Torso<td class=t>'+(eq[2].length!=0?'<a class='+(eq[2][5]?'it1':'it0')+' onmouseout=y() onmouseover=tt(2,0)>'+eq[2][0]+'</a>':'Shirt')+'<tr><td class=t style=background:#111>Hands<td class=t>'+(eq[3].length!=0?'<a class='+(eq[3][5]?'it1':'it0')+' onmouseout=y() onmouseover=tt(3,0)>'+eq[3][0]+'</a>':'')+'<tr class=t><td colspan=5 style=border-left:0><a onclick=dc(3)>Skills and Passives</a> '+(skp>0?'<b>('+skp+')</b>':'(0)')+'<td style=background:#111>Waist<td>'+(eq[4].length!=0?'<a class='+(eq[4][5]?'it1':'it0')+' onmouseout=y() onmouseover=tt(4,0)>'+eq[4][0]+'</a>':'')+'<tr class=t style=background:#222><td style=border-left:0;width:1px><b>Type</b><td style=width:1px><b>Damage</b><td style=width:1px><b>Hit</b><td style=width:1px><b>Crit</b><td style=width:1px><b>Resist</b><td style=background:#111>Legs<td style=background:#000>'+(eq[5].length!=0?'<a class='+(eq[5][5]?'it1':'it0')+' onmouseout=y() onmouseover=tt(5,0)>'+eq[5][0]+'</a>':'Shorts')+'<tr class=t><td style=background:#111;border-left:0>Melee<td>'+dmi+'-'+dmx+'<td>'+him+'%<td>'+crm+'%<td>'+rem+'%<td style=background:#111>Feet<td>'+(eq[6].length!=0?'<a class='+(eq[6][5]?'it1':'it0')+' onmouseout=y() onmouseover=tt(6,0)>'+eq[6][0]+'</a>':'')+'<tr class=t><td style=background:#111;border-left:0>Ranged<td>'+dri+'-'+drx+'<td>'+hir+'%<td>'+crr+'%<td>'+rer+'%<td style=background:#111>Weapon<td>'+(eq[7].length!=0?'<a class='+(eq[7][5]?'it1':'it0')+' onmouseout=y() onmouseover=tt(7,0)>'+eq[7][0]+'</a>':'Fist')+'<tr class=t><td style=background:#111;border-left:0>Spells<td>'+dsi+'-'+dsx+'<td>'+his+'%<td>'+crs+'%<td>'+res+'%<td style=background:#111>Shield<td>'+(eq[8].length!=0?'<a class='+(eq[8][5]?'it1':'it0')+' onmouseout=y() onmouseover=tt(8,0)>'+eq[8][0]+'</a>':'')+'<tr><td colspan=7 style=border-left:0><span class=g>'+go+' Gold</span> | '+iv.length+' Items<br><ul>';
		ftxt='';
		i=iv.length-1;
		if(i>=0){
			do{
				tpi+='<li><a class='+(iv[i][5]?'it1':'it0')+' onmouseout=y() onmouseover=tt('+i+',1)>'+iv[i][0]+'</a> (<a onclick=qe('+i+')>'+(iv[i][2]?'Unequip':'Equip</a>, <a onclick="if(confirm(\'Drop '+iv[i][0]+'?\')){iv.splice('+i+',1);dc(0)}">Drop</a>')+'</a>)'
			}while(i--)
		}else{
			tpi+='<li>Your backpack is empty.'
		}
		tpi+='</ul></table>'
	}
	if(tpi!=''){
		z('c').innerHTML=tpi;
		tpi=''
	}
}
function ff(j,i){
	if(!j||mc>=sp[i]){
		ak[3]=i;
		var ii=[
			[him,mrem,dmi,dmx,crm],
			[hir,mrer,dri,drx,crr],
			[his,mres,dsi,dsx,crs]
		][i];
		if(j){
			mc-=sp[i];
			ii[2]+=sp[i]+1;
			ii[3]+=sp[i]+1;
			ak[4]='<span class=it1>'+['Charged Magical Strike','Magically Enhanced Arrow','Pure Magic Bolt'][ak[3]]+'</span>'
		}else{
			ak[4]=eq[7].length!=0?eq[7][0]:'Fist'
		}
		if(mspd>spd){
			if(ffm()){
				ffp(ii)
			}
		}else if(ffp(ii)){
			ak[1]=-2
		}else{
			ffm()
		}
		i=0;
		dc(1)
	}
}
function ffm(){
	ii=[
		[mhim,rem],
		[mhir,rer],
		[mhis,res]
	][mwt];
	ii[0]+=ml>lv?4*(ml-lv):-4*(lv-ml);
	if(ii[0]<5){
		ii[0]=5
	}
	if(Math.random()<ii[0]/100){
		if(Math.random()>ii[1]/100){
			i=mdi+(mdi<mdx?n(mdx-mdi+1):0);
			ak[6]=Math.random()<mcr/100;
			if(i<0){
				i=0
			}else if(ak[6]){
				i*=2
			}
			ak[1]=i;
			hc=hc-i
		}else{
			ak[1]=-3
		}
	}else{
		ak[1]=-2
	}
	ii=0;
	return hc>0
}
function ffp(i){
	i[0]+=lv>ml?4*(lv-ml):-4*(ml-lv);
	if(i[0]<5){
		i[0]=5
	}
	if(Math.random()<i[0]/100){
		if(Math.random()>i[1]/100){
			var j=i[2]+(i[2]<i[3]?+n(i[3]-i[2]+1):0);
			ak[5]=Math.random()<i[4]/100;
			if(j<0){
				j=0
			}else if(ak[5]){
				j*=2
			}
			ak[0]=j;
			mhc=mhc-j;
			return mhc<1
		}else{
			ak[0]=-3
		}
	}else{
		ak[0]=-2
	}
	return 0
}
function fi(i,j,q0,q1){
	var ii=0,
	jq=-1,
	js=-1;
	do{
		js=[0,1,2,9,10,11,12,13,14,15,16,17,18][n(13)]
	}while(js==q1);
	ii=im(js,0);
	if(q1>-1){
		if(ii>0){
			ii*=-1
		}
		q0=Math.abs(q0)
	}
	if(i==5||i==8){
		jq=0
	}else if(i==2){
		jq=1
	}else if(i==17){
		jq=2
	}
	iv.push([
		[
			'Belt',
			'Blue Tunic',
			'Crossbow',
			'Green Tunic',
			'Hat',
			'Hedgehog Thingy',
			'Hiking Boots',
			'Iron Shield',
			'Iron Sword',
			'Leather Gloves',
			'Mittens',
			'Necklace',
			'Pajama Pants',
			'Red Tunic',
			'Sandals',
			'Scarf',
			'Spectacles',
			'Wand',
			'Wooden Shield'
		][i],
		[4,2,7,2,0,7,6,8,7,3,3,1,5,2,6,1,0,7,8][i],
		0,
		ii,
		js,
		j,
		q0,
		q1,
		jq
	]);
	iv.sort(function(a,b){
		if(a[0]<b[0]){
			return 1
		}else{
			return a[0]>b[0]?-1:0
		}
	})
}
function im(i,b){
	if(i==13){
		i=n(50)-24+b*5
	}else if(i==3||i==5||i==7){
		i=n(2)-1+b
	}else{
		i=(i==4||i==6||i==8)?n(5)-2+b:n(8)-3+b*2
	}
	return(i==0?1:i)
}
function nf(i){
	if(i>1){
		crm=crr=crs=go=mc=mf=mm=rem=rer=res=xp=0;
		dmi=dmx=dri=drx=dsi=dsx=dx=lv=skp=1;
		hc=hm=10;
		him=hir=his=60;
		pd=w('pdd');
		nm=w('pn').replace(/[\<\>\(\)\$|]/g,'');
		sk=[0,0,0,0,0,0,0,0,0];
		sp=[0,0,0];
		spd=50
	}
	if(i>0){
		eq=[[],[],[],[],[],[],[],[],[]];
		iv.length=0;
		q=-1;
		ql0=[
			['The Dark Alley','Villagers have reported strange sounds coming from an alley behind the Shop & Inn. They want you to check it out!','Investigate the Sounds!','No way, too sketch.','The villagers thank you for your bravery.',[0,1,3]],
			['Rats, Rats!','Not surprisingly, the owner of the Shop & Inn has reported a rat problem in the cellar. It is bad for business!',' Exterminate them!','Eek! Rats! Ahh!','The innkeeper thanks you for your service.',[2]],
			['Drunken Brawl','A villager has had too much to drink at the Shop & Inn and is causing a ruckus. You have been called in to knock out this ruffian and resume normal Shop & Inn operations!','Barfight!','I\'m not drunk enough for this.','The drunken villager is unconscious and will probably have a massive hangover in the morning. The Shop & Inn owner thanks you for your help.',[3]]
		];
		ql2=[
			['Beach Cleanup','Some revolting slime that has congealed nearby is distracting you from your thoughtful gaze.','Attack the Sludge!','Continue your Stroll.','The beach is cleaner already.',[4]]
		];
		ca(0)
	}else{
		z('c').innerHTML='<div style=text-align:center><div style="border-right:8px solid #222;display:inline-block;text-align:left"><div class=c><a href=/><b>RPG.txt</b></a></div><hr><div class=c><input id=pn style=width:300px value='+nm+'><ul><li><a onclick=nf(2)>Town on the Nothern Coast</a></ul></div><hr><div class=c><ul><li><a onclick=svl()>Load Character</a></ul></div></div><div style="display:inline-block;text-align:left;vertical-align:top"><div class=c><input disabled size=3 style=border:0 value=ESC>Character Sheet</div><hr><div class=c><select id=pdd><option value=0>Delete</option><option value=1>Lose Gold</option></select>OnDeath</div><hr><div class=c><a onclick="if(confirm(\'Reset settings?\')){z(\'pdd\').value=0}">Reset Settings</a></div></div>'
	}
	ui=!i
}
function n(i){
	return Math.floor(Math.random()*i)
}
function qe(i){
	if(!iv[i][2]){
		var j=iv.length-1;
		do{
			if(iv[j][1]==iv[i][1]){
				if(iv[j][2]){
					if(iv[j][7]>-1){
						stm(iv[j][7],-iv[j][6])
					}
					stm(iv[j][4],-iv[j][3]);
					iv[j][2]=0
				}
			}
		}while(j--);
		if(iv[i][1]==7&&iv[i][8]>-1){
			aty=iv[i][8]
		}
		if(iv[i][7]>-1){
			stm(iv[i][7],iv[i][6])
		}
		stm(iv[i][4],iv[i][3]);
		eq[iv[i][1]]=iv[i]
	}else{
		if(iv[i][1]==7){
			aty=0
		}
		if(iv[i][7]>-1){
			stm(iv[i][7],-iv[i][6])
		}
		stm(iv[i][4],-iv[i][3]);
		eq[iv[i][1]]=[]
	}
	iv[i][2]=!iv[i][2];
	if(hc>hm){
		hc=hm
	}
	if(mc>mm){
		mc=mm
	}
	dc(0)
}
function ra(){
	if(mspd>spd){
		if(n(99)>mspd-spd){
			dc(0)
		}else{
			ffm();
			ak[0]=-4;
			dc(1);
			return 0
		}
	}else{
		dc(0)
	}
	return 1
}
function rf(i){
	if(i<0){
		go+=Math.abs(i-1)
	}else{
		var j=(Math.random()-mib)*100<(10*(1+mf/100)),
		j2=n(19);
		fi(i,j,im(j2,1),j?j2:-1)
	}
	if(dx&&ml>=lv){
		xp+=1;
		if(xp>=lv*10){
			xp=0;
			lv+=1;
			hm+=1;
			mm+=1;
			skp+=1
		}
	}
	if(q>-1){
		if(ai==2){
			ql2.length=0
		}else if(ai==0){
			ql0.splice(q,1)
		}
		q=-1
	}
	dc(0)
}
function sf(i){
	if(i==-1){
		var j=iv.length-1;
		do{
			if(iv[j][2]){
				if(iv[j][7]>-1){
					stm(iv[j][7],-iv[j][6])
				}
				stm(iv[j][4],-iv[j][3]);
				eq[iv[j][1]].length=0
			}
			go+=iv[j][5]?5:1
		}while(j--);
		iv.length=0
	}else{
		if(iv[i][2]){
			if(iv[i][7]>-1){
				stm(iv[i][7],-iv[i][6])
			}
			stm(iv[i][4],-iv[i][3]);
			eq[iv[i][1]].length=0
		}
		go+=iv[i][5]?5:1;
		iv.splice(i,1)
	}
	if(hc>hm){
		hc=hm
	}
	if(mc>mm){
		mc=mm
	}
	dc(2)
}
function sfk(ii,i,j,q){
	if(skp>=ii){
		skp-=ii;
		sk[i]+=q;
		stm(j,q);
		if(ii>0){
			dc(3)
		}
	}
}
function stm(i,j){
	i=parseInt(i);
	if(i==0){
		crm+=j
	}else if(i==1){
		crr+=j
	}else if(i==2){
		crs+=j
	}else if(i==3){
		dmi+=j
	}else if(i==4){
		dmx+=j
	}else if(i==5){
		dri+=j
	}else if(i==6){
		drx+=j
	}else if(i==7){
		dsi+=j
	}else if(i==8){
		dsx+=j
	}else if(i==9){
		hm+=j;
		if(hc>hm){
			hc=hm
		}
	}else if(i==10){
		him+=j
	}else if(i==11){
		hir+=j
	}else if(i==12){
		his+=j
	}else if(i==13){
		mf+=j
	}else if(i==14){
		mm+=j;
		if(mc>mm){
			mc=mm
		}
	}else if(i==15){
		rem+=j
	}else if(i==16){
		rer+=j
	}else if(i==17){
		res+=j
	}else if(i==18){
		spd+=j
	}
}
function stmm(i,j){
	ak=[-1,-1,-1,-1,'',-1,-1];
	i=(j==0?[
		[10,0,0,1,3,4,0,'Zombie',65,0,0,15,15,5,30,'Club',0,2,0,2],
		[10,0,0,1,2,3,0,'Skeleton',70,0,0,20,20,5,55,'Claws',0,2,0,2],
		[10,0,0,1,1,2,0,'Rat',75,0,0,10,10,10,45,'Claws',0,0,0,1],
		[10,0,0,1,3,4,0,'Drunken Villager',60,0,0,5,5,5,24,'Fists',0,0,1,2],
		[5,0,0,2,3,5,0,'Putrid Sludge',70,0,0,5,15,0,30,'Appendage',0,0,0,3],
		[25,0,1,3,5,5,5,'Bandit Archer',0,90,0,10,25,5,100,'Bow',.01,0,0,4],
		[10,0,0,2,6,10,0,'Crypt Guardian',95,0,0,20,20,20,36,'Arm that is an Axe',.01,1,0,4],
		[15,0,2,1,8,5,15,'Rotting Mage',0,0,75,10,15,25,42,'Bolt of Negative Energy',.01,2,0,4]
	][i]:j);
	mcr=i[0];
	mdi=i[3];
	mdx=i[4];
	mhc=i[5];
	mhm=i[5];
	mib=i[16];
	ml=i[19];
	mmc=i[6];
	mmm=i[6];
	mnl=i[18];
	mnm=i[7];
	mhim=i[8];
	mhir=i[9];
	mhis=i[10];
	mrem=i[11];
	mrer=i[12];
	mres=i[13];
	mspd=i[14];
	mty=i[17];
	mw=i[15];
	mwt=i[2];

	j=n(5);
	if(j==0){
		mpf='giant ';
		mhc*=2;
		mhm*=2
	}else if(j==1){
		mpf='intelligent ';
		mmc*=3;
		mmm*=3;
		mhis+=10
	}else if(j==2){
		mpf='lucky ';
		mhim+=5;
		mhir+=5;
		mhis+=5;
		mrem+=5;
		mrer+=5;
		mres+=5;
		mcr+=5
	}else if(j==3){
		mpf='muscular ';
		mdi=Math.ceil(mdi*1.1);
		mdx=Math.ceil(mdx*1.1)
	}else{
		mpf='powerful ';
		ml+=1
	}

	i=0
}
function sv(){
	prompt('Save this string:',nm+','+lv+','+dx+','+xp+','+hc+','+hm+','+mc+','+mm+','+spd+','+dmi+','+dmx+','+him+','+crm+','+rem+','+dri+','+drx+','+hir+','+crr+','+rer+','+dsi+','+dsx+','+his+','+crs+','+res+','+go+','+pd+','+ai+','+skp+','+sk[0]+','+sk[1]+','+sk[2]+','+sk[3]+','+sk[4]+','+sk[5]+','+sk[6]+','+sk[7]+','+sk[8]+','+sp[0]+','+sp[1]+','+sp[2])
}
function svl(){
	j=prompt('Enter savefile string:','').split(',');
	i=j.length-1;
	if(i>=0){
		do{
			j[i]=parseFloat(j[i]);
			i--
		}while(i>0);
		nm=j[0];
		lv=j[1];
		dx=j[2];
		xp=j[3];
		hc=j[4];
		hm=j[5];
		mc=j[6];
		mm=j[7];
		spd=j[8];
		dmi=j[9];
		dmx=j[10];
		him=j[11];
		crm=j[12];
		rem=j[13];
		dri=j[14];
		drx=j[15];
		hir=j[16];
		crr=j[17];
		rer=j[18];
		dsi=j[19];
		dsx=j[20];
		his=j[21];
		crs=j[22];
		res=j[23];
		go=j[24];
		pd=j[25];
		ai=j[26];
		skp=j[27];
		i=8;
		do{
			sk[i]=parseInt(j[28+i])
		}while(i--);
		i=2;
		do{
			sp[i]=parseInt(j[36+i])
		}while(i--)
	}
	nf(1)
}
function th(i){
	return[
		'% Chance to Crit with Melee Attacks',
		'% Chance to Crit with Ranged Attacks',
		'% Chance to Crit with Spells',
		' Minimum Melee Damage',
		' Maximum Melee Damage',
		' Minimum Ranged Damage',
		' Maximum Ranged Damage',
		' Minimum Spell Damage',
		' Maximum Spell Damage',
		' Life',
		'% Chance to Hit with Melee Attacks',
		'% Chance to Hit with Ranged Attacks',
		'% Chance to Hit with Spells',
		'% Chance to Find Magical Items',
		' Mana',
		'% Chance to Resist Melee Attacks',
		'% Chance to Resist Ranged Attacks',
		'% Chance to Resist Spells',
		' Speed'
	][i]
}
function tt(j,jj){
	if(jj){
		tpi='<b class='+(iv[j][5]?'it1':'it0')+'>'+iv[j][0]+'</b>'+(iv[j][1]==7?'<br>'+['Melee','Ranged','Spell'][iv[j][8]]+' Damage':'')+'<br>'+(iv[j][3]<0?'':'+')+iv[j][3]+th(iv[j][4]);
		if(iv[j][5]){
			tpi+='<br>'+(iv[j][6]<0?'':'+')+iv[j][6]+th(iv[j][7])
		}
	}else{
		tpi='<b class='+(eq[j][5]?'it1':'it0')+'>'+eq[j][0]+'</b>'+(eq[j][1]==7?'<br>'+['Melee','Ranged','Spell'][eq[j][8]]+' Damage':'')+'<br>'+(eq[j][3]<0?'':'+')+eq[j][3]+th(eq[j][4]);
		if(eq[j][5]){
			tpi+='<br>'+(eq[j][6]<0?'':'+')+eq[j][6]+th(eq[j][7])
		}
	}
	z('tlt').innerHTML=tpi;
	z('tlt').style.display='block'
}
function w(i){
	return z(i).value
}
function y(){
	z('tlt').style.display='none'
}
function z(i){
	return document.getElementById(i)
}
var ad=an=ftxt=mnm=mw=tpi='',
ai=aty=bc=cl=crm=crr=crs=dmi=dmx=dri=drx=dsi=dsx=eq=xp=go=hc=hm=him=hir=his=i=lv=mc=mf=ml=mm=pd=rem=rer=res=skp=spd=mcr=mdi=mdx=mhc=mhm=mmm=mnl=mhim=mhir=mhis=mpf=mrem=mrer=mres=mspd=mty=mwt=0,
ak=[-1,-1,-1,-1,'',-1,-1],
ap=iv=ql=ql0=sk=sp=[],
co=dx=ui=1,
nm='edit_playero',
mmc=q=-1;
nf(0);
window.onbeforeunload=function(){
	if(hc>0){
		return'Did you save your progress?'
	}
};
window.onkeydown=function(e){
	i=window.event?event:e;
	i=i.charCode?i.charCode:i.keyCode;
	if(i==27){
		if(hc>0){
			if(mmc>-1){
				if(ra()){
					mmc=-1;
					dc(0)
				}
			}else{
				q=-1;
				dc(0)
			}
		}else{
			nf(0)
		}
	}else if(ui&&i==13){
		nf(2)
	}
};
window.onmousemove=function(e){
	z('tlt').style.left=(e.pageX+15)+'px';
	z('tlt').style.top=(e.pageY+15)+'px'
}
