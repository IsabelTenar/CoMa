<?php
if(isset($_POST['name'])) $name= $_POST['name'];
else $name = "";

if(isset($_POST['pass'])) $pass= $_POST['pass'];
else $pass = "";


class MiBD extends SQLite3
{
	function __construct()
	{
		$this->open('users.s3db');
	}
}

if ($pass == "" || $name == ""){
	echo "Falta un campo!";
}
else {
	$bd = new MiBD();
	$result = $bd->query("SELECT * FROM Usuarios WHERE Nombre = '" . $name ."';");
	$row = array();
	$res = $result->fetchArray(SQLITE3_ASSOC);
	if ($res['Nombre'] == NULL){
		echo "USUARIO INCORRECTO!";
	}
	else {
		$row['0']['Nombre'] = $res['Nombre'];
		//echo $row['0']['Nombre'];
		//echo "<br/>"; 
		if ($pass == $res['Pass']){
			echo "ACCESO AUTORIZADO!";
		}
		else {
			echo "CONTRASEÑA INCORRECTA!";
		}
	}
	
	$bd->close();
}

echo <<<_END
<html>
<LINK REL="Stylesheet" HREF="Login.css" TYPE="text/css">
</html>
_END;
?>