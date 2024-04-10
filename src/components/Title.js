import React from 'react';

const Title = (props) => {

    return (
        <div>
            <h1>{props.appTitle}</h1>
            <h2>{props.menu}</h2>
        </div>
    );
};

export default Title;
