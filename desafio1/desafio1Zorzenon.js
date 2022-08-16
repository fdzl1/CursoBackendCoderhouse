import { usuarios } from './array.js';




class Usuario{
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(nom){
        this.mascotas.push(nom);
    }

    countMascotas(){
        return (this.mascotas.length)
    }

    addBook(nom, author){
        this.libros.push({ nombre: nom, autor: author })
    }

    getBookNames(){
        return this.libros.map(l => l.nombre)
    }
}



const usuariosArray = usuarios.map(u => new Usuario(u.nombre, u.apellido, u.libros, u.mascotas));
console.log(usuariosArray[0].getFullName());
console.log(usuariosArray[0].countMascotas());
usuariosArray[0].addMascota('Oso');
console.log(usuariosArray[0].mascotas[usuariosArray[0].countMascotas()-1]);

usuariosArray[0].addBook('Libro2', 'autor2');

console.log(usuariosArray[0].libros[1]);

console.log(usuariosArray[0].getBookNames())




