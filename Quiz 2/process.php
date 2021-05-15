<?php
    session_start();
    require_once('dbCon.php');
    
    if(isset($_POST['login'])) {
        if(empty($_POST['username']) or empty($_POST['password'])) {
            header("location: index.php? Empty= Please Fill in the Blank");
        } else {
            $query = "SELECT * FROM login WHERE username='".$_POST['username']."' and password='".$_POST['password']."'";
            $result = mysqli_query($dbcon, $query);
            
            if(mysqli_fetch_assoc($result)) {
                $_SESSION['username']=$_POST['username'];
                header("location: welcome.php");
            } else {
                header("location: index.php? Invalid = Please Enter Correct Username and Password");
            }
        }
    } else {
        echo "Not Working Now";
    }
?>