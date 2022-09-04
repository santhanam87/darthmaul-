import React, { useState } from 'react';
import { useGetBusinessQuery, useGetSearchQuery } from '../../../store/services/yelp';

const OtherComponent = () => {
    const { data, error, isLoading } = useGetSearchQuery({ term: 'burrito', location: 'san francisco' });
    if (isLoading || error) {
        return null;
    }
    return <p>{JSON.stringify(data)}</p>;
};

const BusinessItem = () => {
    const { data, error, isLoading } = useGetBusinessQuery(2);
    const [isLoadComponent, setLoadComponent] = useState(false);
    if (isLoading || error) {
        return null;
    }
    const loadOtherComp = () => {
        setLoadComponent(!isLoadComponent);
    };
    const posts = data.posts.map(({ title, description, id }) => (
        <p key={id}>
            {title}-{description}
        </p>
    ));
    return (
        <>
            {isLoadComponent && <OtherComponent />}
            {posts}
            <button type="button" onClick={loadOtherComp}>
                Load
            </button>
        </>
    );
};

export default BusinessItem;
