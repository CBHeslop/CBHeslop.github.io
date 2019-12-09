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
       echo "Modify $prodInfo[invName] ";} 
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
                echo "Modify $prodInfo[invName] ";} 
                elseif(isset($invName)) { echo $invName; }?>Modifying Product</h1>

            <?php
                if (isset($message)) {
                    echo $message;
                }
            ?>

            <form method="post" action="/acme/products/index.php">
                Name <br>
                <input name="invName" id="invName" type="text" <?php if(isset($invName)){echo "value='$invName'";}  elseif(isset($prodInfo['invName'])) {
                    echo "value='$prodInfo[invName]'"; }?> required><br>
                Description <br>
                <input name="invDescription" id="invDescription" type="text" <?php if(isset($invDescription)){echo "value='$invDescription'";}  elseif(isset($prodInfo['invDescription'])) {
                    echo "value='$prodInfo[invDescription]'"; }?> required><br>
                Image <br>
                <input name="invImage" id="invImage" type="text" <?php if(isset($invImage)){echo "value='$invImage'";}  elseif(isset($prodInfo['invImage'])) {
                    echo "value='$prodInfo[invImage]'"; }?> required><br>
                Thumbnail <br>
                <input name="invThumbnail" id="invThumbnail" type="text" <?php if(isset($invThumbnail)){echo "value='$invThumbnail'";}  elseif(isset($prodInfo['invThumbnail'])) {
                    echo "value='$prodInfo[invThumbnail]'"; }?> required><br>
                Price <br>
                <input name="invPrice" id="invPrice" type="number" <?php if(isset($invPrice)){echo "value='$invPrice'";}  elseif(isset($prodInfo['invPrice'])) {
                    echo "value='$prodInfo[invPrice]'"; }?> required><br>
                Stock <br>
                <input name="invStock" id="invStock" type="number" <?php if(isset($invStock)){echo "value='$invStock'";}  elseif(isset($prodInfo['invStock'])) {
                    echo "value='$prodInfo[invStock]'"; }?> required><br>
                Size <br>
                <input name="invSize" id="invSize" type="number" <?php if(isset($invSize)){echo "value='$invSize'";}  elseif(isset($prodInfo['invSize'])) {
                    echo "value='$prodInfo[invSize]'"; }?> required><br>
                Weight <br>
                <input name="invWeight" id="invWeight" type="number" <?php if(isset($invWeight)){echo "value='$invWeight'";}  elseif(isset($prodInfo['invWeight'])) {
                    echo "value='$prodInfo[invWeight]'"; }?> required><br>
                Location <br>
                <input name="invLocation" id="invLocation" type="text" <?php if(isset($invLocation)){echo "value='$invLocation'";}  elseif(isset($prodInfo['invLocation'])) {
                    echo "value='$prodInfo[invLocation]'"; }?> required><br>
                Category <br>
                <?php 
                    echo $catList;   
                ?> <br>
                Vendor <br>
                <input name="invVendor" id="invVendor" type="text" <?php if(isset($invVendor)){echo "value='$invVendor'";}  elseif(isset($prodInfo['invVendor'])) {
                    echo "value='$prodInfo[invVendor]'"; }?> required><br>
                Style <br>
                <input name="invStyle" id="invStyle" type="text" <?php if(isset($invStyle)){echo "value='$invStyle'";}  elseif(isset($prodInfo['invStyle'])) {
                    echo "value='$prodInfo[invStyle]'"; }?> required><br>

                <input class="submitButton" type="submit" name="submit" value="Update Product"><br>
                <input type="hidden" name="action" value="updateProd">
                <input type="hidden" name="invId" value="<?php if(isset($prodInfo['invId'])){ echo $prodInfo['invId'];} 
                    elseif(isset($invId)){ echo $invId; } ?>">
            </form>

        </main>

        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/acme/common/footer.php'; ?>
        </footer>

    </div>
    
</body>
</html>