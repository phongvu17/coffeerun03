(function(window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },

        isDecafOverTwenty: function(coffee, strength) {
            return ((coffee === 'decaf') && (strength > 20));
        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);
