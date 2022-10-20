import PorpTypes from 'prop-types';
import React, { useState } from 'react';
import { useGetPostsQuery, useGetPostsByIdQuery } from '../../../app/store/services/listView';
import './styles.scss';

const ListItem = ({ id }) => {
    const { data, error, isLoading } = useGetPostsByIdQuery(id);
    if (isLoading || error || !data) {
        return 'Loading';
    }
    return <strong className="listChild"> - {data?.posts[0].author}</strong>;
};
ListItem.propTypes = {
    id: PorpTypes.number,
};

const ListView = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { data, error, isLoading } = useGetPostsQuery();
    if (isLoading || error || !data) {
        return 'Loading';
    }
    const listData = data?.posts.map(({ id, title }) => (
        <li
            className="listItem"
            onClick={() => {
                setSelectedIndex(id);
            }}
            key={id}
        >
            {title}
            {selectedIndex === id && <ListItem id={id} />}
        </li>
    ));
    return (
        <>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <br />
            <p className="alert-success">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="alert-info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="alert-error">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <ul>{listData}</ul>
        </>
    );
};

export default ListView;
