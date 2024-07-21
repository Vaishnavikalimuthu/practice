let map = new Map()
function sum_of_arr(arr[],no){
    for(var i = 0;i<arr.length;i++){
        var n= no-arr[i]
        if(map.has(n)){
            return [map.get(i),i]
        }
        map.set(arr[i],i)
    }
    return []
}
console.log(sum_of_arr([1,2,3,,5,6],7))