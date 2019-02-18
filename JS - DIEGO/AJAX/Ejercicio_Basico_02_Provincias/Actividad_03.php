<?php

            $servidor = "localhost"; 
            $username = "miusuario";
            $password = "mipassword";
            $basedatos = "Territorios";
            $dato = $_GET["id"];

            $conn = mysqli_connect($servidor, $username, $password, $basedatos);

            if (!$conn) {
                die("Conexi&ocacuten fallida: " . mysqli_connect_error());
            }
            
            $consulta = "SELECT * FROM MUNICIPIOS WHERE idProvincia=".$dato;
            $result = mysqli_query($conn, $consulta);
            
            header("Content-type: application/xml");
                       
            echo '<provincia>';
            
            while ($fila = mysqli_fetch_array($result)) {


                        echo    '<municipio id="'.$fila["idMunicipio"].'">'.$fila["Nombre"].'</municipio>';
                           
                        }
            echo '</provincia>';
            
            mysqli_close($conn); 


?>