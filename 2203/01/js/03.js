let arr=[];
let num=50;

const pares= (array, num) => {
    for(let i=1; i<num; i++){
        if(i%2==0){
            array.push(i);
        }
    }
    console.log(array);
};

pares(arr, num);