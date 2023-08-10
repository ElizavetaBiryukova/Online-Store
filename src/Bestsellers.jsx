import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const BestSellers = () => {

    const [products, setProducts] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products')
        promise.then((res) => {
            const products = res.data
            setProducts(products)
        })
    }, [])

    const navigateToProductHandler = (id) => {
        navigate(`/product/${id}`);
    }


    return (
        <div className="bestSeller">
            <h2>BestSellers</h2>
            <div className="cards">

                {
                    products.map((el) => {

                        return (
                            <div className="card" onClick={() => navigateToProductHandler(el.id)}>
                                <img src={el.image} alt="img" />
                                <h4>{el.title}</h4>
                                <p className="price">${el.price}</p>
                                <button>Show more</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}