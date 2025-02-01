<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="./CSS/add.css" rel="stylesheet" type="text/css">
</head>
<body>
    <header>
        <h1>Confirmation</h1>
        <nav>
            <menu>
                <?php echo "<li><a href='./index.php'>Form</a></li>" ?>
                <li><a href="./add.php">Confirmation</a></li>
            </menu>
        </nav>
    </header>
    <main><?php
        include_once ('validation.php');
        include_once ('cud.php');
        $cud = new cud();

        $validate = new Validate();

        if (isset($_POST['sent'])){
            echo "<p>Form has been submitted</p>";
            $F_name = $cud->sanitize($_POST['F_name']);
            $L_name = $cud->sanitize($_POST['L_name']);
            $department = $cud->sanitize($_POST['department']);
            $position = $cud->sanitize($_POST['position']);
            $hours = $cud->sanitize($_POST['hours']);

            $msg = $validate->VcheckEmpty($_POST, array('F_name', 'L_name', 'department', 'position', 'hours'));
            $checkHours = $validate->Vint($_POST['hours']);


            if($msg != null){
                echo "<p>$msg</p>";

                echo "<a href='javascript:self.history.back();'> Go Back</a>";
            }elseif (!$checkHours) {
                echo "<p>Please provide the correct hours</p>";}

            else{
                $result = $cud->execute("INSERT INTO employees(F_name, L_name, department, position, hours) VALUES ('$F_name', '$L_name', '$department', '$position', '$hours')");

                echo "<p>inject has been successful</p>";
            }
            
        }
        else {
            echo "<p>Fill out the form</p>";
        }
        ?>  
    </main>
    <footer>
        <?php echo "<a href='javascript:self.history.back();'>Form</a>"; ?>
        
</body>
</html>
