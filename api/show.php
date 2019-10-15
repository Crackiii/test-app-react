<?php


$sql = "SELECT * FROM todo_items";

$result = $connection->query($sql);
$arr = array();
if ($result->num_rows > 0) {
    
    while($row = $result->fetch_assoc()) {
        $arr[] = $row;
    }

    echo json_encode($arr);
} else {
    echo json_encode(array("No Data" => true));
}