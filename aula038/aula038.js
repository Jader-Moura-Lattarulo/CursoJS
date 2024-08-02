//Funções de callback
function randonNumber (min= 1000, max = 6000){
    const randonNumber = Math.random()*(max - min) + min;
    return randonNumber;
}

function f1(callback) {
    setTimeout(function(){ //Simulando algo que demoraria no servidor
        console.log('f1');
        if(callback) callback();
    }, randonNumber());    
}

function f2(callback) {
    setTimeout(function(){
        console.log('f2');
        if(callback) callback();
    }, randonNumber());  
}

function f3(callback) {
    setTimeout(function(){
        console.log('f3');
        if(callback) callback();
    }, randonNumber());  
}

//f1(function(){
//    f2(function(){
//        f3(function(){
//            console.log('Olá mundo!');
//        });
//    });
//});

f1(f1Callback());

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f3(f3Callback);
}

function f3Callback(){
    console.log('Olá mundo!');
    
}