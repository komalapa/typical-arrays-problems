
exports.min = function min (array) {
    if (!array || array.length === 0) return 0;
    let min = 0;
    array.forEach(element => {
         if (element < min){
             min = element;
         }     
    });
  return min;
}

exports.max = function max (array) {
    if (!array || array.length === 0) return 0;
    let max = 0;
    array.forEach(element => {
         if (element > max){
             max = element;
         }     
    });
  return max;
}

exports.avg = function avg (array) {
    if (!array || array.length === 0) return 0;
    let avg = array.reduce((sum,e) => sum+e)/array.length
    return avg;
}
