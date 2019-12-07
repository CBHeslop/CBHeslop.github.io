<?php
    $clientData = getClient($_SESSION['clientData']['clientEmail']);
    if ($_SESSION['loggedin'] && $clientData['clientLevel'] > 1) {
    
    } else {
        header("Location: /acme/index.php");
    }
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
            <h1>Add Category</h1>

            <?php
                if (isset($message)) {
                    echo $message;
                }
            ?>

            <h3>Add a new category of products below.</h3>


            <form method="post" action="/acme/products/index.php">
                New Category Name <br>
                <input name="categoryName" id="categoryName" type="text" required><br>
                
                <input class="submitButton" type="submit" name="submit" value="Add Category"><br>
                <input type="hidden" name="action" value="addCat">
            </form>

        </main>

        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/acme/common/footer.php'; ?>
        </footer>

    </div>
    
</body>
</html>