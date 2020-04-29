<?php

if(isset($_POST['type'])){
    $servername = "database.cbceampvrgmo.us-east-1.rds.amazonaws.com";
    $username = "danil_boiko";
    $password = "danil1302";
    $dbname = "myDB";
    $conn = new mysqli($servername, $username, $password, $dbname);
    mysqli_set_charset($conn, 'utf8');
    switch ($_POST['type']){
        case "animal": {
        $request = [];
        $request["type"] = "";
        $request["sex"] = "";
        $request["age"] = "";
        $request["shelter"] = "";

            $data = ($_POST['data']);
          //  echo $_POST['data'];
          //  echo "\n";
            // $data = "1 6,dog,Хлопчик,,2";
            $data = explode(",", $data);
          //  echo json_encode($data);
          //  echo "\n";
            if ($data[1] != "") {
                if ($data[1] == "dog") {
                    $request["type"] = "dog";
                } else {
                    $request["type"] = "cat";
                }
            }
            if ($data[2] != "") {
                if ($data[2] == "Хлопчик") {
                    $request["sex"] = "Хлопчик";
                } else {
                    $request["sex"] = "Дівчинка";
                }
            }
            if ($data[4] != "") {
                $request["shelter"] = $data[4];
            }

          //  echo json_encode($request);
          //  echo "\n";
            $sql = "SELECT * FROM animal";
            if($request["type"]!=""||$request["age"]!=""||$request["sex"]!=""||$request["shelter"]!=""){
                $sql.=" WHERE";
             //    echo "AAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
             //               echo "\n";
            }

            if($request["type"]!=""){
                if(substr($sql,-5) != "WHERE"){
                    $sql.=" and ";
                }
                $sql.= " type = " . "\"" .$request["type"]. "\"";
            }
        if($request["sex"]!=""){
            if(substr($sql,-5) != "WHERE"){
                $sql.=" and ";
            }
            $sql.= " sex = " . "\"" .$request["sex"]. "\"";
        }
        if($request["shelter"]!=""){
            if(substr($sql,-5) != "WHERE"){
                $sql.=" and ";
            }
            $sql.= " shelter = " . "\"" .$request["shelter"]. "\"";
        }

            $result = $conn->query($sql);
            $response = [];
            $i = 0; while($row = $result->fetch_object())
            {
                $response[] = $row;
            }
            $request = explode("a", $data[0]);
          //  echo count($response);
            if($response == []){
              echo json_encode([]);
            } else{
                  $temp = array_slice ($response,$request[0]-1,$request[1]-($request[0]-1));
                  //echo json_encode($temp);
                  $temp = array_push($temp,count($response));
                  echo json_encode($temp);
            }


            break;
        }

        case "shelter":{
                    $sql = "SELECT * FROM shelter";

                    $result = $conn->query($sql);
                    $i = 0; while($row = $result->fetch_object())
                    {
                        $response[] = $row;
                    }
                    echo json_encode($response);

                    break;
                }

    }
    $conn->close();
}


?>