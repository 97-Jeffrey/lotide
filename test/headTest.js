const head = require('../head').head;
const assertEqual = require('../head').assertEqual;

assertEqual(head([5, 6, 7]), 5);
assertEqual(head([]), "Hello");