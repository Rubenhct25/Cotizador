export const MARCAS = [
    {id:1, nombre:'europeo'},
    {id:2, nombre:'americano'},
    {id:3, nombre:'asiático'}
]

const year = new Date().getFullYear()

export const YEARS = Array.from( 
    new Array(20),
    (valor, index) => year - index
);

export const PLANES = [
    {id:1, nombre:'Básico'},
    {id:2, nombre:'Completo'}
]