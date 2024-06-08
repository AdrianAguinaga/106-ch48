function sayHello(){
    console.log("Hello there");
    return;    
}

function sayGoobye()
{
    console.log("bye bye");
}

function init(){
    console.log("hello world");
    sayHello();
    sayGoobye();    
    // this is something new
   
}

window.onload = init;