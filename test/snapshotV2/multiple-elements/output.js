"use strict";

//eslint-disable-next-line no-unused-vars
function render(oRm) {
    (function () {
        oRm.openStart("div");
        oRm.openEnd();
        oRm.openStart("span");
        oRm.openEnd();
        oRm.text("Words");
        oRm.close("span");
        oRm.openStart("table");
        oRm.openEnd();
        oRm.openStart("thead");
        oRm.openEnd();
        oRm.openStart("tr");
        oRm.openEnd();
        oRm.openStart("th");
        oRm.openEnd();
        oRm.text("Column");
        oRm.close("th");
        oRm.close("tr");
        oRm.close("thead");
        oRm.openStart("tbody");
        oRm.openEnd();
        oRm.openStart("tr");
        oRm.openEnd();
        oRm.openStart("td");
        oRm.openEnd();
        oRm.text("Row 1");
        oRm.close("td");
        oRm.close("tr");
        oRm.openStart("tr");
        oRm.openEnd();
        oRm.openStart("td");
        oRm.openEnd();
        oRm.text("Row 2");
        oRm.close("td");
        oRm.close("tr");
        oRm.openStart("tr");
        oRm.openEnd();
        oRm.openStart("td");
        oRm.openEnd();
        oRm.text("Row 3");
        oRm.close("td");
        oRm.close("tr");
        oRm.close("tbody");
        oRm.close("table");
        oRm.close("div");
    })();
}
