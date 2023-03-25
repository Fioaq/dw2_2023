let frutas= ["manzana", "pera", "banana"];

const reemplazar= (array, valorAReemplazar, valor) => {
    array.forEach((item, idx) => {
        if(item===valorAReemplazar){
            array[idx]=valor;
        }
    })
    console.log(array);
};

reemplazar(frutas, "pera", "sandia");