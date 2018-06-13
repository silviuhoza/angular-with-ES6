// angular.
// module('core').
// filter('checkmark', function () {
//     return function (input) {
//         return input ? '\u2713' : '\u2718';
//     };
// });

function checkmark() {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    };
}

export default checkmark;

// class checkmark {

//     constructor(){

//     }

//     static filter(value) {
//         return function (input) {
//             return input ? '\u2713' : '\u2718';
//         };
//     }

// }

// export default checkmark.filter;