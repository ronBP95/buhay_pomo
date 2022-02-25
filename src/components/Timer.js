import React from 'react';

const Timer = () => {
    const classes = this.props.show ? 'Dialog' : 'Dialog hidden';
    return (
        <div class={classes} onMouseDown={this._dragStart} onMouseMove={this._dragging} onMouseUp={this._dragEnd}>
            <div class="DialogTitle">My Dialog</div>
            <div class="Contents">
                Contents of the dialog:
                - 1
                - 2
                - 3
            </div>
            <div class="closeButton" onClick={this.props.onClose}>
                Close
            </div>
        </div>
    );
}

export default Timer;


