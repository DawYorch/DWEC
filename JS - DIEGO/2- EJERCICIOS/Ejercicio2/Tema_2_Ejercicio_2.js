function numFeliz(num) {     
    //Variables para calcular los cuadrados y para quedarnos con           
    var m, n ;     
    var c = [] ;     
    while(num != 1 && c[num] !== true) {          
        c[num] = true ;          
        m = 0 ;          
        while (num > 0) {          
            // Nos quedamos con la primera cifra de la derecha               
            n = num % 10 ;
            // Calculamos el cuadrado de esta y lo acumulamos en m              
             m += n * n ;
            // Eliminamos la cifra que acabamos de utilizar               
             num = (num - n) / 10 ;          
        }   // num pasa a valer la suma de los cuadrados de cada una de las cifras          
        num = m ;     
    }     
    return (num == 1) ;
}
// Contador para controlar cuando hemos mostrado 5 números
var cnt = 5;
// Número en el que nos encontramos
var num = 1;
// Primero comparamos y después decrementamos
while(cnt-- > 0) {
    /* Mientras que num no sea un número feliz, vamos incrementándolo. Si lo es, saldremos del   
    bucle y lo mostraremos, incrementándolo después. */     
    while(!numFeliz(num)) num++ ;
         document.write("Número feliz: " + num);    
          num++ ;
}