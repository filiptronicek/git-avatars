<?php

function getAvatarURL($username, $provider)
{
    if ($provider == "github") {
        return "https://github.com/{$username}.png";
    } else if ($provider == "gitlab") {
        $responce = json_decode(file_get_contents("https://gitlab.com/api/v4/users?username=" . $username));
        return $responce[0]->avatar_url;
    }
}
$url = getAvatarURL($_GET['u'], $_GET['p']);
$data = file_get_contents($url);

$ext = explode(".", $url);
$ext = end($ext);

if ($ext != "png" | $ext != "jpg") {
    $ext = "png";
}

header("Content-type: image/{$ext}");
echo $data;
