<?php 
	//Llamar campos
	$nombre = $_POST['nombre'];
	$correo = $_POST['correo'];
	$telefono = $_POST['telefono'];
	$mensaje = $_POST['mensaje'];
	

	//Datos correo
	$destinatario = "ventas@nuecesxoxoteco.com";
	$asunto = "Nuevo correo de www.nuecesxoxoteco.com";

	$card = "De: $nombre \n";
	$card .="Correo: $correo \n";
	$card .="Teléfono: $telefono \n";
	$card .="Mensaje: $mensaje";

	//Enviar Msg
	mail($destinatario, $asunto, $card);
	header("Location: index.html");
	

 ?>