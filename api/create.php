<?php 



$sql = "INSERT INTO todo_items (`title`, `description`, `timestamp`) VALUES(
    '".$data->todo_title."', '".$data->todo_desc."', '".$data->timestamp."'
)";



if($connection->query($sql)){
    echo json_encode(array("inserted"=>true));
} else{
    echo json_encode(array("error"=>$connection->error));
}