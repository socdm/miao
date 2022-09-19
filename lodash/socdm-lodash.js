//lodash 实践

var socdm = function(){
    function chunk(arr,size=1) {
        var result=[]
        var curArr=[]
        var isFinish = false
        if(!arr){
            return arr
        }
        var count = size
        for(var i = 0;i < arr.length; i ++){

            if(count === 0&& isFinish == true)   // 重置全部参数，停止往同一个数组push
            {
                count = size
                curArr =[]
                isFinish =false
            }
            //如果是按照单个数值分数组
            if(size ===1){
               result.push([arr[i]]) 

            }else if(count <= size && (arr.length - i) >= count){  //
                    curArr.push(arr[i])
                    count --
            }if( count <= 0 ){
                    result.push(curArr)
                    isFinish = true
            }
            if( (arr.length - i) < count){
                curArr.push(arr[i])
                if(arr.length - i === 1 ){
                    result.push(curArr)
                }
                count --
               }
            
        }
      return result
    }
    function compact (arr){
        var result =[]
        for(var i = 0 ; i < arr.length; i ++){
            if(Boolean(arr[i])){
                result.push(arr[i])
            }
        }
        return result
    }
    
    function fill(array, value, start=0, end=array.length){
     
        for(var i = start;i < end; i ++){
            array[i] = value
        }
        return array
        
    }
    function drop (array, n=1){
        var result=[]
        for(var i = n ; i < array.length; i ++){
            result.push(array[i])
        }
        return result
    }
    function dropRight(array, n=1){
        var result=[]
        for(var i = 0 ; i < array.length - n; i ++){
            result.push(array[i])
        }
        return result
    }
    function head(array){
        if(array.length === 0){
            return undefined
        }else{
            return array[0]
        }
        
    }
    function last(array){
        if(array.length === 0){
            return undefined
        }else{
            return array[array.length - 1]
        }
        
    }
    function min(array){
        if(array.length === 0 ){
            return undefined
        }
        var minNum = Infinity
        for(var i = 0; i < array.length;i ++){
            if(array[i] < minNum){
                minNum = array[i]
            }
        }
        return minNum

    }
    function max(array){
        if(array.length === 0 ){
            return undefined
        }
        var maxNum = -Infinity
        for(var i = 0; i < array.length;i ++){
            if(array[i] > maxNum){
                maxNum = array[i]
            }
        }
        return maxNum

    }
    function flatten(array){
        if(!array){
            return array
        }
        var result =[]
        for(var i = 0 ; i < array.length; i++){
            if(Array.isArray(array[i])){
                result.push(...array[i])
            }else{
                result.push(array[i])
            }
        }
        return result
    }
    function flattenDeep(array){
        return array.reduce((prev,cur,idx) =>{
            return prev.concat(Array.isArray(cur) ? flattenDeep(cur) : cur)
        },[])
    }
    function nth(array, n=0){
        if(array.length === 0 ){
            return undefined
        }
        if(n >=0){
            return array[n]
        }else if(n < 0){
            return array[array.length + n]
        }

    }
    function indexOf(array, value, fromIndex=0){
        if(fromIndex >= 0){
            for(var i = fromIndex; i < array.length; i ++){
                if(array[i] === value){
                    return i
                }
            }
        }
        if(fromIndex < 0){
            for(var i = array.length + fromIndex; i >= 0; i --){
                if(array[i] === value){
                    return i
                }
            }
        }
        return -1

    }
    //反转数组  双指针 i j
    function reverse(array){
        
        if(array){
            var i = 0
            var j = array.length - 1
            for(var i = 0; i < Math.ceil(array.length / 2); i ++,j--){
                if (i !== j){
                    var temp = array[j]
                    array[j] = array[i]
                    array[i] = temp
                }
            }
            return array
        }
        return []
    }
    // function map(collection,iteratee){
    //     var result=[]
    //     if(Array.isArray(collection) && typeof(iteratee) == 'function'){
    //         for(var i = 0 ; i < collection.length;i ++){
    //             result.push(iteratee(collection[i]))
    //         }
    //     }else  if(typeof(collection) == 'object' && typeof(iteratee) == 'function'){
    //         for(var objItem in collection){
    //             result.push(iteratee(collection[objItem]))
    //         }
    //     }else if(typeof(collection) == 'object' && typeof(iteratee) == 'string'){
    //         for(var i = 0 ; i < collection.length;i ++){
    //             result.push((collection[i][iteratee]))
    //         }
    //     }
        
    //     return result
    // }
    
    return {
        chunk,
        fill,
        drop,
        dropRight,
        head,
        last,
        min,
        max,
        compact,
        flatten,
        flattenDeep,
        nth,
        indexOf,
        reverse
        // forEach,
        // map
        


    }
}()
