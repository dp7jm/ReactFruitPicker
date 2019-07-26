import React from 'react';

function choice(items){
    return items[Math.floor(Math.random()*items.length)];

}
function remove(items, item){
let remeingfruits = [];
for (let index = 0; index < items.length; index++) {
    if (items[index] !== item) {
        // console.log(remeingfruits.length);
        // console.log(items[index]);
        remeingfruits.push(items[index]);
    }
    
}


return remeingfruits;
}

export {choice, remove};