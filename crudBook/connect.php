<?php
$dbName = "blist_db";
$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$con = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName);
if ($con) {
    echo ("<h1>Database Connection successed.</h1>");
}else{
    die("<h1>Database connection failed.</h1>");
}
?>