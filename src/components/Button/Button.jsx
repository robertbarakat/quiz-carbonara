import React from 'react';
import classnames from 'classnames';

function Button({ label, primary, secondary, ...rest }) {
    return (
        <button
            className={classnames('button-container', {
                primary: primary,
                secondary: secondary,
            })}
            {...rest}
        >
            {label}
        </button>
    );
}

export default Button;
