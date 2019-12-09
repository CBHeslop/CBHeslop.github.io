<?php
    $clientData = getClient($_SESSION['clientData']['clientEmail']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="This page shows acme roadrunner menu food."/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Acme</title>
    <link rel="stylesheet" href="/acme/css/main.css">
    <link rel="stylesheet" href="/acme/css/small.css">
    <link href="https://fonts.googleapis.com/css?family=Mansalva&display=swap" rel="stylesheet">
</head>
<body>

    <div class="mainContainer">

        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/acme/common/header.php'; ?>
        </header>

        <main>
            <h1>
                <?php
                    echo $clientData['clientFirstname'] . " " . $clientData['clientLastname'] . " " . "is logged in"; 
                ?>
            </h1>

            <?php
                if (isset($message)) {
                    echo $message;
                }
            ?>

            <ul>
                <li>
                    <?php
                        echo "First Name: " . $clientData['clientFirstname'];
                    ?>
                </li>
                <li>
                    <?php
                        echo "Last Name: " . $clientData['clientLastname'];
                    ?>
                </li>
                <li>
                    <?php
                        echo "Email: " . $clientData['clientEmail'];
                    ?>
                </li>
                <!--<li>
                    <?php
                        echo "User Level: " . $clientData['clientLevel'];
                    ?>
                </li>-->
            </ul>
            
            <?php

                $linkAddress = "/acme/products";
                $userLinkAddress = "/acme/accounts?action=updateAccount";
                if ($clientData['clientLevel'] > 1) {
                    echo "<a href='".$userLinkAddress."'>Update Users Account</a><br>";
                    echo "<h2>Administrative Functions</h2>";
                    echo "<p>Use link below to manage products</p>";
                
                    echo "<a href='".$linkAddress."'>Product Management</a>";
                } else if ($clientData['clientLevel']<= 1) {
                    echo "<a href='".$userLinkAddress."'>Update Users Account</a>";
                }
            ?>

            <h2>Manage your product reviews.</h2>

            <?php
                if (isset($reviewInfoDisplay)) {
                    echo $reviewInfoDisplay;
                }
            ?>
            

        </main>

        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/acme/common/footer.php'; ?>
        </footer>

    </div>
    
</body>
</html>