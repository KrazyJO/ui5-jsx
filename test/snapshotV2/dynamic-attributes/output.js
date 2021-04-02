"use strict";

//eslint-disable-next-line no-unused-vars
function render(oRm, oC) {
    (function () {
        oRm.openStart("button");
        oRm.attr("id", "myButton");
        oRm.attr("type", oC.isButton() ? "button" : "submit");
        oRm.openEnd();
        oRm.text("Click me!");
        oRm.close("button");
    })();
}
