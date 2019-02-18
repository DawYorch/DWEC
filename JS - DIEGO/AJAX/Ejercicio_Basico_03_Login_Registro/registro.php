<?php

       


            $servidor = "localhost"; 
            $username = "miusuario";
            $password = "mipassword";
            $basedatos = "login";
            
            $correoReg = $_GET["correoReg"];
            $nombreReg = $_GET["nombreReg"];
            $dniReg = $_GET["dniReg"];
            $apellidoReg = $_GET["apellidoReg"];
            $tlfReg = $_GET["tlfReg"];
            $contrasenaReg = $_GET["contrasenaReg"];
            $contrasena2Reg = $_GET["contrasena2Reg"];
            

            $conn = mysqli_connect($servidor, $username, $password, $basedatos);


            
            
            if (!$conn) {
                
                die("Conexi&ocacuten fallida: " . mysqli_connect_error());
            }
            
            $consulta = "SELECT * FROM usuarios WHERE Correo='$correoReg';";
            $result = mysqli_query($conn, $consulta);
            
            if ($fila = mysqli_fetch_array($result)) {
                        
                      
                echo "El correo ya existe";
               
                   
           }else{
              
                // En la Senia usare la basededatos usuarios (cambiar arriba en $basededatos y aqui bajo en la consulta), en casa usaré la basededatos login
                // IMPORTANTE  -  NO PONER Ñ NI NADA RARO EN BASE DE DATOS Y EL DNI AL SER PRIMARIA NO SE PUEDE REPETIR
               $consulta2 = "INSERT INTO usuarios (Correo, Nombre, DNI, Apellidos, Telefono, Contrasena) VALUES   
               ('$correoReg', '$nombreReg' , '$dniReg' , '$apellidoReg' , '$tlfReg' , '$contrasenaReg');" ;
               
               
               
               $result2 = mysqli_query($conn, $consulta2);
               
               
               
               echo $correoReg;
               echo"<br>";
               echo $nombreReg;
               echo"<br>";
               echo $dniReg;
               echo"<br>";
               echo $contrasenaReg;
               echo"<br>";
            //   echo $consulta2;
            //   echo"<br>";
               
           }
            
            mysqli_close($conn); 
           

?>

<!--            if ($fila = $result->num_rows) {
                echo "correcto";
                /*if($file) {
                    
                    echo "incorrecto";
                    
                }*/
            } else echo "incorrecto";-->