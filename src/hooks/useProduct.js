import { useEffect, useState } from 'react';

const useProduct = id => {
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://limitless-hollows-00488.herokuapp.com/booking/${id}`;
        console.log('url holo gia', url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [id]);
    return [service]
};

export default useProduct;