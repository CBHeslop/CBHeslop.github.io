<?php
    $clientData = getClient($_SESSION['clientData']['clientEmail']);
    if ($_SESSION['loggedin']) {
    
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
            <h1>Update Account</h1>
            <p>Use this form to update name and email information</p>

            <?php
                if (isset($message)) {
                    echo $message;
                }
            ?>

            <form novalidate method="post" action="/acme/accounts/index.php">
                First Name: <br>
                <input name="clientFirstname" id="clientFirstname" type="text" <?php if(isset($clientFirstname)){echo "value='$clientFirstname'";}  elseif(isset($clientData['clientFirstname'])) {
                    echo "value='$clientData[clientFirstname]'"; }?> required><br>
                Last Name: <br>
                <input name="clientLastname" id="clientLastname" type="text" <?php if(isset($clientLastname)){echo "value='$clientLastname'";}  elseif(isset($clientData['clientLastname'])) {
                    echo "value='$clientData[clientLastname]'"; }?> required><br>
                Email: <br>
                <input name="clientEmail" id="clientEmail" type="text" <?php if(isset($clientEmail)){echo "value='$clientEmail'";}  elseif(isset($clientData['clientEmail'])) {
                    echo "value='$clientData[clientEmail]'"; }?> required><br>
        
                <input class="submitButton" type="submit" name="submit" value="Update Account"><br>
                <input type="hidden" name="action" value="updateAccount">
                <input type="hidden" name="clientId" value="<?php if(isset($clientData['clientId'])){ echo $clientData['clientId'];} 
                    elseif(isset($clientId)){ echo $clientId; } ?>">
            </form>

            <h2>Password Change</h2>
            <p>Use this form to update password information</p>
            <form novalidate method="post" action="/acme/accounts/index.php">
                Change Password: <br>
                <input name="clientPassword" id="clientPassword" type="text" <?php if(isset($clientPassword)){echo "value='$clientPassword'";} ?> required
                pattern="(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"><br>
                <span>Passwords must be at least 8 characters and contain at least 1 number, 1 capital letter and 1 special character</span><br>    
                <input class="submitButton" type="submit" name="submit" value="Change Password"><br>
                <input type="hidden" name="action" value="updatePassword">
                <input type="hidden" name="clientId" value="<?php if(isset($clientData['clientId'])){ echo $clientData['clientId'];} 
                    elseif(isset($clientId)){ echo $clientId; } ?>">
            </form>

        </main>

        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/acme/common/footer.php'; ?>
        </footer>

    </div>
    
</body>
</html>