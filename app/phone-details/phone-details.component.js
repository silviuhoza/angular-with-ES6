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
    constructor($routeParams ,$http) {
      
        this.componentName = 'phoneDetailsController';
      
        //  this.phoneId = $routeParams.phoneId;
        //  this.phone ="salut"
       var self = this;
        // $http.get('phones/' + $routeParams.phoneId + '.json').then(function (response) {
        //     self.phone = response.data;
        // });
        

         $http.get('phones/' + $routeParams.phoneId + '.json').then(function (response) {
             self.phone = response.data;
             self.setImage(self.phone.images[0]);
         });

        

        self.setImage = function setImage(imageUrl) {
            self.mainImageUrl = imageUrl;
        };
    }

    $onInit() {
    //    console.log(this.phone);
    //    console.log(this.componentName);
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