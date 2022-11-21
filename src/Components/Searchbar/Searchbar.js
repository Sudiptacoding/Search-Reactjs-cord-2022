import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Searchbar = () => {
    const [data, setData] = useState([]);

    const [searchApiData, setSearchApiData] = useState([]);
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setSearchApiData(data)
            }
            )
    }, []);
    const handleChange = (e) => {
        if (e.target.value === '') {
            setData(searchApiData)
        } else {
            const filterResult = searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.email.toLowerCase().includes(e.target.value.toLowerCase()))
            if (filterResult.length > 0) {
                setData(filterResult)
            }
            else {
                setData([{ name: 'Your Search Name not Found', email: 'Your Search Email not Found' }])
            }

        }
        setFilterValue(e.target.value)
    }


    return (
        <>
            <input type="search" placeholder='Search' value={filterValue} onChange={(e) => handleChange(e)} />

            <div>
                {
                    data.map(item => <Item item={item} key={item.id}></Item>)
                }
            </div>

        </>
    );
};

export default Searchbar;