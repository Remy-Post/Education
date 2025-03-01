<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>History</h1>
    </header>
    <main>
        <?php 
            include ("connect.php");
            $sql = "SELECT * FROM customer";
            $result = mysqli_query($conn, $sql);

            if (mysqli_num_rows($result) <= 0) {
                echo ("0 results --> Error");
            } else {
                while ($row = mysqli_fetch_array($result)){ ?>
                  <p><?php echo($row["username"] . "\t" . $row["password"]);?></p>
                  <?php
                }
            }
        ?>
    </main>
    
</body>
</html>