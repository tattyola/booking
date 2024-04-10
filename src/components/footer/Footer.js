import React from 'react';
import FooterItem from "./FooterItem";

const Footer = (props) => {
    return (
        <div>
            <ul>
                {props.footer.map(el => (
                    <FooterItem
                        el={el}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Footer;
