/**
 * @license MIT
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';

import {fetchData, url} from "./api.js";
import * as module from "./module.js"

const addEventOnElements = function (elements, eventType, callback) {
    for (const element of elements) element.addEventListener(eventType, callback)
}

const searchView = document.querySelector("[data-search-view]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");

const toggleSearch = () => searchView.classList.toggle("active");

addEventOnElements(searchTogglers, "click", toggleSearch)

const searchFiled = document.querySelector("[data-search-filed]")
const searchResult = document.querySelector("[data-search-result]")

let searchTimeout = null;
let searchTimeoutDuration = 500;

searchFiled.addEventListener("input", function () {
    searchTimeout ?? clearTimeout(searchTimeout);
    if(!searchFiled.value) {
        console.log('ffffffffffffff')
    }
})