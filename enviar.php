<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $email = $_POST["email"];
  $mensaje = $_POST["mensaje"];

  $destinatario = "hookhardy@gmail.com";  // ← CAMBIA ESTO
  $asunto = "Nuevo mensaje desde el sitio web";

  $contenido = "Nombre: $nombre\nCorreo: $email\nMensaje:\n$mensaje";
  $cabeceras = "From: $email";

  if (mail($destinatario, $asunto, $contenido, $cabeceras)) {
    echo "✅ Mensaje enviado correctamente.";
  } else {
    echo "❌ Error al enviar el mensaje.";
  }
}
?>
