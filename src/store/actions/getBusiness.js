import { gql } from '@apollo/client';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getBusiness = createAsyncThunk(
    'getBusiness',
    async (
        payload,
        {
            extra: {
                gqlClient: { query },
            },
        },
    ) => {
        const queryResponse = await query({
            query: gql`
                {
                    business(id: "garaje-san-francisco") {
                        name
                        id
                        alias
                        rating
                        url
                    }
                }
            `,
        });
        console.info(queryResponse);
    },
);
export default getBusiness;
