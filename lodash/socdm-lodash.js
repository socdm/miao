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
    
    return {
        chunk,
        fill,
        drop,
        compact,
        flatten,
        flattenDeep

    }
}()
