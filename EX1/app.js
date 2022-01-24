class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    get Describe(){
        return this.nombre + ", " + this.edad + " years old";
    }
}

function agregar(){

    x = document.getElementById("entrada").value;
    y = document.getElementById("edad").value;

    let individuo = new Persona(x,y);

    var x = document.createElement("LI");
    var t = document.createTextNode(individuo.Describe);
    x.appendChild(t);
    document.querySelector("#container ol").appendChild(x);

    document.getElementById("entrada").value="";
    document.getElementById("edad").value="";

    document.getElementById("entrada").focus;

}


