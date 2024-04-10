import React from 'react';
import MenuItem from "./MenuItem";

const Menu = (props) => {

    return (
        <ul>
            {/*{props.menu.map(item => (*/}
            {/*    <li>{item}</li>*/}
            {/*))}*/}

            {/*{props.menu.map(item => (*/}
            {/*    <MenuItem*/}
            {/*        item={item}*/}
            {/*    />*/}
            {/*))}*/}

            {props.menu.map((item, ind) => (
                <MenuItem
                    key={ind}
                    item={item}
                    ind={ind}
                />
            ))}

        </ul>
    );
};

export default Menu;
