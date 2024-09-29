<?php
session_start(); // Session başlat

// Tüm oturum değişkenlerini temizle
$_SESSION = array();

// Oturum çerezini de temizle
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

// Oturumu tamamen yok et
session_destroy();

echo "Tüm oturum verileri başarıyla temizlendi.";
?>
