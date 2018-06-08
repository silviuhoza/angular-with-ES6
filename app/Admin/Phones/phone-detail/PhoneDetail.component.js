import template from './PhoneDetail.template.html'
import componentStyles from './PhoneDetail.scss'
import $http from 'angular'

class PhoneDetailController {
    constructor() {
        this.name = '  Silviu Hoza  ';
        //aici am data hardcodata


        // this.phones = [{
        //     name: 'Nexus S',
        //     snippet: 'Fast just got faster with Nexus S.',
        //     age: 1
        // }, {
        //     name: 'Motorola XOOM™ with Wi-Fi',
        //     snippet: 'The Next, Next Generation tablet.',
        //     age: 2
        // }, {
        //     name: 'MOTOROLA XOOM™',
        //     snippet: 'The Next, Next Generation tablet.',
        //     age: 3
        // }];
        //  this.orderProp = 'age';


// aici e ceea ce am incercat sa fac dorind sa importez din alt folder
         var self = this;
         self.orderProp = 'age';

         $http.get('../phones').then(function (response) {
             self.phones = response.data;
         });
        
        
    }
  
    

    $onInit() {
        console.log('hi there, I am', this.name);
        

    }
}

const bindings = {
    someInput: '<',
    someOutput: '&'
}

export const phoneDetailComponent = {
    controller: PhoneDetailController,
    controllerAs: '$ctrl',
    template,
    bindings
}