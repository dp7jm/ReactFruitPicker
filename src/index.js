import React from 'react';
import ReactDOM from 'react'
import food from './food';
import {choice, remove} from './helpers';

const randomFruit = choice(food);
console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
const remaingFruits =  remove(food, randomFruit);
console.log(food);
console.log(remaingFruits);

console.log("I want another !!!");
console.log(`Sorry we have only, this one ${remaingFruits}`);
