<?php
    $clientData = getClient($_SESSION['clientData']['clientEmail']);
    if ($_SESSION['loggedin'] && $clientData['clientLevel'] > 1) {
    
    } else {
        header("Location: /acme/index.php");
    }

    if (isset($_SESSION['message'])) {
        $message = $_SESSION['message'];
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
            <h1>Product Management</h1>

            <ul>
                <li><a href="/acme/products/index.php?action=addCategory">Add a new category</a></li>
                <li><a href="/acme/products/index.php?action=addProduct">Add a new product</a></li>
            </ul>

            <?php
                if (isset($message)) { 
                    echo $message; 
                } 
                if (isset($categoryList)) { 
                    echo '<h2>Products By Category</h2>'; 
                    echo '<p>Choose a category to see those products</p>'; 
                    echo $categoryList; 
                }
            ?>

            <noscript>
                <p><strong>JavaScript Must Be Enabled to Use this Page.</strong></p>
            </noscript>

            <table id="productsDisplay"></table>

        </main>

        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/acme/common/footer.php'; ?>
        </footer>

    </div>
    
    <script src="../js/products.js"></script>
</body>
</html>
<?php unset($_SESSION['message']); ?>