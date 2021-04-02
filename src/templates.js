const template = require("babel-template");

const styleHander = template(`(function(mS){
    var mStyles = mS || {};
    if (mStyles instanceof Array) {
        for (var i = 0; i < mStyles.length; ++i) {
            if (mStyles[i] && mStyles[i].name && mStyles[i].value !== null) {
                RM.style(mStyles[i].name, mStyles[i].value);
            }
        }
    } else {
        for (var sKey in mStyles) {
            if (mStyles.hasOwnProperty(sKey) && mStyles[sKey] !== null) {
                RM.style(sKey, mStyles[sKey]);
            }
        }
    }
})(PARAM);`);


const classHander = template(`(function(mC){
    var mClasses = mC || {};
    if (mClasses instanceof Array) {
        for (var i = 0; i < mClasses.length; ++i) {
            if (mClasses[i]) {
                RM.class(mClasses[i]);
            }
        }
    } else {
        for (var sKey in mClasses) {
            if (mClasses.hasOwnProperty(sKey) && mClasses[sKey]) {
                RM.class(sKey);
            }
        }
    }
})(PARAM);`);

const attributesHandler = template(`(function(mA){
    var mAttr = mA || {};
    for (var sKey in mAttr) {
        if (mAttr.hasOwnProperty(sKey)) {
            RM.attr(sKey, mAttr[sKey]);
        }
    }
})(PARAM);`);

const accessibilityState = template(`(function(oSpec){
    if (oSpec.element) {
        RM.accessibilityState(oSpec.element, oSpec.props);
    } else {
        RM.accessibilityState(oSpec.props);
    }
})(PARAM);`);

const styleHanderLegacy = template(`(function(mS){
    var mStyles = mS || {};
    if (mStyles instanceof Array) {
        for (var i = 0; i < mStyles.length; ++i) {
            if (mStyles[i] && mStyles[i].name && mStyles[i].value !== null) {
                RM.addStyle(mStyles[i].name, mStyles[i].value);
            }
        }
    } else {
        for (var sKey in mStyles) {
            if (mStyles.hasOwnProperty(sKey) && mStyles[sKey] !== null) {
                RM.addStyle(sKey, mStyles[sKey]);
            }
        }
    }
    RM.writeStyles();
})(PARAM);`);


const classHanderLegacy = template(`(function(mC){
    var mClasses = mC || {};
    if (mClasses instanceof Array) {
        for (var i = 0; i < mClasses.length; ++i) {
            if (mClasses[i]) {
                RM.addClass(mClasses[i]);
            }
        }
    } else {
        for (var sKey in mClasses) {
            if (mClasses.hasOwnProperty(sKey) && mClasses[sKey]) {
                RM.addClass(sKey);
            }
        }
    }
})(PARAM);`);

const attributesHandlerLegacy = template(`(function(mA){
    var mAttr = mA || {};
    for (var sKey in mAttr) {
        if (mAttr.hasOwnProperty(sKey)) {
            RM.writeAttributeEscaped(sKey, mAttr[sKey]);
        }
    }
})(PARAM);`);

const accessibilityStateLegacy = template(`(function(oSpec){
    if (oSpec.element) {
        RM.writeAccessibilityState(oSpec.element, oSpec.props);
    } else {
        RM.writeAccessibilityState(oSpec.props);
    }
})(PARAM);`);

module.exports = {
    styles: function(rm, param) {
        return styleHander({RM: rm, PARAM: param});
    },
    classes: function(rm, param) {
        return classHander({RM: rm, PARAM: param});
    },
    attributes: function(rm, param) {
        return attributesHandler({RM: rm, PARAM: param});
    },
    accessibility: function(rm, param) {
        return accessibilityState({RM: rm, PARAM: param});
    },
    legacy: {
        styles: function(rm, param) {
            return styleHanderLegacy({RM: rm, PARAM: param});
        },
        classes: function(rm, param) {
            return classHanderLegacy({RM: rm, PARAM: param});
        },
        attributes: function(rm, param) {
            return attributesHandlerLegacy({RM: rm, PARAM: param});
        },
        accessibility: function(rm, param) {
            return accessibilityStateLegacy({RM: rm, PARAM: param});
        }
    }
}
