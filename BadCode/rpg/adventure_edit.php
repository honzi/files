<?php if(isset($_COOKIE['u'])){
	date_default_timezone_set('America/Los_Angeles');
	$d=mysqli_connect('localhost','','','');
	if(mysqli_connect_errno()){
		header('Location:/');
	}
	if($s=mysqli_prepare($d,'SELECT u,m FROM a WHERE s=? LIMIT 1')){
		mysqli_stmt_bind_param($s,'s',htmlspecialchars(trim($_COOKIE['u'])));
		mysqli_stmt_execute($s);
		mysqli_stmt_bind_result($s,$u,$p);
		mysqli_stmt_fetch($s);
		$h=array('u'=>$u,'m'=>$p);
		mysqli_stmt_close($s);
		if($s2=mysqli_prepare($d,'SELECT i,n,hc,mc,q,qd,bt FROM c WHERE o=? LIMIT 1')){
			mysqli_stmt_bind_param($s2,'s',$h['u']);
			mysqli_stmt_execute($s2);
			mysqli_stmt_store_result($s2);
			if(mysqli_stmt_num_rows($s2)==1){
				mysqli_stmt_bind_result($s2,$id,$n,$hc,$mc,$q,$qd,$bt);
				mysqli_stmt_fetch($s2);
				mysqli_stmt_close($s2);
				if(isset($_GET['abandon'])){
					if($s3=mysqli_prepare($d,'UPDATE c SET hc=h,mc=m,q=?,qd=0,bt=0 WHERE o=? LIMIT 1')){
						$j='-';
						mysqli_stmt_bind_param($s3,'ss',$j,$h['u']);
						mysqli_stmt_execute($s3);
						header('Location:adventure.php');
					}
				}
				function f($t,$x,$p){
					echo'<!doctype html><html><head><meta http-equiv="content-type" content="text/html;charset=utf-8"/><title>'.$t.'</title><link rel="stylesheet" type="text/css" href="http://iterami.com/c.css"/><link rel="icon" href="http://iterami.com/i/h.ico"/><body><div class="h"><a href="http://iterami.com"><img src="http://iterami.com/i/house.png" alt="iterami" class="i"/>iterami</a>/'.$x.'<span style="float:right"><a href="http://account.iterami.com"><img src="http://iterami.com/i/status_online.png" alt="" class="i"/>'.$p.'</a> | <a href="?logout"><img src="http://iterami.com/i/door_out.png" alt="logout" class="i"/>logout</a></span></div>';
				}
				$j=0;
				if($q!='-'){
					$quests=array('mine'=>'<b>the mines</b><br/>a dark and ancient mine that is rumored to reach the very core of this planet.','forest'=>'<b>liriodendron forest</b><br/>a forest of the most beautiful trees you have ever witnessed.','mountains'=>'<b>blumberg mountains</b><br/>the highest moutains in all the land.','tower'=>'<b>mage tower</b><br/>an ancient tower filled with magical tomes and experiments.');
					f($q,'<a href="/">rpg</a>/adventure',$h['u']);
					echo'<div class="d"><a href="/?char='.$id.'"><img src="http://iterami.com/i/arrow_left.png" alt="" class="i"/>back to character</a> (adventure progress is already saved)</div><div class="d">'.$quests[$q].'<br/>difficulty: <b>'.$qd.'</b><br/><br/><b>a skeleton appears!</b> what do you do? <a href="battle.php">battle it!</a></div><div class="d"><a href="?abandon"><img src="http://iterami.com/i/cross.png" alt="" class="i"/>abandon adventure</a></div>';
				}else{
					$quests=array('mines','forest','mountains','tower');
					if(isset($_GET['z'])&&in_array($_GET['z'],$quests)){
						if($s3=mysqli_prepare($d,'UPDATE c SET hc=h,mc=m,q=?,qd=1,bt=0 WHERE o=? LIMIT 1')){
							mysqli_stmt_bind_param($s3,'ss',htmlspecialchars($_GET['z']),$h['u']);
							mysqli_stmt_execute($s3);
							header('Location:adventure.php');
						}
						header('Location:adventure.php');
					}
					f('choose your adventure','<a href="/">rpg</a>/adventure',$h['u']);
					echo'<div class="d"><a href="/?char='.$id.'"><img src="http://iterami.com/i/arrow_left.png" alt="" class="i"/>back to character</a></div><div class="d">you may choose a quest from those listed below...</div><div class="d"><b>adventure to...</b><br/><a href="?z=mountains">blumberg mountains</a><br/><a href="?z=forest">liriodendron forest</a><br/><a href="?z=tower">mage tower</a><br/><a href="?z=mines">the mines</a></div>';
				}
				echo'&copy;2011';
				if($h==''||$h['m']<2){
					echo'<br/>[ad]';
				}
			}else{header('Location:/');}
		}else{header('Location:/');}
	}else{header('Location:/');}
}else{header('Location:/');}
?>
