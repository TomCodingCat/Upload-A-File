<?php	
  $fileTempName = $_FILES['RemoteFile']['tmp_name'];	
  $fileSize = $_FILES['RemoteFile']['size'];
  $fileName = $_FILES['RemoteFile']['name'];
  
  //**********************************
  $extraInfo = $_POST['ExtraInfo'];
  //save extra info here
//**********************************

  move_uploaded_file($fileTempName, $fileName);
?>
