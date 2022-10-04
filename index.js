function receivesAFunction( spy){
    return spy();
}
receivesAFunction(function () { return 'Hello there'});


function returnsANamedFunction(){return function fn(){}}
console.log(returnsANamedFunction.name);



const  returnsAnAnonymousFunction= function (){return ()=>console.log("hello");}
console.log(returnsAnAnonymousFunction.name);
