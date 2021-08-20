String.prototype.toAlternatingCase = function () {
  
  let arr=this.split('');
 for(let i=0;i<arr.length;i++){
       if(arr[i].toUpperCase!=arr[i]){
           arr[i]=arr[i].toUpperCase();
       }else
       arr[i]=arr[i].toLowerCase();
      
   }

}
"string".toAlternatingCase();no