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

    $screenName = filter_input(INPUT_POST, 'screenName', FILTER_SANITIZE_STRING);
    $reviewText = filter_input(INPUT_POST, 'reviewText', FILTER_SANITIZE_STRING);
    $clientId = filter_input(INPUT_POST, 'clientId', FILTER_SANITIZE_NUMBER_INT);
    

    $action = filter_input(INPUT_POST, 'action');
    if ($action == NULL){
     $action = filter_input(INPUT_GET, 'action');
    }


    switch ($action) {
        case 'addReview':
            // Filter and store the data
            $invId = filter_input(INPUT_POST, 'invId', FILTER_SANITIZE_NUMBER_INT);
            $clientId = filter_input(INPUT_POST, 'clientId', FILTER_SANITIZE_NUMBER_INT);
            $reviewText = filter_input(INPUT_POST, 'reviewText', FILTER_SANITIZE_STRING);
            $clientEmail = filter_input(INPUT_POST, 'clientEmail', FILTER_SANITIZE_EMAIL);
            
            $clientData = getClient($_SESSION['clientData']['clientEmail']);
            $clientId = $clientData['clientId'];

             // Check for missing data
             if(empty($reviewText) || (empty($invId))){
                $message = '<p>Please provide information for all empty form fields.</p>';
                header ("Location: /acme/products/?action=itemInformation&invId=$invId");
                exit;
            }

            // Send the data to the model

            //echo $reviewText;
            //echo $screenName;
           
            $regOutcome = newReview($reviewText, $invId, $clientId);
            //$reviewInfo = reviewInfo($invId);

            // Check and report the result
            if($regOutcome){
                $message = "<p class='notice'>New review has been added.</p>";
                header ("Location: /acme/products/?action=itemInformation&invId=$invId");
            } 

        break;
        case 'editReview':
            include '../view/add-product.php';
        break;
        case 'deleteReview':
            include '../view/add-product.php';
        break;
        case 'reviewUpdate':
            include '../view/add-product.php';
        break;
        case 'reviewDelete':
            // Filter and store data
            $categoryName = filter_input(INPUT_POST, 'categoryName', FILTER_SANITIZE_STRING);

            // Check for missing data
            if(empty($categoryName)){
                $message = '<p>Please provide information for all empty form fields.</p>';
                include '../view/add-category.php';
                exit; 
            }

            // Send the data to the model
            $regOutcome = newCategory($categoryName);

            // Check and report the result
            if($regOutcome === 1){
                include '../view/product-management.php';
                exit;
            } else {
                $message = "<p>Provide a name for the new category.</p>";
                include '../view/add-category.php';
                exit;
            }
        break;

        default:
            $categoryList = buildCategoryList($categories);

            include '../view/product-management.php';
    }

?>