// angular.
// module('phoneDetail').
// component('phoneDetail', {
//     template: 'TBD: Detail view for <span>{{$ctrl.phoneId}}</span>',
//     controller: ['$routeParams',
//         function PhoneDetailController($routeParams) {
//             this.phoneId = $routeParams.phoneId;
//         }
//     ]
// });

import template from './phone-details.template.html';
import componentStyle from './phone-details.css';

class phoneDetailsController {
    constructor($routeParams) {
      
        this.componentName = 'phoneDetailsController';
      
         this.phoneId = $routeParams.phoneId;
         this.phone ="salut"
    }

    $onInit() {
       console.log(this.phone);
       console.log(this.componentName);
    }
    

 }

const bindings = {
    testDetail: '=',
};


const phoneDetailsComponent = {
    controller: phoneDetailsController,
    template,
    bindings
};

export default phoneDetailsComponent;