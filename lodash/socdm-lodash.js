var socdm = function(){
    function fill(array, value, start=0, end=array.length){
     
        for(var i = start;i < end; i ++){
            array[i] = value
        }
        
    }
    return {
        fill
    }
}()