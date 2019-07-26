import React from 'react';
import ReactDOM from 'react'
import food from './food';
import {choice, remove} from './helpers';

console.log(`I'd like one ${choice(food)}, please.`);
