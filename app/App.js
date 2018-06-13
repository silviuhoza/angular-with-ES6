import angular from 'angular';

import core from './core/core.module';

import ngRoute from 'angular-route';

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
    .controller('IndexController', IndexController)
    .component('phoneList', phoneListComponent)
    .component('phoneDetails', phoneDetailsComponent)