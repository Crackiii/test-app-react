<?php

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

require("connections.php");

$data = json_decode(file_get_contents('php://input'));

switch($data->operation){
    case "list":{
        require("show.php");
        break;
    }
    case "create":{
        require("create.php");
        break;
    }
    case "delete":{
        require("delete.php");
        break;
    }
    case "update":{
        require("updateitem.php");
        break;
    }
}










