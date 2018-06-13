import angular from 'angular';
import ngResource from 'angular-resource';

import phoneService from './phone/phone.service';

import checkmark from './checkmark/checkmark.filter'

export default angular.module('core', [
        'ngResource'
    ])
    .service('phoneService', phoneService)
    .filter('checkmark', checkmark)
