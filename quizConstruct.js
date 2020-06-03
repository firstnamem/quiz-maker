// For constructing the quiz based on the initial page
// I wanted to find a way to access the html elements in initialPage.html,
// but I ran out of time, and I'm not sure if these methods work.

import {Quiz, Question, Answer} from './classes';

const title = document.getElementsByName("name")[0];
const description = document.getElementsByName("description")[0];
const category = document.getElementsByName("category")[0];