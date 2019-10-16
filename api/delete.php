<?php 

$sql = "DELETE FROM `todo_items` WHERE `id`=".$data->id."";

if($connection->query($sql)){
    echo json_encode(array("deleted"=>true));
} else{
    echo json_encode(array("error"=>$connection->error));
}