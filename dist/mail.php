<?php
    echo $_POST['voornaam'];
    echo $_POST['achternaam'];
    echo $_POST['email'];
    echo $_POST['message'];
    
    $to      = 'svrij22@gmail.com';
    $subject = 'the subject';
    $message = 'hello';
    $headers = 'From: ushiem@svrij.nl' . "\r\n" .
        'Reply-To: ushiem@svrij.nl' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
?>