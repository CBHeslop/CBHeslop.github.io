<?php
// Products Controller

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

    // Category Drop down list
    $catList = catDropDownList();

    $categoryName = filter_input(INPUT_POST, 'categoryName', FILTER_SANITIZE_STRING);
    $invName = filter_input(INPUT_POST, 'invName', FILTER_SANITIZE_STRING);
    $invDescription = filter_input(INPUT_POST, 'invDescription', FILTER_SANITIZE_STRING);
    $invImage = filter_input(INPUT_POST, 'invImage', FILTER_SANITIZE_STRING);
    $invThumbnail = filter_input(INPUT_POST, 'invThumbnail', FILTER_SANITIZE_STRING);
    $invPrice = filter_input(INPUT_POST, 'invPrice', FILTER_SANITIZE_STRING);
    $invStock = filter_input(INPUT_POST, 'invStock', FILTER_SANITIZE_STRING);
    $invSize = filter_input(INPUT_POST, 'invSize', FILTER_SANITIZE_STRING);
    $invWeight = filter_input(INPUT_POST, 'invWeight', FILTER_SANITIZE_STRING);
    $invLocation = filter_input(INPUT_POST, 'invLocation', FILTER_SANITIZE_STRING);
    $categoryId = filter_input(INPUT_POST, 'categoryId', FILTER_SANITIZE_STRING);
    $invVendor = filter_input(INPUT_POST, 'invVendor', FILTER_SANITIZE_STRING);
    $invStyle = filter_input(INPUT_POST, 'invStyle', FILTER_SANITIZE_STRING);
    $action = filter_input(INPUT_POST, 'action');
    if ($action == NULL){
     $action = filter_input(INPUT_GET, 'action');
    }

    // Check if the firstname cookie exists, get its value
    if(isset($_COOKIE['firstname'])){
        $cookieFirstname = filter_input(INPUT_COOKIE, 'firstname', FILTER_SANITIZE_STRING);
      }

    switch ($action) {
        case 'addCategory':
            include '../view/add-category.php';
        break;
        case 'addProduct':
            include '../view/add-product.php';
        break;
        case 'addCat':
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
        case 'addProd':
            // Filter and store data
            $catType = filter_input(INPUT_POST, 'catType', FILTER_SANITIZE_NUMBER_INT);
            $invName = filter_input(INPUT_POST, 'invName', FILTER_SANITIZE_STRING);
            $invDescription = filter_input(INPUT_POST, 'invDescription', FILTER_SANITIZE_STRING);
            $invImage = filter_input(INPUT_POST, 'invImage', FILTER_SANITIZE_STRING);
            $invThumbnail = filter_input(INPUT_POST, 'invThumbnail', FILTER_SANITIZE_STRING);
            $invPrice = filter_input(INPUT_POST, 'invPrice', FILTER_SANITIZE_NUMBER_FLOAT);
            $invStock = filter_input(INPUT_POST, 'invStock', FILTER_SANITIZE_NUMBER_INT);
            $invSize = filter_input(INPUT_POST, 'invSize', FILTER_SANITIZE_NUMBER_INT);
            $invWeight = filter_input(INPUT_POST, 'invWeight', FILTER_SANITIZE_NUMBER_INT);
            $invLocation = filter_input(INPUT_POST, 'invLocation', FILTER_SANITIZE_STRING);
            //$categoryId = filter_input(INPUT_POST, 'categoryId', FILTER_SANITIZE_STRING);
            $invVendor = filter_input(INPUT_POST, 'invVendor', FILTER_SANITIZE_STRING);
            $invStyle = filter_input(INPUT_POST, 'invStyle', FILTER_SANITIZE_STRING);

            // Check for missing data
            if(empty($invName) || empty($invDescription) || empty($invImage) || empty($invThumbnail) || empty($invPrice) || empty($invStock) || empty($invSize) || empty($invWeight) || empty($invLocation) || empty($catType) || empty($invVendor) || empty($invStyle)){
                $message = '<p>Please provide information for all empty form fields.</p>';
                include '../view/add-product.php';
                exit;
            }

            // Send the data to the model
            $regOutcome = addProduct($invName, $invDescription, $invImage, $invThumbnail, $invPrice, $invStock, $invSize, $invWeight, $invLocation, $catType, $invVendor, $invStyle);

            // Check and report the result
            if($regOutcome === 1) {
                $message = "<p>A new product has been added</p>";
                include '../view/add-product.php';
                exit;
            } else {
                $message = "<p>Provide a name for adding a product</p>";
                include '../view/add-product.php';
                exit;
            }


        /* * ********************************** 
        * Get Inventory Items by categoryId 
        * Used for starting Update & delete process 
        * ********************************** */ 
        case 'getInventoryItems': 
            // Get the categoryId 
            $categoryId = filter_input(INPUT_GET, 'categoryId', FILTER_SANITIZE_NUMBER_INT); 
            // Fetch the products by categoryId from the DB 
            $productsArray = getProductsByCategory($categoryId); 
            // Convert the array to a JSON object and send it back 
            echo json_encode($productsArray); 
        break;

        case 'mod':
            $invId = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
            $prodInfo = getProductInfo($invId);
            if(count($prodInfo)<1){
                $message = 'Sorry, no product information could be found.';
            }
            include '../view/prod-update.php';
            exit;
        break;

        case 'updateProd':

            // Filter and store data
            $catType = filter_input(INPUT_POST, 'catType', FILTER_SANITIZE_NUMBER_INT);
            $invName = filter_input(INPUT_POST, 'invName', FILTER_SANITIZE_STRING);
            $invDescription = filter_input(INPUT_POST, 'invDescription', FILTER_SANITIZE_STRING);
            $invImage = filter_input(INPUT_POST, 'invImage', FILTER_SANITIZE_STRING);
            $invThumbnail = filter_input(INPUT_POST, 'invThumbnail', FILTER_SANITIZE_STRING);
            $invPrice = filter_input(INPUT_POST, 'invPrice', FILTER_SANITIZE_NUMBER_FLOAT);
            $invStock = filter_input(INPUT_POST, 'invStock', FILTER_SANITIZE_NUMBER_INT);
            $invSize = filter_input(INPUT_POST, 'invSize', FILTER_SANITIZE_NUMBER_INT);
            $invWeight = filter_input(INPUT_POST, 'invWeight', FILTER_SANITIZE_NUMBER_INT);
            $invLocation = filter_input(INPUT_POST, 'invLocation', FILTER_SANITIZE_STRING);
            $invVendor = filter_input(INPUT_POST, 'invVendor', FILTER_SANITIZE_STRING);
            $invStyle = filter_input(INPUT_POST, 'invStyle', FILTER_SANITIZE_STRING);
            $invId = filter_input(INPUT_POST, 'invId', FILTER_SANITIZE_NUMBER_INT);

            
            // Check for missing data
            if(empty($catType) || empty($invName) || empty($invDescription) || empty($invImage) || empty($invThumbnail) || empty($invPrice) || empty($invStock) || empty($invSize) || empty($invWeight) || empty($invLocation) || empty($invVendor) || empty($invStyle)) {
                $message = '<p>Please provide information for all empty form fields.</p>';
                include '../view/prod-update.php';
                exit;
            }
            

            // Send the data to the model
            $updateResult = updateProduct($catType, $invName, $invDescription, $invImage, $invThumbnail, $invPrice, $invStock, $invSize, $invWeight, $invLocation, $invVendor, $invStyle, $invId);

            // Check and report the result
            if($updateResult === 1) {
                $message = "<p>$invName has been successfully updated</p>";
                include '../view/product-management.php';
                exit;
            } else {
                $message = "<p>Provide a name for updating a product</p>";
                include '../view/prod-update.php';
                exit;
            }
        break;

        case 'del':
            // Filter and store data
            $invId = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);

            // Send the data to the model
            $prodInfo = getProductInfo($invId);
                if (count($prodInfo) < 1) {
                    $message = 'Sorry, no product information could be found.';
                }
            include '../view/prod-delete.php';
            exit;
        break;

        case 'deleteProd':
            // Filter and store data
            $invName = filter_input(INPUT_POST, 'invName', FILTER_SANITIZE_STRING);
            $invId = filter_input(INPUT_POST, 'invId', FILTER_SANITIZE_NUMBER_INT);
                
            // Send the data to the model
            $deleteResult = deleteProduct($invId);

            // Check and report the result
            if ($deleteResult) {
                $message = "<p class='notice'>Congratulations, $invName was successfully deleted.</p>";
                $_SESSION['message'] = $message;
                header('location: /acme/products/');
                exit;
            } else {
                $message = "<p class='notice'>Error: $invName was not deleted.</p>";
                $_SESSION['message'] = $message;
                header('location: /acme/products/');
            exit;
            }
        break;

        case 'category':
            // Filter and store data
            $categoryName = filter_input(INPUT_GET, 'categoryName', FILTER_SANITIZE_STRING);
            
            // Send the data to the model
            $products = getProductsByCategoryTwo($categoryName);
 
            // Check and report the result
            if(!count($products)){
                $message = "<p class='notice'>Sorry, no $categoryName products could be found.</p>";
            } else {
                $prodDisplay = buildProductsDisplay($products);
            }
            include '../view/category.php';
        break;

        case 'itemInformation':
            // Filter and store data
            $invName = filter_input(INPUT_GET, 'invName', FILTER_SANITIZE_STRING);
            $invId = filter_input(INPUT_GET, 'invId', FILTER_SANITIZE_NUMBER_INT);
  

             // Send the data to the model
             $productInformation = getProductsInformation($invId);
             $thumbnailImage = getThumbnailImagesById($invId);

             // Check and report the result
            if(!count($productInformation)){
                $message = "<p class='notice'>Sorry, no $invName products could be found.</p>";
            } else {
                $prodInfoDisplay = buildProductsInfoDisplay($productInformation);
                $imageInfoDisplay = buildImagesInfoDisplay($thumbnailImage);
            }

            $getReview = getReviewInfo($invId);
           
            if(count($getReview) > 0 ){  
                $reviewInfoDisplay = getReviewInformation($getReview);
            } else {
                $reviewInfoDisplay = "<p>This product has no reviews.</p>";
            }

            include '../view/product-detail.php';


        break;
      
           

        default:
            $categoryList = buildCategoryList($categories);

            include '../view/product-management.php';
    }
?>

