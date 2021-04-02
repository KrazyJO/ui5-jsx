/* global oRm */
var bInclude = false;
oRm.renderV2(
    <div>
    {
        bInclude && <span>I am here!</span>
    }
    </div>
);

bInclude = true;
oRm.renderV2(
    <div>
    {
        bInclude && <span>I am here!</span>
    }
    </div>
);
