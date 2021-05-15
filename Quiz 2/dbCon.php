<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "form";

#connection
$dbcon = mysqli_connect ($servername, $username, $password, $dbname);

#check connection
if ($dbcon->connect_error) {
    die("Connection failed: " . $dbcon->connect_error);
}

?>