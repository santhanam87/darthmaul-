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
    const { data, error, isLoading } = useGetBusinessQuery('garaje-san-francisco');
    const [isLoadComponent, setLoadComponent] = useState(false);
    if (isLoading || error) {
        return null;
    }
    const loadOtherComp = () => {
        setLoadComponent(!isLoadComponent);
    };
    return (
        <>
            {isLoadComponent && <OtherComponent />}
            {data.business.name}
            <button type="button" onClick={loadOtherComp}>
                Load
            </button>
        </>
    );
};

export default BusinessItem;
