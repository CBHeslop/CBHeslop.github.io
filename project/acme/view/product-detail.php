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
            <h1><?php echo $categoryName; ?> Product Information</h1>

            <h3>Product reviews can be seen at the bottom of the page.</h3>

            <?php if(isset($message)){
                echo $message; } 
            ?>

            <?php if(isset($prodInfoDisplay)){ 
                echo $prodInfoDisplay; } 
            ?>

            <hr>

            <?php if(isset($imageInfoDisplay)){ 
                echo $imageInfoDisplay; } 
            ?>

            <hr>

            <h2>Customer Reviews</h2>

            <form method="post" action="/acme/reviews/index.php">
                <h3>Review the product </h3>
                <?php if(isset($messageError)){
                    echo $messageError; } 
                ?>
                Screen Name: <br>
                <input name="screenName" id="screenName" type="text" <?php if(isset($screenName)){echo "value='$screenName'";}  ?> required><br>
                Review: <br>
                <input name="reviewText" id="reviewText" type="text" <?php if(isset($reviewText)){echo "value='$reviewText'";}  ?> required><br>
                
                <input class="submitButton" type="submit" name="submit" id="regbtn" value="Submit Review">
                <input type="hidden" name="action" value="addReview">
                <input type="hidden" name="invId" value="invId">
            </form>

            <?php if(isset($reviewInfoDisplay)){ 
                echo $reviewInfoDisplay; } 
            ?>



        </main>

        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/acme/common/footer.php'; ?>
        </footer>

    </div>
    
</body>
</html>