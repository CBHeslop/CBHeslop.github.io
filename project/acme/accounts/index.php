<?php

// Accounts Controller

    // Create or access a Session 
    session_start();

    // Get the database connection file
    require_once '../library/connections.php';
    // Get the acme model for use as needed
    require_once '../model/acme-model.php';
    // Get the accounts model
    require_once '../model/accounts-model.php';
    // Get the functions library
    require_once '../library/functions.php';
    // Get the reviews library
    require_once '../model/reviews-model.php';

    // Get the array of categories
    $categories = getCategories();

    // var_dump is used to test and display info to screen
    //var_dump($categories);
    //exit;

    $navList = dynaNavigation();

    // tests and displays the nav list to the screen
    //echo $navList;
    //exit;

    $clientFirstName = filter_input(INPUT_POST, 'clientFirstName', FILTER_SANITIZE_STRING);
    $clientLastName = filter_input(INPUT_POST, 'clientLastName' , FILTER_SANITIZE_STRING);
    $clientEmail = filter_input(INPUT_POST, 'clientEmail', FILTER_SANITIZE_EMAIL);
    $clientPassword = filter_input(INPUT_POST, 'clientPassword', FILTER_SANITIZE_STRING);
    $action = filter_input(INPUT_POST, 'action');
    if ($action == NULL){
     $action = filter_input(INPUT_GET, 'action');
    }

    $clientEmail = checkEmail($clientEmail);
    $checkPassword = checkPassword($clientPassword);

    // Check if the firstname cookie exists, get its value
    if(isset($_COOKIE['firstname'])){
        $cookieFirstname = filter_input(INPUT_COOKIE, 'firstname', FILTER_SANITIZE_STRING);
      }

    switch ($action){
        case 'login':
            include '../view/login.php';
         break;

        case 'registration':
            include '../view/registration.php';
        break;

        case 'Login':
            $clientEmail = checkEmail($clientEmail);
            $clientPassword = filter_input(INPUT_POST, 'clientPassword', FILTER_SANITIZE_STRING);
            $passwordCheck = checkPassword($clientPassword);
                
            // Run basic checks, return if errors
            if (empty($clientEmail) || empty($checkPassword)) {
                $message = '<p class="notice">Please provide a valid email address and password.</p>';
                include '../view/login.php';
                exit; 
            }

            // A valid password exists, proceed with the login process
            // Query the client data based on the email address
            $clientData = getClient($clientEmail);
            // Compare the password just submitted against
            // the hashed password for the matching client
            $hashCheck = password_verify($clientPassword, $clientData['clientPassword']);
            // If the hashes don't match create an error
            // and return to the login view
            if (!$hashCheck) {
            $message = '<p class="notice">Please check your password and try again.</p>';
            include '../view/login.php';
            exit; 
            }

            // A valid user exists, log them in
            $_SESSION['loggedin'] = TRUE;
            // Remove the password from the array
            // the array_pop function removes the last
            // element from an array
            array_pop($clientData);
            // Store the array into the session
            $_SESSION['clientData'] = $clientData;
            // Send them to the admin view
            setcookie('firstname', $clientData['clientFirstname'], strtotime('+1 year'), '/');
            include '../view/admin.php';
            exit;
        break;

        case 'register':
            // Filter and store the data
            $clientFirstname = filter_input(INPUT_POST, 'clientFirstname', FILTER_SANITIZE_STRING);
            $clientLastname = filter_input(INPUT_POST, 'clientLastname', FILTER_SANITIZE_STRING);
            $clientEmail = filter_input(INPUT_POST, 'clientEmail', FILTER_SANITIZE_EMAIL);
            $clientPassword = filter_input(INPUT_POST, 'clientPassword', FILTER_SANITIZE_STRING);

            // Check for existing email
            $emailCheck = existingEmailCheck($clientEmail);
            if ($emailCheck) {
                $message = '<p>That email already exists. Do you want to login instead?</p>';
                include '../view/login.php';
                exit;
            }

            // Check for missing data
            if(empty($clientFirstname) || empty($clientLastname) || empty($clientEmail) || empty($checkPassword)){
                $message = '<p>Please provide information for all empty form fields.</p>';
                include '../view/registration.php';
                exit; 
            }

            // Hash the checked password
            $hashedPassword = password_hash($clientPassword, PASSWORD_DEFAULT);

            // Send the data to the model
            $regOutcome = regClient($clientFirstname, $clientLastname, $clientEmail, $hashedPassword);


            // Check and report the result
            if($regOutcome === 1){
                setcookie('firstname', $clientFirstname, strtotime('+1 year'), '/');
                $message = "<p>Thanks for registering $clientFirstname. Please use your email and password to login.</p>";
                include '../view/login.php';
                exit;
            } else {
                $message = "<p>Sorry $clientFirstname, but the registration failed. Please try again.</p>";
                include '../view/registration.php';
                exit;
            }
        break;

        case 'logout':
            setcookie('firstname', '', strtotime('-1 year'), '/');
            session_destroy();
            header("Location: /acme/index.php");
            
        break;

        case 'updateAccount':
            // Filter and store the data
            $clientFirstname = filter_input(INPUT_POST, 'clientFirstname', FILTER_SANITIZE_STRING);
            $clientLastname = filter_input(INPUT_POST, 'clientLastname', FILTER_SANITIZE_STRING);
            $clientEmail = filter_input(INPUT_POST, 'clientEmail', FILTER_SANITIZE_EMAIL);
            $clientId = filter_input(INPUT_POST, 'clientId', FILTER_SANITIZE_NUMBER_INT);
            
            // Check for missing data
            if(empty($clientFirstname) || empty($clientLastname) || empty($clientEmail)){
                $message = '<p>Please provide information for all empty form fields.</p>';
                include '../view/client-update.php';
                exit; 
            }

            // Send the data to the model
            $regOutcome = updateClient($clientFirstname, $clientLastname, $clientEmail, $clientId);

            // Check and report the result
            if($regOutcome){
                setcookie('firstname', $clientFirstname, strtotime('+1 year'), '/');
                $message = "<p>Thanks $clientFirstname for updating your information.</p>";
                include '../view/admin.php';
                exit;
            } else {
                $message = "<p>Sorry $clientFirstname, but the update failed. Please try again.</p>";
                include '../view/client-update.php';
                exit;
            }
        break;

        case 'updatePassword':
            // Filter and store the data
            $clientPassword = filter_input(INPUT_POST, 'clientPassword', FILTER_SANITIZE_STRING);
            $clientId = filter_input(INPUT_POST, 'clientId', FILTER_SANITIZE_NUMBER_INT);

            // Check for missing data
            if(empty($checkPassword)){
                $message = '<p>Please provide information for all empty form fields.</p>';
                include '../view/client-update.php';
                exit; 
            }

            // Hash the checked password
            $hashedPassword = password_hash($clientPassword, PASSWORD_DEFAULT);

            // Send the data to the model
            $regOutcome = updatePassword($hashedPassword, $clientId);

            // Check and report the result
            if($regOutcome){
                $message = "<p>Thank you for updating your password.</p>";
                include '../view/admin.php';
                exit;
            } else {
                $message = "<p>Sorry but the update failed. Please try again.</p>";
                include '../view/client-update.php';
                exit;
            }


        break;


        break;

        default:

        $getClientReview = getReviewClient($_SESSION['clientData']['clientId']);

        //print_r($getClientReview);
        //$reviewInfoDisplay = getReviewForClient($getClientReview);
           
        if(count($getClientReview) > 0 ){  
            $reviewInfoDisplay = getReviewForClient($getClientReview);
        } else {
            $reviewInfoDisplay = "<p>This user has no reviews.</p>";
        }
            include '../view/admin.php';
        
        
       }

?>