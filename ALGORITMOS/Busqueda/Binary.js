/*function binarySearch(array,item){
   
    function recurse(min,max){
        let middle = Math.floor((min + max)/2);

        //cuando el pivote y el numero buscado son iguales
        if(array[middle] === item){return middle}

        //cuando el pivote es menor al numero buscado
        if(array[middle] > item){
            return recurse(min, middle-1)
        }

        //cuando el pivote es mayor al numero buscado
        return recurse(middle +1, max);

    }

    return recurse(0,array.length -1);
    
} */

const arr = [2,23,54,76,98,213,656]
const arr2 = [1,2,3,4,5,6,7,8,9]


function busquedaBinaria(arr,indice){
    let inicio = 0;
    let fin = arr.length-1;
    console.log(fin)

    while(inicio <= fin){
        let medio = Math.floor((inicio + fin )/2)
        
        if (arr[medio] === indice){
            return medio;
        }else if(arr[medio]<indice){
            inicio = medio + 1  
        }else{
            fin = medio -1
        }
        return -1

    }

}
console.log(busquedaBinaria(arr2,8))