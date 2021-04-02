/* global oRm */
var sColor = "red";
oRm.renderV2(
    <span style={ {color: sColor} }>My Text</span>
);

sColor = "green"
oRm.renderV2(
    <span style={ {color: sColor} }>My Text</span>
);

oRm.renderV2(
    <span style={ [{name: "color", value: "red"}] }>My Text</span>
);

oRm.renderV2(
    <span style="color: red">My Text</span>
);

