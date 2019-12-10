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
            <?php if(isset($message)){ 
                    echo $message; } 
            ?>

            <h1><?php echo $review['invName']; ?> Delete Review</h1>

            

            <form method="post" action="/acme/reviews/index.php">
               
                Description <br>
                <h3>Reviewed on <?php echo $review['reviewDate']; ?></h3>
                <h3>Description <?php echo $review['reviewText']; ?></h3>
                

                <input class="submitButton" type="submit" name="submit" value="Delete Review"><br>
                <input type="hidden" name="action" value="reviewDelete">

                <input type="hidden" name="reviewId" value="<?php echo $reviewId ?>">
                <?php echo $review['reviewId']; ?>
            </form>

        

           
            <?php
                if (!isset($_SESSION['loggedin'])) { 
                    $login = "/acme/accounts/index.php?action=login";
                    echo "<a href='".$login."'>Please Login to edit a review</a>"; 
                }
            ?>

            

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