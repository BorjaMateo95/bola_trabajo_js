<?php 

function mandaCorreo($to, $subject, $msg){
    $fromEmail = "orbitbml@gmail.com";
    $fromName = "Bolsa Trabajo";
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From:  ' . $fromName . ' <' . $fromEmail .'>' . " \r\n" .
                'Reply-To: '.  $fromEmail . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

   mail($to, $subject, $msg ,$headers);
}

?>