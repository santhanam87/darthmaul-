import fetch from 'cross-fetch';

const getRandomData = async () => {
    const request = await fetch('https://api.json-generator.com/templates/BfrahissgAmh/data', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${process.env.JSON_GEN_KEY}`,
        },
    });
    const requestData = await request.json();
    return requestData;
};

export default getRandomData;
