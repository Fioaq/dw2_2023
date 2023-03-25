let palindromo= "arenera";
let noPalindromo= "enlace";

const esPalindromo= cadena => {
    let reves= cadena.split("").reverse().join("");
    if(cadena===reves){
        console.log(`${cadena} es un palindromo`);
    }else{
        console.log(`${cadena} no es un palindromo`);
    }
};

esPalindromo(palindromo);
esPalindromo(noPalindromo);