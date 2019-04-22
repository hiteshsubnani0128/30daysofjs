var abc = [];
function myFunction(num){
    // alert(num);
    let n = document.getElementById('viewer').innerHTML;
    if(n == 0){
        document.getElementById('viewer').innerHTML = num;
    }
    else{
        document.getElementById('viewer').innerHTML = n+''+num;
    }
}
function myEqual(){
    abc.push([document.getElementById('viewer').innerHTML,'=']);
    let n = document.getElementById('viewer').innerHTML;
    for(var i =0;i<abc.length;i++){
        if(abc[i][1]=='+'){
            document.getElementById('viewer').innerHTML = parseInt(abc[i][0])+parseInt(abc[i+1][0])
    }
    else if(abc[i][1]=='+'){
        document.getElementById('viewer').innerHTML = parseInt(abc[i][0])+parseInt(abc[i+1][0])
    }
    
}
}
function mysum(sign){
    abc.push([document.getElementById('viewer').innerHTML,sign]);
    document.getElementById('viewer').innerHTML = 0;
}


function myClear(){
    document.getElementById('viewer').innerHTML = 0;
}