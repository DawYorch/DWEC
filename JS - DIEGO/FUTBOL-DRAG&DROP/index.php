<?php

        $servidor = "localhost"; 
        $username = "daw";
        $password = "daw";
        $basedatos = "drag_drop";
        $pelotero = $_GET["pelotero"];
        


        $conn = mysqli_connect($servidor, $username, $password, $basedatos);
  
            
        if (!$conn) {
            die("Conexi&ocacuten fallida: " . mysqli_connect_error());
        }
        
        $consulta = "SELECT * FROM banquillo WHERE nombre='$pelotero';";
        // $consulta = "SELECT * FROM banquillo WHERE nombre='Ayala';";
        $result = mysqli_query($conn, $consulta);
        
        while($fila = mysqli_fetch_array($result)) {

                // var_dump($fila);  if($fila[4]==null || $fila[4]==0) 

                //Porque no funciona si pongo  $fila[4]==0 dentro del if ???
                if($fila["ciudad"]==""){       

                        echo "Equipo fantasma"."#".$fila[4];

                        // echo "Sin equipos"."#".$fila[2];
                }else{

                        echo $fila["ciudad"]."#".$fila[2];;
                }
                

                // $dem = $fila[2];
                // $equipo = $fila[3];
                // echo "$dem" . "#" .  "$equipo";
        }

?>
