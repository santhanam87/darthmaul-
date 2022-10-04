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
    return <ul>{listData}</ul>;
};

export default ListView;
