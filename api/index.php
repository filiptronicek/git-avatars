<?php

function getAvatarURL($username, $provider)
{
    switch ($provider) {
        case "github":
            return "https://github.com/{$username}.png";
            break;
        case "gitlab":
            $responce = json_decode(file_get_contents("https://gitlab.com/api/v4/users?username=" . $username));
            return $responce[0]->avatar_url;
            break;
        case "gravatar":
            return "https://gravatar.com/avatar/{$username}?s=80";
            break;
        default:
            return "https://pfp.now.sh/err.png";

    }
}

$url = getAvatarURL($_GET['u'], $_GET['p']);
if (strpos($url, 's=80') == true) {
    $url = str_replace('s=80', 's=460', $url);
}

$data = file_get_contents($url);

$ext = explode(".", $url);
$ext = end($ext);

if ($ext != "png" | $ext != "jpg") {
    $ext = "png";
}

header("Content-type: image/{$ext}");
echo $data;
