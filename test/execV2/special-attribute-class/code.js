/* global oRm */
var bIsBold = false;
oRm.renderV2(
    <span class={ {bold: bIsBold} }>My Text</span>
);

bIsBold = true;
oRm.renderV2(
    <span class={ {bold: bIsBold} }>My Text</span>
);

oRm.renderV2(
    <span class="bold">My Text</span>
);

oRm.renderV2(
    <span class={ ["bold", "italic"] }>My Text</span>
);
