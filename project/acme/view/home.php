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
            <h1>Welcome to Acme!</h1>

            <div id="rocketFeature">
                <div></div>
                <ul>
                    <li><h2>Acme Rocket</h2></li>
                    <li>Quick lighting fuse</li>
                    <li>NHTSA approved seat belts</li>
                    <li>Mobile launch stand included</li>
                    <li><a href="/acme/cart/"><img id="actionbtn" alt="Add to cart button" src="/acme/images/site/iwantit.gif"></a></li>
                </ul>
            </div>

            <div id="contentInfoMain">
                <div class="container1">
                    <h3>Acme Rocket Reviews</h3>
                    <ul>
                        <li>"I don't know how I ever caught roadrunners before this." (4/5)</li>
                        <li>"That thing was fast!" (4/5)</li>
                        <li>"Talk about fast delivery." (5/5)</li>
                        <li>"I didn't even have to pull the meat apart." (4.5/5)</li>
                        <li>"I'm on my thirtieth one. I love these things!" (5/5)</li>
                    </ul>

                </div>
                <div class="container2">
                    <h3>Featured Recipes</h3>
                    <div class="container2Food">
                        <div class="individualFood">
                            <img src="images/recipes/bbqsand.jpg" alt="BBQ sandwich">
                            <a href="" title="pulledBbq">Pulled Roadrunner BBQ</a>
                        </div>
                        <div class="individualFood">
                            <img src="images/recipes/potpie.jpg" alt="Pot Pie">
                            <a href="" title="potPie">Roadrunner Pot Pie</a>
                        </div>
                        <div class="individualFood">
                            <img src="images/recipes/soup.jpg" alt="Soup">
                            <a href="" title="soup">Roadrunner Soup</a>
                        </div>
                        <div class="individualFood">
                            <img src="images/recipes/taco.jpg" alt="Taco">
                            <a href="" title="tacos">Roadrunner Tacos</a>
                        </div>
                    </div>

                </div>

                
            </div>

        </main>

        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/acme/common/footer.php'; ?>
        </footer>

    </div>
    
</body>
</html>