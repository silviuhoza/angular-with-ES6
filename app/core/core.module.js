import angular from 'angular';
import ngResource from 'angular-resource';

import phoneService from './phone/phone.service';

export default angular.module('core', [
        'ngResource'
    ])
    .service('phoneService', phoneService);