"use strict";

//eslint-disable-next-line no-unused-vars
function render(oRm) {
    (function () {
        oRm.openStart("div");

        (function (mA) {
            var mAttr = mA || {};

            for (var sKey in mAttr) {
                if (mAttr.hasOwnProperty(sKey)) {
                    oRm.attr(sKey, mAttr[sKey]);
                }
            }
        })({ id: "myId" });

        oRm.openEnd();
        oRm.close("div");
    })();
}
