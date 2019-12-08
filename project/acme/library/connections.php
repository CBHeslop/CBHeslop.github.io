<?php
function acmeConnect(){
 $server = isset($_ENV['MYSQL_SERVER']) ? $_ENV['MYSQL_SERVER']:'localhost';
 $dbname = isset($_ENV['MYSQL_DBNAME']) ? $_ENV['MYSQL_DBNAME']:'acme';
 $username = isset($_ENV['MYSQL_USER']) ? $_ENV['MYSQL_USER']:'iClient';
 $password = isset($_ENV['MYSQL_PASSWORD']) ? $_ENV['MYSQL_PASSWORD']:'tyFhiIAY1jB98rtj';
 $dsn = "mysql:host=$server;dbname=$dbname";
 $options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);

 // Create the actual connection object and assign it to a variable
 try {
  $link = new PDO($dsn, $username, $password, $options);
  //echo'$successful connection';
  return $link;
 } catch(PDOException $exc) {
  header('Location: /acme/view/500.php');
  exit;
  //echo $exc->getMessage();
 }
}
acmeConnect();
?>
