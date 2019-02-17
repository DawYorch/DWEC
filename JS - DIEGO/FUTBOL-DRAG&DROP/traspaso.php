<?php

        $servidor = "localhost"; 
        $username = "daw";
        $password = "daw";
        $basedatos = "drag_drop";
        $player = $_GET["futbolista"];
        $team = $_GET["equipo"];


        $conn = mysqli_connect($servidor, $username, $password, $basedatos);
  
            
        if (!$conn) {
            die("Conexi&ocacuten fallida: " . mysqli_connect_error());
        }
        
        $consulta = "UPDATE banquillo SET ciudad='$team' WHERE nombre='$player';";
        // $consulta = "SELECT * FROM banquillo WHERE nombre='Ayala';";
        $result = mysqli_query($conn, $consulta);

        $consulta2 = "SELECT ciudad FROM banquillo WHERE nombre='$player';";
        $result2 = mysqli_query($conn, $consulta2);
        
        while($fila = mysqli_fetch_array($result2)) {    

                        echo $fila[0];     
        }

?>
