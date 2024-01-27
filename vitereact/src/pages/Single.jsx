import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Single() {
    const { id } = useParams();
    console.log(id);



    return (
        <div>
            <h2>Single</h2>

        </div>
    );
}

export default Single;
