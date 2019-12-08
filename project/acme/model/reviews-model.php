<?php

// Reviews Model
// Insert new review

   

    // Function to add a new review
    function newReview($invId, $clientId, $reviewText) {
        // Create a connection object using the acme connection function
        $db = acmeConnect();
        // The SQL statement
        $sql = 'INSERT INTO reviews (reviewText, invId, clientId)
            VALUES (:reviewText, :invId, :clientId)';
        // Create the prepared statement using the acme connection
        $stmt = $db->prepare($sql);
        // The next four lines replace the placeholders in the SQL
        // statement with the actual values in the variables
        // and tells the database the type of data it is
        $stmt->bindValue(':reviewText', $reviewText, PDO::PARAM_STR);
        $stmt->bindValue(':invId', $invId, PDO::PARAM_INT);
        $stmt->bindValue(':clientId', $clientId, PDO::PARAM_INT);
        // Insert the data
        $stmt->execute();
        // Ask how many rows changed as a result of our insert
        $rowsChanged = $stmt->rowCount();
        // Close the database interaction
        $stmt->closeCursor();
        // Return the indication of success (rows changed)
        return $rowsChanged;
    }

    // Function to get the reviews for specific item
    function getReviewInfo($invId) {
        $db = acmeConnect();
        $sql = 'SELECT clients.clientFirstname, clients.clientLastname, reviews.reviewText, reviews.reviewDate 
            FROM reviews 
            INNER JOIN clients 
            ON clients.clientId = reviews.clientId 
            WHERE reviews.invId = :invId 
            ORDER BY reviews.reviewDate 
            DESC';
        $stmt = $db->prepare($sql);
        $stmt->bindValue(':invId', $invId, PDO::PARAM_INT);
        $stmt->execute();
        $reviewInfo = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $reviewInfo;
    }

    // Function to get client review
    function getReviewClient($clientId) {
        $db = acmeConnect();
        $sql = 'SELECT clients.clientFirstname, reviews.reviewText, reviews.reviewId, reviews.reviewDate, inventory.invName 
            FROM reviews 
            INNER JOIN clients 
            ON clients.clientId = reviews.clientId 
            INNER JOIN inventory 
            ON inventory.invId = reviews.invId 
            WHERE reviews.clientId = :clientId';
        $stmt = $db->prepare($sql);
        $stmt->bindValue(':clientId', $clientId, PDO::PARAM_INT);
        $stmt->execute();
        $reviewInfo = $stmt->fetch(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $reviewInfo;
    }

    // Function to get the clients review
    function getReview($reviewId) {
        $db = acmeConnect();
        $sql = 'SELECT inventory.invName, reviews.reviewText, reviewsclientId, reviews.reviewDate 
            FROM reviews 
            INNER JOIN inventory 
            ON inventory.invId = reviews.invId 
            WHERE reviews.reviewId = :reviewId';
        $stmt = $db->prepare($sql);
        $stmt->bindValue(':reviewId', $reviewId, PDO::PARAM_INT);
        $stmt->execute();
        $reviewInfo = $stmt->fetch(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $reviewInfo;
    }

    // Function to update  the review
    function updateReview($reviewId, $reviewText) {
        $db = acmeConnect();
        $sql = 'UPDATE reviews 
            SET reviewText = :reviewText 
            WHERE reviewId = :reviewId';
        $stmt = $db->prepare($sql);
        $stmt->bindValue(':reviewId', $reviewId, PDO::PARAM_INT);
        $stmt->bindValue(':reviewText', $reviewText, PDO::PARAM_STR);
        $stmt->execute();
        $rowsChanged = $stmt->rowCount();
        $stmt->closeCursor();
        return $rowsChanged;
    }

    // Function to delete the review
    function deleteReview($reviewId) {
        $db = acmeConnect();
        $sql = 'DELETE FROM reviews 
            WHERE reviewId = :reviewId';
        $stmt = $db->prepare($sql);
        $stmt->bindValue(':reviewId', $reviewId, PDO::PARAM_INT);
        $stmt->execute();
        $rowsChanged = $stmt->rowCount();
        $stmt->closeCursor();
        return $rowsChanged;
    }
?>