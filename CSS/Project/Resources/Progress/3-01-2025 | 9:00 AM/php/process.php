<?php 
    include ("connect.php");

    if(isset($_POST["submit"])){
        $username = sanitize($_POST['username']);
        $password = sanitize($_POST['password']);

        $sql = "INSERT INTO customer (username, password) VALUES ('$username', '$password')";
    
        if (mysqli_query($conn, $sql)){
            echo ("New record created successfully");
        } else {
            die("Something went wrong");
        }
    }

    function sanitize($text) : string {
        global $conn;
        return mysqli_real_escape_string($conn, $text); }
?>