//eslint-disable-next-line no-unused-vars
function render(oRenderManager, bInclude) {
    oRenderManager.renderV2(
        <div>
        {
            bInclude && <span>I am here!</span>
        }
        </div>
    );
}
