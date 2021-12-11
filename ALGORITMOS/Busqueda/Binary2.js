
function binarySearch(value,list){
    let first = 0; //left endpoint
    let last = list.length -1; //rigth endpoint
    let position = -1;
    let found = false;
    let middle;

    while(found === false && first <= last){
        middle = Math.floor((first + last)/2);

        if(list[middle] == value){
            found = true;
            position = middle;
        }else if (list[middle] > value){
            last = middle -1
        }else{
            first = middle +1
        }
    }
    
    return position;
}

const arr = [2,23,54,76,98,213,656]

console.log(binarySearch(98,arr))