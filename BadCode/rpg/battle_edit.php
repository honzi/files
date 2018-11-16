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
				f('battle','<a href="/">rpg</a>/battle',$h['u']);
				echo'<div class="d">battle goes here</div>&copy;2011';
				if($h==''||$h['m']<2){
					echo'<br/>[ad]';
				}
			}else{header('Location:/');}
		}else{header('Location:/');}
	}else{header('Location:/');}
}else{header('Location:/');}
?>
