import angular from 'angular';

import core from './core/core.module';

import phoneListComponent from './phone-list/phone-list.component.js'


class IndexController {
    constructor() {

    }

    $onInit() {
        console.log('Index controller initalized');
    }
}

angular.module('App', [
        'core'
    ])
    .controller('IndexController', IndexController)
    .component('phoneList', phoneListComponent)