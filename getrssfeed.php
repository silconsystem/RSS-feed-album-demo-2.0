<?php
header('Access-Control-Allow-Origin: *'); // Adjust this header as needed for your security requirements
$feedUrl = 'https://binauralsubliminal.com/album_01/rssalbum_01.xml';
echo file_get_contents($feedUrl);
?>
