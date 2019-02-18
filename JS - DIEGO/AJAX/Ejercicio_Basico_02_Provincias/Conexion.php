        <?php
            $servidor = "localhost"; 
            $username = "miusuario";
            $password = "mipassword";
            $basedatos = "bdprueba";

            $conn = mysqli_connect($servidor, $username, $password, $basedatos);

            if (!$conn) {
                die("Conexi&ocacuten fallida: " . mysqli_connect_error());
            }
            // echo "Conexi&oacuten con &eacutexito <br><br>";
            
            // $consulta = "SELECT * FROM CLIENTE";
            
            // $result = mysqli_query($conn, $consulta);
            
            // mysqli_close($conn); 
                                     
        ?>
