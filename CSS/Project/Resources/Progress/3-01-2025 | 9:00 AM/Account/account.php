<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account</title>
    <link rel="stylesheet" href="../Normalize.css">
    <link rel="stylesheet" href="./account.css">
    <script src="./account.js" defer></script>
</head>
<body>
    <header>
        <!--Title-->
        <div>
            <h1>Accounts</h1>
        </div>
        <!--Home-->
        <nav>
            <a href="../Main/index.html" target="_self"><img src="../Images/Home.png" alt="Home"></div></a>
            <!--Account-->
            <a href="./account.html" target="_self"><img src="../Images/Account.png" alt="Account" width="90px" height="auto"></a>
            <!--About US-->
            <a href="../About Us/aboutUs.html" target="_self"><img src="../Images/aboutUs.png" alt="About Us" width="90px" height="auto"></a>
            <!--Shopping-->
            <a href="../Shopping/shopping.html" target="_self"><img src="../Images/Shopping.png" alt="Services"></a>
        </nav>
    </header>
    <main>
        <!--Create An Account-->
        <section>
            <!--Title-->
            <h3>Create An Account</h3>
            <!--Form-->
            <form action="../php/process.php" method="post">
                <!--Username-->
                <input type="text" name="username" id="username" placeholder="Username" required>
                <!--Password-->
                <input type="password" name="password" id="password" placeholder="Password" required>
                <!--Create-->
                <input type="submit" name="submit">
            </form>
        </section>
        <!--Log In-->
        <section>
            <!--Title-->
            <h3>Log In</h3>
            <!--Form-->
            <form action="../php/process.php" method="post">
                <!--Username-->
                <section>
                    <label for="username">Username:</label>
                    <input type="text" name="username" id="username">
                </section>
                <!--Password-->
                <section>
                    <label for="password">Password:</label>
                    <input type="text" name="password" id="password">
                </section>
                <!--Log In-->
                <section>
                    <input type="submit" name="submit">
                </section>
            </form>
        </section>
    </main>
    <footer>
        <!--Socials-->
        <div>
            <!--TikTok-->
            <a href="" target="_blank"><img src="../Images/tiktok.png" alt="TikTok"></a>
            <!--X-->
            <a href="" target="_blank"><img src="../Images/x.png" alt="X"></a>
            <!--Insta-->
            <a href="" target="_blank"><img src="../Images/insta.png" alt="Instagram"></a>
            <!--Facebook-->
            <a href="" target="_blank"><img src="../Images/shopping.png" alt="Facebook "></a>
        </div>
        <div>
            <button> start </button>
            <div>
                <h5>Username: username1</h5>
                <div>
                    <div>
                        <h6>Time</h6>
                        <p>DateTime</p>
                    </div>
                    <div>
                        <h6>Followers</h6>
                        <p>1000</p>
                    </div>
                </div>
            </div>
            <button> end </button>
        </div>
        <div>
            <h3>Recent Acccounts</h3>
            <?php 
                include ("../php/connect.php");

                $sql = "SELECT DISTINCT username FROM customer ORDER BY id DESC LIMIT 5";
                $result = mysqli_query($conn, $sql);
                while ($row = mysqli_fetch_array($result)) 
                    echo('<p>' . $row["username"] . "</p>");
            ?>
        </div>
    </footer>
</body>
</html>