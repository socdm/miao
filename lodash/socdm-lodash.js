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
    // 错误
    function indexOf(array, value, fromIndex=0){
        if(fromIndex >= 0){
            for(var i = fromIndex; i < array.length; i ++){
                if(array[i] === value){
                    return i
                }
            }
        }
        // 输入：indexOf([1,2,1,2],2,-12)
        // 输出：-1
        // 期望：1
        if(fromIndex < 0){
            for(var i = array.length + fromIndex; i < array.length; i ++){
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
    function initial(array){
        var res = []
        for(var i = 0 ; i < array.length - 1; i++){
            res.push(array[i])
        }
        return res
    }
    function join(array,separator=','){
        var str=''
        for(var i = 0 ; i < array.length; i++){
            if(i < array.length - 1){
                str += ''+array[i]+separator
            }else{
                str += ''+array[i]
            }
        }
        return str
    }

    //移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较。
    //.pull(array, 2, 3);
    function pull(array,...val){
        var i = 0 
        var j = 0
         while(j < array.length){
             var addFlag = false 
             for(var pIdx = 0 ; pIdx < val.length ; pIdx++){
                 if(array[j] !== val[pIdx]){
                      addFlag = true
                }else{
                  addFlag = false 
                  break
                }
             }
             if(addFlag){
                   array[i] = array[j]
                    i ++
                    j ++
             }else{
                  j ++
             }

            
         }
        return array.slice(0,i)

    }


    //这个方法接收一个要移除值的数组
    function pullAll(array,val){
        var i = 0 
        var j = 0
         while(j < array.length){
             var addFlag = false 
             for(var pIdx = 0 ; pIdx < val.length ; pIdx++){
                 if(array[j] !== val[pIdx]){
                      addFlag = true
                }else{
                  addFlag = false 
                  break
                }
             }
             if(addFlag){
                   array[i] = array[j]
                    i ++
                    j ++
             }else{
                  j ++
             }

            
         }
        return array.slice(0,i)

    }
    //使用二进制的方式检索来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序。
    function sortedIndex(array, value){
       var left = 0
       var right = array.length - 1
       while(left < right){
        var mid = Math.floor((left + right) / 2)
        var num = array[mid]
        if(num < value){
            left = mid + 1
        }else if(num >= value){
            right = mid - 1
        }
       }
       return left
    }
    //countBy
    //创建一个组成对象，key（键）是经过 iteratee（迭代函数） 执行处理collection中每个元素后返回的结果，每个key（键）对应的值是 iteratee（迭代函数）返回该key（键）的次数（注：迭代次数）。 iteratee 调用一个参数：(value)。
    function countBy(collection,operation){
        if(typeof(operation) == 'string'){
            
        }
    }
   
    //高阶一些
    // function keys(obj) {
    //     var result = []
    //     for (var key in obj) {
    //       if (obj.hasOwnProperty(key)) {
    //         result.push(key)
    //       }
    //     }
    //     return result 
    //   }
    function keys(obj){
        var result= []
        for(var key in obj){
            console.log(key)
            if(Object.prototype.hasOwnProperty.call(obj,key)){
                result.push(key)
            }
        }
        return result
    }
    function union(...array){
        var arr = array.flat()
        var result =[]
        for(var i = 0 ; i<arr.length;i ++){
            // 如果不存在result
            if(result.indexOf(arr[i]) < 0){
                result.push(arr[i])
            }
        }
        return result
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
        reverse,
        initial,
        join,
        pull,
        pullAll,
        sortedIndex,
        countBy,
        keys,
        union
        // forEach,
        // map
        


    }
}()
