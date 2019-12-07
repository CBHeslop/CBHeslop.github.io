<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="This page shows acme roadrunner menu food."/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Acme</title>
    <link rel="stylesheet" href="/acme/css/main.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="/acme/css/small.css?v=<?php echo time(); ?>">
    <link href="https://fonts.googleapis.com/css?family=Mansalva&display=swap" rel="stylesheet">
</head>
<body>

    <div class="mainContainer">

        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/acme/common/header.php'; ?>
        </header>

        <main>
            <div class="loginAccount">
                <h1>Sign In</h1>

                <?php
                if (isset($message)) {
                echo $message;
                }
                ?>

                <form method="post" action="/acme/accounts/">
                    Email: <br>
                    <input name="clientEmail" id="clientEmail" type="email" <?php if(isset($clientEmail)){echo "value='$clientEmail'";}  ?> required><br>
                    Password: <br>
                    <input name="clientPassword" id="clientPassword" type="password" required 
                    pattern="(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"><br>
                    <span>Passwords must be at least 8 characters and contain at least 1 number, 1 capital letter and 1 special character</span><br>

                    <input class="submitButton" type="submit" name="submit" value="login"><br>
                    <input type="hidden" name="action" value="Login">
                </form>
                <a class="createAccount" href="/acme/accounts/index.php?action=registration">create an account</a>
            </div>
        </main>

        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/acme/common/footer.php'; ?>
        </footer>

    </div>
    
</body>
</html>