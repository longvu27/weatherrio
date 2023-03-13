/**
 * @license MIT
 * @fileoverview Menage all routes
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';
import {updateWeather, error404} from "./app"

const defaultLocation = "#/weather?lat=51.5073219&lon=-0.1276474" //London

const currentLocation = function () {

}

const searchedLocation = (query) => {

}

const routes = new Map([
    ["/current-location", currentLocation],
    ["/weather", searchedLocation]
]);

const checkHash = function () {

}


