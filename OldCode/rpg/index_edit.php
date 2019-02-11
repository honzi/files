<?php ob_start();
date_default_timezone_set('America/Los_Angeles');
$d=mysqli_connect('localhost','','','');
if(mysqli_connect_errno()){
	header('Location:e.php?e=1&i=2');
}
if(isset($_COOKIE['u'])){
	if($s=mysqli_prepare($d,'SELECT u,m FROM a WHERE s=? LIMIT 1')){
		mysqli_stmt_bind_param($s,'s',htmlspecialchars(trim($_COOKIE['u'])));
		mysqli_stmt_execute($s);
		mysqli_stmt_bind_result($s,$u,$p);
		mysqli_stmt_fetch($s);
		$h=array('u'=>$u,'m'=>$p);
		mysqli_stmt_close($s);
	}else{$h='';}
}else{$h='';}
function f($t,$x,$p){
	echo'<!doctype html><html><head><meta http-equiv="content-type" content="text/html;charset=utf-8"/><title>'.$t.'</title><link rel="stylesheet" type="text/css" href="http://iterami.com/c.css"/><link rel="icon" href="http://iterami.com/i/h.ico"/><body><'.($p!=''?'div class="h"><a href="http://iterami.com"><img src="http://iterami.com/i/house.png" alt="iterami" class="i"/>iterami</a>/'.$x.'<span style="float:right"><a href="http://account.iterami.com"><img src="http://iterami.com/i/status_online.png" alt="" class="i"/>'.$p['u'].'</a> | <a href="http://account.iterami.com/?logout"><img src="http://iterami.com/i/door_out.png" alt="logout" class="i"/>logout</a></span></div>':'form action="http://account.iterami.com/index.php" method="post"><div class="h"><a href="http://iterami.com"><img src="http://iterami.com/i/house.png" alt="iterami" class="i"/>iterami</a>/'.$x.'<span style="float:right"><input name="u" maxlength="16" type="text"/><input name="p" maxlength="32" type="password"/><input name="1" type="submit" value="login"/></span></div></form>');
}
if(isset($_GET['char'])&&is_numeric($_GET['char'])){
	$id=htmlspecialchars(trim($_GET['char']));
	if(isset($_GET['spells'])&&$h!=''){
		if($s2=mysqli_prepare($d,'SELECT n,o FROM c WHERE i=? LIMIT 1')){
			mysqli_stmt_bind_param($s2,'d',$id);
			mysqli_stmt_execute($s2);
			mysqli_stmt_store_result($s2);
			if(mysqli_stmt_num_rows($s2)==1){
				mysqli_stmt_bind_result($s2,$n,$o);
				mysqli_stmt_fetch($s2);
				mysqli_stmt_close($s2);
				if($h['u']==$o){
					f('spellbook','<a href="/">rpg</a>/character/<a href="?char='.$id.'">'.$n.'</a>/spellbook',$h);
					echo'<div class="d">you have no spells</div><div class="d">there are no spells currently available to learn.</div>';
				}else{header('Location:/');}
			}else{header('Location:/');}
		}else{header('Location:/');}
	}else if(isset($_GET['passive'])&&$h!=''){
		if($s2=mysqli_prepare($d,'SELECT n,o FROM c WHERE i=? LIMIT 1')){
			mysqli_stmt_bind_param($s2,'d',$id);
			mysqli_stmt_execute($s2);
			mysqli_stmt_store_result($s2);
			if(mysqli_stmt_num_rows($s2)==1){
				mysqli_stmt_bind_result($s2,$n,$o);
				mysqli_stmt_fetch($s2);
				mysqli_stmt_close($s2);
				if($h['u']==$o){
					f('passive','<a href="/">rpg</a>/character/<a href="?char='.$id.'">'.$n.'</a>/passive',$h);
					echo'<div class="d">you have no passive skills</div><div class="d">there are no passive skills currently available to learn.</div>';
				}else{header('Location:/');}
			}else{header('Location:/');}
		}else{header('Location:/');}
	}else if($s2=mysqli_prepare($d,'SELECT o,n,d,h,hr,m,mr,t,c,dn,dm,b,bd,dr,rc,rf,rg,rm,rp,rh,rs,rl,q,qd FROM c WHERE i=? LIMIT 1')){
		mysqli_stmt_bind_param($s2,'d',$id);
		mysqli_stmt_execute($s2);
		mysqli_stmt_store_result($s2);
		if(mysqli_stmt_num_rows($s2)==1){
			mysqli_stmt_bind_result($s2,$o,$n,$e,$he,$hr,$m,$mr,$t,$c,$dn,$dm,$b,$bd,$dr,$rc,$rf,$rg,$rm,$rp,$rh,$rs,$rl,$quest,$diff);
			mysqli_stmt_fetch($s2);
			mysqli_stmt_close($s2);
			f($n,'<a href="/">rpg</a>/character/'.$n,$h);
			echo'<div class="d"><table style="border:0"><tr><td style="vertical-align:top;width:15em"><img src="http://iterami.com/i/status_online.png" alt="" class="i"/><a>'.$n.'</a>';
			if($e!=0){echo'<br/><span style="color:#777">created on</span> '.date('Y-m-d H:i:s',$e);}
			echo'<br/>
			<span style="color:#777">health:</span> <b>'.$he.'</b> <span class="j">(<b>'.$hr.'</b> restored per turn)</span><br/>
			<span style="color:#777">mana:</span> <b>'.$m.'</b> <span class="j">(<b>'.$mr.'</b> restored per turn)</span><br/><br/>

			<span style="color:#777">chance to hit:</span> <b>'.$t.'%</b><br/>
			<span style="color:#777">chance of double damage:</span> <b>'.$c.'%</b><br/>
			<span style="color:#777">damage:</span> <b>'.$dn.' - '.$dm.'</b><br/><br/>

			<span style="color:#777">chance to block: '.(($bd>0)?'<b>'.$b.'%</b>':'-').'</span><br/>
			<span style="color:#777">block damage mitigation: '.(($bd>0)?'<b>'.$bd.'%</b>':'-').'</span><br/>
			<span style="color:#777">damage taken reduced by:</span> <b>'.$dr.'%</b><br/><br/>
			resistances:<br/>';
			$j=1;
			if($rc!=0){
				echo'<span style="color:#555">cold resistance:</span> <b>'.$rc.'%</b><br/>';
				$j=0;
			}
			if($rf!=0){
				echo'<span style="color:#555">fire resistance:</span> <b>'.$rf.'%</b><br/>';
				$j=0;
			}
			if($rl!=0){
				echo'<span style="color:#555">light resistance:</span> <b>'.$rl.'%</b><br/>';
				$j=0;
			}
			if($rm!=0){
				echo'<span style="color:#555">magic resistance:</span> <b>'.$rm.'%</b><br/>';
				$j=0;
			}
			if($rp!=0){
				echo'<span style="color:#555">poison resistance:</span> <b>'.$rp.'%</b><br/>';
				$j=0;
			}
			if($rh!=0){
				echo'<span style="color:#555">shadow resistance:</span> <b>'.$sh.'%</b><br/>';
				$j=0;
			}
			if($rs!=0){
				echo'<span style="color:#555">shock resistance:</span> <b>'.$rs.'%</b><br/>';
				$j=0;
			}
			if($rl!=0){
				echo'<span style="color:#555">sleep resistance:</span> <b>'.$rl.'%</b><br/>';
				$j=0;
			}
			if($j){
				$j=0;
				echo'<span style="color:#555">none</span><br/>';
			}
			if($s3=mysqli_prepare($d,'SELECT s,v,r FROM b WHERE o=? ORDER BY r DESC')){
				mysqli_stmt_bind_param($s3,'s',$o);
				mysqli_stmt_execute($s3);
				mysqli_stmt_bind_result($s3,$stat,$value,$remain);
				$stats=array('health','mana','min damage','max damage','block damage mitigation','asleep');
				$buffs=array();
				$debuffs=array();
				while(mysqli_stmt_fetch($s3)){
					if($value>0){
						$buffs[]='+<b>'.$value.'</b> <span style="color:#555">to <b>'.$stats[$stat].'</b> for <b>'.$remain.'</b> turns</span><br/>';
					}else{
						if($value!=0){
							$str='<b>'.$value.'</b> <span style="color:#555">to <b>'.$stats[$stat].'</b> for <b>'.$remain.'</b> turns</span><br/>';
						}else{
							$str='<b>'.$stats[$stat].'</b> <span style="color:#555">for <b>'.$remain.'</b> turns</span><br/>';
						}
						$debuffs[]=$str;
					}
				}
				mysqli_stmt_close($s3);
				echo'<br/>buffs:<br/>';
				if(count($buffs)>0){
					foreach($buffs as $j){
						echo$j;
					}
				}else{
					echo'<span style="color:#555">none</span><br/>';
				}
				echo'<br/>debuffs:<br/>';
				if(count($debuffs)>0){
					foreach($debuffs as $j){
						echo$j;
					}
				}else{
					echo'<span style="color:#555">none</span>';
				}
			}else{
				echo'<br/>buffs:<br/><span style="color:#555">none</span><br/><br/>debuffs:<br/><span style="color:#555">none</span>';
			}
			echo'</td>
			<td style="vertical-align:top;width:15em">
			<img src="http://iterami.com/i/shield.png" alt="" class="i"/><b>equipment</b><br/>
			<span style="color:#777">
			head:<br/>
			neck:<br/>
			torso:<br/>
			back:<br/>
			hands:<br/>
			finger1:<br/>
			finger2:<br/>
			held1:<br/>
			held2:<br/>
			waist:<br/>
			legs:<br/>
			feet:</span>';
			if($h['u']==$o){
				echo'<br/><br/>
				<img src="http://iterami.com/i/folder.png" alt="" class="i"/><b>inventory</b><br/>
				<span style="color:#555">your inventory is empty</span>
				</td>
				<td style="vertical-align:top">
				<img src="http://iterami.com/i/map.png" alt="" class="i"/><b>quest log</b><br/>';
				if($quest!='-'){
					$quests=array('mine'=>'the mines','forest'=>'liriodendron forest','mountains'=>'blumberg mountains','tower'=>'mage tower');
					echo'<a href="adventure.php">continue adventure</a><br/><span style="color:#777">current adventure:</span> <b>'.$quests[$quest].'</b><br/><span style="color:#777">difficulty:</span> <b>'.$diff.'</b>';
				}else{
					echo'<a href="adventure.php">start new adventure</a>';
				}
				echo'<br/><a href="http://store.iterami.com/?char=0">visit healer &amp; merchant</a><br/><br/><a href="?char='.$id.'&spells">';
			}else{
				echo'<td style="vertical-align:top"><b>';
			}
			echo'<img src="http://iterami.com/i/wand.png" alt="" class="i"/>spellbook'.(($h['u']==$o)?'</a>':'</b>').'<br/>
			<span style="color:#555">none</span><br/><br/>
			'.(($h['u']==$o)?'<a href="?char='.$id.'&passive">':'<b>').'<img src="http://iterami.com/i/chart_organisation.png" alt="" class="i"/>passive skills'.(($h['u']==$o)?'</a>':'</b>').'<br/>
			<span style="color:#555">none</span>
			</td>
			</tr>
			</table></div>';
		}else{header('Location:/');}
	}else{header('Location:/');}
}/*else if(isset($_GET['item'])){
	$t=array('flip-flops','shirt','shorts');
	if(is_numeric($_GET['item'])){
		$i=$_GET['item'];
		if(array_key_exists($i,$t)){
			f($t[$i],'<a href="/">rpg</a>/<a href="?item">items</a>/'.$t[$i],$h);
			echo'<div class="d"><a>'.$t[$i].'</a></div>';
		}else{$j=1;}
	}else{$j=1;}
	if($j){
		f('item database','<a href="/">rpg</a>/items',$h);
		foreach($t as $i=>$v){
			echo'<div class="d"><a href="?item='.$i.'">'.$v.'</a></div>';
		}
	}
}*/else{
	if(isset($_GET['new'])&&$h!=''){
		if(isset($_POST['1'])){
			$u=htmlspecialchars(strip_tags(trim($_POST['u'])));
			if($s2=mysqli_prepare($d,'SELECT i FROM c WHERE n=? OR u=?')){
				mysqli_stmt_bind_param($s2,'ss',$u,$h['u']);
				mysqli_stmt_execute($s2);
				mysqli_stmt_store_result($s2);
				if(mysqli_stmt_num_rows($s2)==0){
					mysqli_stmt_close($s2);
					if($s2=mysqli_prepare($d,"INSERT INTO a(n,d,u)VALUES(?,?,?)")){
						mysqli_stmt_bind_param($s2,'ss',$u,time(),$h['u']);
						mysqli_execute($s2);
					}
				}
			}
			header('Location:?new');
		}else{
			f('new character','<a href="/">rpg</a>/character/new character',$h);
			echo'<form action="?new" method="post"><div class="d">character name (16 characters max)<br/><input name="u" maxlength="16" size="16" type="text"/></div><div class="d"><input name="1" type="submit" value="create character"/></div></form>';
		}
	}else{
		if($h!=''){
			f('your saved rpg characters','rpg',$h);
			if($s2=mysqli_prepare($d,'SELECT i,n FROM c WHERE o=? ORDER BY n ASC')){
				mysqli_stmt_bind_param($s2,'s',$h['u']);
				mysqli_stmt_execute($s2);
				mysqli_stmt_store_result($s2);
				$nc=mysqli_stmt_num_rows($s2);
				echo'<div class="d">'.$nc.'/1 of your characters listed (1 character max for now)';
				if($nc>0){
					mysqli_stmt_bind_result($s2,$id,$n);
					while(mysqli_stmt_fetch($s2)){
						echo'</div><div class="d"><a href="?char='.$id.'">'.$n.'</a></div>';
					}
				}else{echo' | <a href="?new"><img src="http://iterami.com/i/add.png" alt="" class="i"/>new character</a></div><div class="d">you currently have no saved rpg characters</div>';}
			}else{echo'<div class="d">error fetching rpg characters</div>';}
		}else{
			f('rpg','rpg',$h);
			echo'<div class="d">you must be logged in to play as or create characters, but not view them ;)<br/>the rpg project is still being programmed, but you can check out this <a href="?char=0">sample profile</a> to get a taste of what\'s to come!</div>';
		}
	}
}
echo'&copy;2011';
if($h==''||$h['m']<2){
	echo'<br/>[ad]';
}
