<?php

            $servidor = "localhost"; 
            $username = "miusuario";
            $password = "mipassword";
            $basedatos = "login";
            $correoLog = $_GET["correoLog"];
            $contraLog = $_GET["contraLog"];

            $conn = mysqli_connect($servidor, $username, $password, $basedatos);
  
            
            if (!$conn) {
                die("Conexi&ocacuten fallida: " . mysqli_connect_error());
            }
            
            $consulta = "SELECT * FROM usuarios WHERE Correo='$correoLog';";
            $result = mysqli_query($conn, $consulta);
            
            if ($fila = mysqli_fetch_array($result)) {
                        
                      
                if($fila[5]==$contraLog){
                   
                //   echo $fila[0];
                //   echo "<br>";
                //   echo $fila[1];
                //   echo "<br>";
                //   echo $fila["DNI"];
                //   echo "<br>";
                //   echo $fila["Apellidos"];
                //   echo "<br>";
                //   echo $fila[4];
                //   echo "<br>";
                //   echo $fila["Contrasena"];
                
                 echo "Bienvenido ".$fila[1]." ".$fila[3];
                }else{
                    
                    echo "La contraseña no es correcta";
                    
                }
               
                   
           }else{
               
               echo "El correo no existe";
               
           }
            
            mysqli_close($conn); 
           

?>

<!--            if ($fila = $result->num_rows) {
                echo "correcto";
                /*if($file) {
                    
                    echo "incorrecto";
                    
                }*/
            } else echo "incorrecto";-->