import angular from 'angular';

import core from './core/core.module';

import ngRoute from 'angular-route';

// import ngAnimate from 'angular-animate';

import config from './app.config';

import checkmark from "./core/checkmark/checkmark.filter"

import phoneListComponent from './phone-list/phone-list.component';

import phoneDetailsComponent from './phone-details/phone-details.component';




class IndexController {
    constructor() {

    }

    $onInit() {
        console.log('Index controller initalized');
    }
}

angular.module('App', [
        'core',
        'ngRoute'
    ])
    .config(config)
    .controller('IndexController', IndexController)
    .component('phoneList', phoneListComponent)
    .component('phoneDetails', phoneDetailsComponent)