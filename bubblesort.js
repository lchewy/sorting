function bubbleSort(array) {
    var res = [];

for (var i = 0; i < array.length; i++){
    if (array[i] < array[i+1]){
        res.push(array[i+1]);
        res.push(array[i]);
    } else{
        res.push(array[i]);
        res.push(array[i+1]);
    }
}
// return array;
console.log(res)
return res;

}

bubbleSort([12,5])