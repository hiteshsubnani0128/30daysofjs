function myFunction(num){
    // alert(num);
    let n =  document.getElementById('viewer').innerHTML;
    if(n == 0){
        document.getElementById('viewer').innerHTML = num;
    }
    else{
        document.getElementById('viewer').innerHTML = n+''+num;
    }
}
function myEqual(){
    let n = document.getElementById('viewer').innerHTML;
    document.getElementById('viewer').innerHTML = 45;   
}