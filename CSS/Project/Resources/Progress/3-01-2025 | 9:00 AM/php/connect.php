<?php 
$hostname = "localhost";
$username = "root";
$password = "";
$database = "project";

$conn = mysqli_connect($hostname, $username, $password, $database);

if (!$conn){
    die("Something went wrong");
}
?>