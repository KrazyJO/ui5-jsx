const t = require("babel-types");
const templates = require("./templates");

/**
 * Class which builds up the JavaScript code for a JSX expression based
 * on UI5 RenderManager calls.
 */
function Renderer({rm, version}) {
    this.version = version;
    this.rm = rm;
    this.content = [];
}

Renderer.prototype.isLegacy = function() {
    return this.version === 1;
}

Renderer.prototype.member = function(method) {
    return t.memberExpression(t.identifier(this.rm), t.identifier(method));
};

Renderer.prototype.call = function(name, args) {
    let member = this.member(name),
        call = t.callExpression(member, args);
    this.content.push(t.expressionStatement(call));
}

Renderer.prototype.renderExpression = function(expression, escaped) {
    if (this.isLegacy()) {
        this.call(escaped ? "writeEscaped" : "write", [expression]);
    } else {
        this.call(escaped ? "text" : "unsafeHtml", [expression]);
    }
};

Renderer.prototype.renderPlain = function(value, escaped = false) {
    this.renderExpression(t.stringLiteral(value), escaped);
};

Renderer.prototype.renderExpressionWithFallback = function(expression) {
    let fallback = t.logicalExpression("||", t.parenthesizedExpression(expression), t.stringLiteral(""));
    this.renderExpression(fallback, true);
};

Renderer.prototype.renderAttributeExpression = function(name, expression, escaped = false) {
    if (this.isLegacy()) {
        this.call(escaped ? "writeAttributeEscaped" : "writeAttribute", [t.stringLiteral(name), expression]);
    } else {
        this.call("attr", [t.stringLiteral(name), expression]);
    }
};

Renderer.prototype.handleStyles = function(expression) {
    this.content.push(this.getTemplates().styles(t.identifier(this.rm), expression));
};

Renderer.prototype.handleAccessibilityData = function(expression) {
    this.content.push(this.getTemplates().accessibility(t.identifier(this.rm), expression));
};

Renderer.prototype.handleClasses = function(expression) {
    this.content.push(this.getTemplates().classes(t.identifier(this.rm), expression));
};

Renderer.prototype.handleSpreadAttribute = function(expression) {
    this.content.push(this.getTemplates().attributes(t.identifier(this.rm), expression));
};

Renderer.prototype.getTemplates = function() {
    if (this.isLegacy()) {
        return templates.legacy;
    }
    return templates;
}

Renderer.prototype.addClass = function(cls) {
    if (this.isLegacy()) {
        this.call("addClass", [t.stringLiteral(cls)]);
    } else {
        this.call("class", [t.stringLiteral(cls)]);
    }
};

Renderer.prototype.renderClasses = function() {
    this.call("writeClasses", []);
};

Renderer.prototype.renderControlData = function(expression) {
    this.call("writeControlData", [expression]);
};

Renderer.prototype.renderElementData = function(expression) {
    this.call("writeElementData", [expression]);
};

Renderer.prototype.renderControl = function(expression) {
    this.call("renderControl", [expression]);
};

Renderer.prototype.toFunctionCall = function() {
    let arrow = t.arrowFunctionExpression([], t.blockStatement(this.content));
    return t.callExpression(t.parenthesizedExpression(arrow), []);
};

Renderer.prototype.renderOpenStart = function(expression, controlData) {
    const args = [];
    args.push(t.stringLiteral(expression));
    if (controlData) {
        args.push(t.identifier(controlData));
    }
    this.call("openStart", args);
};

Renderer.prototype.renderOpenEnd = function(expression) {
    this.call("openEnd", []);
}

Renderer.prototype.renderClose = function(expression) {
    const lit = t.stringLiteral(expression);
    this.call("close", [lit]);
}

function isRenderCall(node) {
    return t.isCallExpression(node) && t.isMemberExpression(node.callee) &&
        (t.isIdentifier(node.callee.property, {name: "render"}) || 
            t.isIdentifier(node.callee.property, {name: "renderV2"})) &&
        t.isIdentifier(node.callee.object);
}

function extractRendererVersion(parent) {
    const calleePropertyName 
        = parent && parent.node ? parent.node.callee.property.name : "render";
    if (calleePropertyName === "renderV2") {
        return 2;
    }
    return 1;
}

function extractCalleeObjectName(parent) {
    return parent && parent.node ? parent.node.callee.object.name : "oRm";
}

function findRenderManager(path) {
    let parent = path.parentPath;
    while (parent && !isRenderCall(parent.node)) {
        parent = parent.parentPath;
    }
    return {
        rm: extractCalleeObjectName(parent),
        version: extractRendererVersion(parent)
    }
}

Renderer.forPath = function(path) {
    return new Renderer(findRenderManager(path));
};

Renderer.isParent = function(path) {
    return !!path.parent && isRenderCall(path.parent);
};

module.exports = Renderer;
