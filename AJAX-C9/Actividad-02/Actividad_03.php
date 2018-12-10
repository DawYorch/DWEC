<?php

            $servidor = "localhost"; 
            $username = "miusuario";
            $password = "mipassword";
            $basedatos = "Territorios";
            $dato = $_POST["id"];

            $conn = mysqli_connect($servidor, $username, $password, $basedatos);

            if (!$conn) {
                die("Conexi&ocacuten fallida: " . mysqli_connect_error());
            }
            
$consulta = "SELECT * FROM MUNICIPIOS";



$result = mysqli_query($conn, $consulta);


                        echo "<table>";

 while ($fila = mysqli_fetch_array($result)) {


                        
                        echo "<tr>";
                        echo    "<td>".$fila["idMunicipio"]."</td>";
                        echo    "<td>".$fila["Nombre"]."</td>";
                        echo "</tr>";
                            
                        }
                        
                        echo "</table>";
            
            # En el caso de haber usado un SELECT:
            echo "El resultado es de " . mysqli_num_rows($result) . " filas<br>";
            
            # Y para cualquier otro caso (INSERT, DELETE, UPDATE, SELECT),
            # el número de filas de la última operación se obtiene así:
            echo "El resultado es de " . mysqli_affected_rows($conn) . " filas<br>";
            
            mysqli_free_result($result);
            
            
            # Cerrar la conexión es una buena práctica, para liberar recursos 
            # inmediatamente, pero si no se pone, no pasa nada porque PHP
            # cierra la conexión automáticamente al salir:
            
            mysqli_close($conn); 


?>
