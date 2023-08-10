import { useEffect, useState } from "react";
import axios from 'axios';

export const BestSellers = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const promise = axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products')
        promise.then((res) => {
            const products = res.data
            setProducts(products)
        })
    }, [])


    return (
        <div className="bestSeller">
            <h2>BestSellers</h2>
            <div className="cards">

                {
                    products.map((el) => {

                        return (
                            <div className="card">
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