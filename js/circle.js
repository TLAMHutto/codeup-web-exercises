(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            const area = Math.PI * Math.pow(this.radius, 2);

            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            return doRounding ? Math.round(this.getArea()) : this.getArea();

        }
    };
    // log info about the circle
    console.log("Raw circle information");
    console.log(circle.radius, circle.getArea());
    circle.logInfo(false);
    console.log(circle.logInfo(false));
    circle.logInfo(true);
    console.log(circle.logInfo(true));
    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log(circle.radius);
    circle.logInfo(false);
    //round the result to the nearest integer.
    console.log(circle.logInfo(false));
    circle.logInfo(true);
    console.log(circle.logInfo(true));

})();