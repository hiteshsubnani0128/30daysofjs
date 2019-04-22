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
    for(i of abc){
        for(j of i)
        if(j=='+'){

        }
        else if(j=='-'){

        }
        else if(j=='*'){

        }
        else if(j=='/'){

        }
        else if(j=='%'){

        }
        else{

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