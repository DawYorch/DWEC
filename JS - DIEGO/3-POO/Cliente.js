

class Cliente{

    constructor(Nombre, Direccion,Dni,Telefono){
        this.Nombre = Nombre;
        this.Direccion = Direccion;
        this.Dni = Dni;
        this.Telefono = Telefono;
    }


        setNombre(value){
            this.Nombre = value;
        }
        setDireccion(value){
            this.Direccion = value;
        }
        setDni(value){
            this.Dni = value;
        }
        setTelefono(value){
            this.Telefono = value;
        }

        getNombre(){
            return this.Nombre;
        }
        getDireccion(){
            return this.Direccion;
        }
        getDni(){
            return this.Dni;
        }
        getTelefono(){
            return this.Telefono;
        }

}