<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asisngment 1</title>
    <link rel="stylesheet" href="./CSS/fonts.css">
    <link rel="stylesheet" href="./CSS/Normalize.css">
    <link rel="stylesheet" href="./CSS/styles.css">

                                    <!--Switch back for database interactivity-->
</head>
<body>
    <header>
        <div>
           <h1>&nbsp;Work&nbsp;</h1>
        </div>
        <div>
            <h2>&emsp;This is a business portal to track various things</h2>
        </div>
        <nav>
            <menu>
                <li><a href="./index.html">Form</a></li>
                <li><a href="./add.php">Confirmation</a></li>
            </menu>
        </nav>
    </header>
    <main>
            <form method="POST" action="add.php" >
                <div>
                    <label  for="F_nmae">First Name</label>
                    <input type="text" name="F_name" placeholder="First Name">
                </div>
                <div>
                    <label for="L_name">Last Name</label>
                    <input type="text" name="L_name" placeholder="Last Name">
                </div>
                <div>
                    <label for="department">Department</label>
                    <input type="text" name="department" placeholder="Department">
                </div>
                <div>
                    <label for="position">Position</label>
                    <input type="text" name="position" placeholder="Position">
                </div>
                <div>
                    <label for="hours">Hours</label>
                    <input type="text" name="hours" placeholder="Hours">
                </div>
                <input type="submit" name="sent">
            </form>
    </main>
    <footer>
        <p>Files: <a href="https://github.com/Remy-Post/Education/tree/main/PHP/Assignments/Assignment%201" target="_blank">Github</a> - <a href="https://github.com/Remy-Post/Education/tree/main/PHP/Assignments/Assignment%201" target="_blank">Education</a></p>
        <p>Normalize: <a href="github.com/necolas/normalize.css" target="_blank">file</a></p>
        <p>Confirmation: <a href="./add.php" target="_self">Link</a></p>
    </footer>
</body>
</html>