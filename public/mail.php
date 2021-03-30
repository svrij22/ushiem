<?php
    echo $_POST['voornaam'];
    echo $_POST['achternaam'];
    echo $_POST['email'];
    echo $_POST['message'];

    $leensmail = 'ushiem@svrij.nl';
    $to = 'svrij22@gmail.com';

    $subject = 'USHIEM.NL - Bericht van ' . $_POST['voornaam'] . ' ' . $_POST['achternaam'];
    $headers = 'From:' . $leensmail . "\r\n" .
        'Reply-To: ' . $leensmail . "\r\n" .
        'MIME-Version: 1.0' . "\r\n" .
        'Content-type: text/html; charset=iso-8859-1' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Compose a simple HTML email message
    $message = '<html><body>';
    $message .= '<h3 style="color:#5e5e5e;">Een bericht van: ' . $_POST['voornaam'] . ' ' . $_POST['achternaam'] . '</h1>';
    $message .= '<h3 style="color:#5e5e5e;">Email: ' . $_POST['email'] . '</h1>';
    $message .= '<p style="color:#424242;font-size:14px;">' . $_POST['message'] . '</p>';
    $message .= '</body></html>';

    if(mail($to, $subject, $message, $headers)){
        echo 'Your mail has been sent successfully.';
    } else{
        echo 'Unable to send email. Please try again.';
    }
?>