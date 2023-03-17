<?php
// default redirection
$url = $_REQUEST["callback"].'?callback_func='.$_REQUEST["callback_func"];
$bSuccessUpload = is_uploaded_file($_FILES['Filedata']['tmp_name']);

// SUCCESSFUL
if($bSuccessUpload) {
	$tmp_name = $_FILES['Filedata']['tmp_name'];
	$name = $_FILES['Filedata']['name'];

	$name  = preg_replace('/(\s|\<|\>|\=|\(|\))/', '_', $name);
	$name = preg_replace("/\.(php|phtm|htm|cgi|pl|exe|jsp|asp|inc|html|js|css)/i", "$0-x", $name);	

	$filename_ext = strtolower(array_pop(explode('.',$name)));
	$allow_file = array("jpg", "png", "bmp", "gif");
	
	if(!in_array($filename_ext, $allow_file)) {
		$url .= '&errstr='.$name;
	} else {

		$uploadDir = '../../../../../data/editor/';

		if(!is_dir($uploadDir)){
			mkdir($uploadDir, 0777);
		}
		
		$name=time().md5($name.uniqid(rand(), true)).".".$filename_ext; 

		$newPath = $uploadDir.urlencode($name);		
		@move_uploaded_file($tmp_name, $newPath);
		
		$url .= "&bNewLine=true";
		$url .= "&sFileName=".urlencode($name);
		$url .= "&sFileURL=../../../../../data/editor/".urlencode($name);
	}
}
// FAILED
else {
	$url .= '&errstr=error';
}
	
header('Location: '. $url);
?>
