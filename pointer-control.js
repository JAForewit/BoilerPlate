//pointer control
canvas.addEventListener('touchstart', startHandler, { passive: false });
canvas.addEventListener('mousedown', startHandler);
function startHandler(e) {
    if (e.type === 'mousedown') {
        canvas.addEventListener('mousemove', moveHandler, { passive: false });
        canvas.addEventListener('mouseup', endHandler);
        mouse = { x: e.clientX, y: e.clientY };
    } else {
        canvas.addEventListener('touchmove', moveHandler, { passive: false });
        canvas.addEventListener('touchend', endHandler);
        canvas.addEventListener('touchcancel', endHandler);
        mouse = copyTouch(e.targetTouches[0]);
        e.preventDefault();
        e.stopPropagation();
    }
    /////////////////////////
    //handle pointer start
    /////////////////////////
}
function moveHandler(e) {
    mouse = (e.type == 'mousemove')
        ? { x: e.clientX, y: e.clientY }
        : copyTouch(e.targetTouches[0]);

    e.preventDefault();
    e.stopPropagation();
    /////////////////////////
    //handle pointer move
    /////////////////////////
}
function endHandler(e) {
    if (e.type === 'mouseup') {
        canvas.removeEventListener('mousemove', moveHandler);
        canvas.removeEventListener('mouseup', endHandler);
    } else if (e.targetTouches.length == 0 || e.targetTouches[0].identifier != me.pointer.identifier) {
        canvas.removeEventListener('touchmove', moveHandler);
        canvas.removeEventListener('touchend', endHandler);
        canvas.removeEventListener('touchcancel', endHandler);
    } else {
        return;
    }
    /////////////////////////
    //handle pointer end
    /////////////////////////
}
function copyTouch(touch) {
    return { identifier: touch.identifier, x: touch.clientX, y: touch.clientY };
}