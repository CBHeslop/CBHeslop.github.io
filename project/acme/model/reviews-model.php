<?php

// Reviews Model
// Insert new review

   

    function newReview($reviewText, $invId, $clientId) {
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

    function reviewInfo($invId) {
        $db = acmeConnect();
        //$sql = 'SELECT reviewDate 
        //FROM reviews 
        //Where reviewText = :reviewText';
         $sql = "SELECT reviewDate 
         FROM reviews
         WHERE invId  
         AND invId = :invId";
        $stmt = $db->prepare($sql);
        $stmt->bindValue(':invId', $invId, PDO::PARAM_INT);
        $stmt->execute();
        $reviewInfo = $stmt->fetch(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $reviewInfo;
    }
?>