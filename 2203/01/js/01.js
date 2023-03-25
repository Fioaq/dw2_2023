const array= [1,2,3,4,5,6,7,8,9,10];

const sumar= arr =>{
    let sum= 0;
    for(let i=0; i<arr.length; i++){
        sum= sum + arr[i];
    }
    return sum;
};

console.log(array);
console.log("La suma es:", sumar(array));