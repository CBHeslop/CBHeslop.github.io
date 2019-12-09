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
    <title><?php if(isset($prodInfo['invName'])){ 
       echo "Delete $prodInfo[invName] ";} 
       elseif(isset($invName)) { echo $invName; }?> 
       | Acme, Inc</title>
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
            <h1><?php if(isset($prodInfo['invName'])){ 
                echo "Delete $prodInfo[invName] ";} 
                elseif(isset($invName)) { echo $invName; }?>Delete Product</h1>

            <?php
                if (isset($message)) {
                    echo $message;
                }
            ?>

            <p>Confirm Product Deletion. The delete is permanent.</p>

            <form method="post" action="/acme/products/index.php">
                Name <br>
                <input name="invName" id="invName" type="text" readonly <?php if(isset($prodInfo['invName'])) {echo "value='$prodInfo[invName]'"; }?> required><br>
                Description <br>
                <input name="invDescription" id="invDescription" type="text" readonly <?php if(isset($prodInfo['invDescription'])) {echo $prodInfo['invDescription']; } ?> required><br>

                <input class="submitButton" type="submit" name="submit" value="Delete Product"><br>
                <input type="hidden" name="action" value="deleteProd">
                <input type="hidden" name="invId" value="<?php if(isset($prodInfo['invId'])){ echo $prodInfo['invId'];} ?>">
            </form>

        </main>

        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/acme/common/footer.php'; ?>
        </footer>

    </div>
    
</body>
</html>