<?php
function acmeConnect(){
 $server = 'localhost';
 $dbname= 'acme';
 $username = 'iClient';
 $password = 'tyFhiIAY1jB98rtj';
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
