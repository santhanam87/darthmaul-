import React from 'react';
import { useGetPostsQuery } from '../../../app/store/services/listView';

const ListView = () => {
    const { data, error, isLoading } = useGetPostsQuery();
    if (isLoading || error || !data) {
        return 'Loading';
    }
    const listData = data?.posts.map(({ id, title }) => <li key={id}>{title}</li>);
    return <ul>{listData}</ul>;
};

export default ListView;
