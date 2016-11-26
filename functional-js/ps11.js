module.exports = function arrayMap(arr, fn) {
        return arr.reduce( function(accumulate, item) { 
            accumulate.push(fn(item));
            return accumulate;
        }, []);
   };