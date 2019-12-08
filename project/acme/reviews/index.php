<?php

// Reviews Controller

    // Create or access a Session 
    session_start();

    // Get the database connection file
    require_once '../library/connections.php';
    // Get the acme model for use as needed
    require_once '../model/acme-model.php';
    // Get the accounts model
    require_once '../model/accounts-model.php';
    // Get the products model
    require_once '../model/products-model.php';
     // Get the functions library
     require_once '../library/functions.php';
     // Get the uploads library
     require_once '../model/uploads-model.php';
     // Get the reviews library
     require_once '../model/reviews-model.php';

    // Get the array of categories
    $categories = getCategories();

    // Naviagtion
    $navList = dynaNavigation();

   
    $action = filter_input(INPUT_POST, 'action');
    if ($action == NULL){
     $action = filter_input(INPUT_GET, 'action');
    }


    switch ($action) {
        case 'addReview':
            // Filter and store the data
            $invId = filter_input(INPUT_POST, 'invId', FILTER_SANITIZE_NUMBER_INT);
            $reviewText = filter_input(INPUT_POST, 'reviewText', FILTER_SANITIZE_STRING);
            


             // Check for missing data
             if(empty($reviewText) || (empty($invId))){
                $messageError = "<p>Please provide information for all empty form fields.</p>";
                header ("Location: /acme/products/?action=itemInformation&invId=$invId");
                exit;
            }

            // Send the data to the model
            $regOutcome = newReview($invId, $_SESSION['clientData']['clientId'], $reviewText);

            // Check and report the result
            if($regOutcome){
                $messageError = "<p class='notice'>New review has been added.</p>";
                header ("Location: /acme/products/?action=itemInformation&invId=$invId");
                exit;
            } 
             
            break;

        case 'editReviewView':
            // Filter and store the data
            $reviewId = filter_input(INPUT_GET, 'reviewId', FILTER_SANITIZE_NUMBER_INT);

            $review = getReview($reviewId);

            if (count($review < 1)) {
                $messageError = "<p>Sorry, there are no reviews.</p>";
            }

            include ' ../view/review-edit.php';
            break;

        case 'reviewUpdate':
            // Filter and store the data
            $reviewId = filter_input(INPUT_GET, 'reviewId', FILTER_SANITIZE_NUMBER_INT);
            $reviewText = filter_input(INPUT_POST, 'reviewText', FILTER_SANITIZE_STRING);

            if(empty($reviewText)){
                $messageError = "<p>Please provide information for all empty form fields.</p>";
                header ("Location: /acme/products/?action=itemInformation&invId=$invId");
                exit;
            }

            $reviewUpdate = updateReview($reviewId, $reviewText);

            if($reviewUpdate){
                $messageError = "<p class='notice'>New updated review has been added.</p>";
            } else {
                $messageError = "<p class='notice'>An error was found while updating.</p>";
            } 

            include '../view/admin.php';
            break;

        case 'deleteReviewView':
            // Filter and store the data
            $reviewId = filter_input(INPUT_GET, 'reviewId', FILTER_SANITIZE_NUMBER_INT);

            $review = getReview($clientId);

            if (count($review < 1)) {
                $messageError = "<p>Sorry, there are no reviews.</p>";
            }

            include ' ../view/review-delete.php';
            
            break;

        case 'reviewDelete':
            // Filter and store data
            $reviewId = filter_input(INPUT_GET, 'reviewId', FILTER_SANITIZE_NUMBER_INT);
             
            $review = deleteReview($reviewId);

            if ($review) {
                $messageError = "<p>The review was successfully deleted.</p>";
            } else {
                $messageError = "<p>The review was not successfully deleted.</p>";
            }

            include ' ../view/admin.php';

            break;

        default:
            $clientData = getClient($_SESSION['clientData']['clientEmail']);
                if ($_SESSION['loggedin'] && $clientData['clientLevel'] >= 1) {
                    header("Location: /acme/view/admin.php");
                } else {
                    header("Location: /acme/index.php");
                }
    }

?>