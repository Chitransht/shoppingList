import { useEffect, useState } from "react";

const useFetchList = (url) => {
    const [products, setProducts] = useState([]);

    const fetchproducts = async () =>{
        const response = await fetch(url);
        const apidata = await response.json();
        setProducts(apidata.products);
    }

    useEffect(() => {
        fetchproducts();
    }, []);

    return {products};
}

export default useFetchList