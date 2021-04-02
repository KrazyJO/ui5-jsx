"use strict";

//eslint-disable-next-line no-unused-vars
function render(oRenderManager, bInclude) {
    (function () {
        oRenderManager.openStart("div");
        oRenderManager.openEnd();
        oRenderManager.text((bInclude && (function () {
            oRenderManager.openStart("span");
            oRenderManager.openEnd();
            oRenderManager.text("I am here!");
            oRenderManager.close("span");
        })()) || "");
        oRenderManager.close("div");
    })();
}
