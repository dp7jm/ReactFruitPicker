import React from 'react';

function choice(items){
    return items[Math.floor(Math.random()* Array.length(items))];

}
function remove(items, item){

}

export {choice, remove};