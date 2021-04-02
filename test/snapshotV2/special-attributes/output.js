"use strict";

//eslint-disable-next-line no-unused-vars
function render(oRm, oC) {
    (function () {
        oRm.openStart("div", oC);

        (function (oSpec) {
            if (oSpec.element) {
                oRm.accessibilityState(oSpec.element, oSpec.props);
            } else {
                oRm.accessibilityState(oSpec.props);
            }
        })({ element: oC, props: { role: "separator" } });

        oRm.writeElementData(oC);

        (function (mC) {
            var mClasses = mC || {};

            if (mClasses instanceof Array) {
                for (var i = 0; i < mClasses.length; ++i) {
                    if (mClasses[i]) {
                        oRm.class(mClasses[i]);
                    }
                }
            } else {
                for (var sKey in mClasses) {
                    if (mClasses.hasOwnProperty(sKey) && mClasses[sKey]) {
                        oRm.class(sKey);
                    }
                }
            }
        })({ myClass: true });

        (function (mS) {
            var mStyles = mS || {};

            if (mStyles instanceof Array) {
                for (var i = 0; i < mStyles.length; ++i) {
                    if (mStyles[i] && mStyles[i].name && mStyles[i].value !== null) {
                        oRm.style(mStyles[i].name, mStyles[i].value);
                    }
                }
            } else {
                for (var sKey in mStyles) {
                    if (mStyles.hasOwnProperty(sKey) && mStyles[sKey] !== null) {
                        oRm.style(sKey, mStyles[sKey]);
                    }
                }
            }
        })({ width: "100%" });

        oRm.openEnd();
        oRm.openStart("div");
        oRm.class("my-class");
        oRm.class("b");
        oRm.attr("style", "width: 100%");
        oRm.openEnd();
        oRm.close("div");
        oRm.close("div");
    })();
}
