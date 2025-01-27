<?php
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $department = $_POST['department'];
    $hours = int($_POST['hours']);

    if ($hours % 4 != 0) {
        echo "You did not select the correct number of hours.";
        exit();
    }

    $conn = new mysqli('localhost', 'root', '', 'employees');

    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into employee(first_name, last_name, department, hours) values(?, ?, ?, ?)");
        $stmt->bind_param("sssi", $first_name, $last_name, $department, $hours);
        $stmt->execute();
        echo "Employee Added Successfully...";
        $stmt->close();
        $conn->close();
    }
?>