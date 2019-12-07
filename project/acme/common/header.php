<div class="headerContainer">
    <div class="logoDesign">
        <a href="/acme/index.php">
            <img src="/acme/images/site/logo.gif" alt="Acme Logo">
        </a>
    </div>
    <div class="folderAccount">
        <?php if(isset($cookieFirstname)){
            echo "<span>Welcome $cookieFirstname</span>";
        } ?>

        <?php

            $login = "/acme/accounts/index.php?action=login";
            $logout = "/acme/accounts/index.php?action=logout";
            $image =  "/acme/images/site/account.gif";
            if (isset($_SESSION['loggedin'])) {
                echo "<a href='".$logout."'>Logout</a>";
            } else {
                echo "<a class='.accountLink' href='".$login."'>
                <img src='".$image."' alt='Red folder'>My Account</a>";
            }
        ?>
        
    </div>
</div>
<nav>
    <!--
    <ul>
        <li class="active"><a>Home</a></li>
        <li><a>Cannon</a></li>
        <li><a>Explosive</a></li>
        <li><a>Misc</a></li>
        <li><a>Rocket</a></li>
        <li><a>Trap</a></li>
    </ul>
    -->

    <?php 
        echo $navList;   
    ?>
</nav>
