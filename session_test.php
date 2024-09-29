<?php
session_start();

// Oturumda bir değer ayarla
$_SESSION['test'] = 'Merhaba Dünya';

// Çıkış
echo 'Session Test: ' . $_SESSION['test'];
?>