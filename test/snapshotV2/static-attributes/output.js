"use strict";

//eslint-disable-next-line no-unused-vars
function render(oRm) {
    (function () {
        oRm.openStart("button");
        oRm.attr("id", "myButton");
        oRm.attr("type", "button");
        oRm.openEnd();
        oRm.text("Click me!");
        oRm.close("button");
    })();
}
