<?php 

$sql = "UPDATE todo_items SET `title`='".$data->todo_title."',`description`='".$data->todo_desc."',`timestamp`='".$data->timestamp."' WHERE `id`=".$data->id."";



if($connection->query($sql)){
    echo json_encode(array("updated"=>true));
} else{
    echo json_encode(array("error"=>$connection->error));
}