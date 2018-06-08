import angular from 'angular';

// AUTH
// import { adminLoginComponent } from './Auth/AdminLogin/AdminLogin.component';
// import { adminRecoverComponent } from './Auth/AdminRecover/AdminRecover.component';
// import { adminRegisterComponent } from './Auth/AdminRegister/AdminRegister.component';

 // BOOKING
// import { adminBookingComponent } from './Booking/AdminBooking/AdminBooking.component';
// import { adminBookingDetailsComponent } from './Booking/AdminBookingDetails/AdminBookingDetails.component';
// import { adminBookingListComponent } from './Booking/AdminBookingList/AdminBookingList.component';

//Phones
import {phoneDetailComponent} from './Phones/phone-detail/PhoneDetail.component';

 export default angular.module('Admin', [])
    // .component('adminLoginComponent', adminLoginComponent)
    // .component('adminRecoverComponent', adminRecoverComponent)
    // .component('adminRegisterComponent', adminRegisterComponent)
    // .component('adminBookingComponent', adminBookingComponent)
    // .component('adminBookingDetailsComponent', adminBookingDetailsComponent)
    // .component('adminBookingListComponent', adminBookingListComponent)
    .component('phoneDetailComponent', phoneDetailComponent)
