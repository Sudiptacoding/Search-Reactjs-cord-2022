import React from 'react';

const Item = (props) => {
    const {name,email,phone,username} = props.item;
    return (
        <div>
            {email}
            <br />
            {name}
            <br />
            {phone}
            <br />
            {username}
        </div>
    );
};

export default Item;