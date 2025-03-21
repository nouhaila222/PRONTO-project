import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../axios'
import Loader from '../components/Loader'

const CartResume = ({ RealTotal }) => {

    return (
        <div className="w-3/12  ml-4 bg-white drop-shadow-lg p-4 c-c-c rounded-2xl">
            <div className="w-full pb-4 text-xl border-b-2 font-bold  border-b-black ">RÉSUMÉ DU PANIER</div>
            <div className="w-full  mt-5 r-b-c">
                <span className="font-bold opacity-70">
                    Sous-total
                </span>
                <h1 className="font-bold text-xl text-center">
                    {Math.floor(RealTotal)} MAD
                </h1>
            </div>

            <p className="text-green-500 font-bold mt-10 ">
                Félicitations ! Vous avez la livraison
                gratuite
            </p>
            <div className="c-s-s w-full mt-5">
                <span className="opacity-80">
                    Code Promo
                </span>
                <input type="text" className="rounded-xl  w-full p-4 border border-gray-300 mt-2  outline-blue-500" placeholder='Entre le code de promo' />
                <div className="w-full  mt-2 r-e-c">
                    <button className='bg-blue-500 text-white p-1 px-4 font-bold rounded-md'>Valider </button>
                </div>


            </div>

            <Link className='w-full p-4 bg-blue-800 text-white font-semibold text-center mt-12' >
                Commander ({Math.floor(RealTotal * 1.2)} MAD)

            </Link>
        </div>

    )
}


const CartProduct = ({ prod, onQtChage, onDelete }) => {
    const [quantite, setQantite] = useState(Math.floor(Math.random()*10 +1))
    const handelChangeQ = (t) => {

        if (t) {
            setQantite(quantite + 1)
        } else {
            if (quantite > 1) {

                setQantite(quantite - 1)
            }
        }
    }


    useEffect(() => {
        onQtChage({ id: prod.id, total: quantite * prod.price })
    }, [quantite])

    return (
        <div className='w-full r-p-c p-2 bg-white  rounded-2xl '>
            <div className="w-1/5  r-c-c p-2">
                <img src={prod.images[0]} className='max-h-40' alt="" />
            </div>

            <div className="w-1/5 r-c-c p-2">
                <h1 className='text-center font-semibold '>{prod.title}</h1>
            </div>

            <div className="w-1/5 r-c-c p-2">
                <h1 className='text-center font-semibold '>{prod.price}</h1>
            </div>

            <div className="w-1/5 r-c-c p-2">
                <button onClick={() => handelChangeQ()} className='mr-2 cursor-pointer '>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-440v-80h560v80H200Z" /></svg>
                </button>
                <h1 className='text-center p-4   font-semibold '>{quantite}</h1>
                <button className='ml-2  cursor-pointer ' onClick={() => handelChangeQ(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                </button>
            </div>
            <div className="w-1/5 r-c-c p-2">
                <h1 className='text-center font-semibold '>{Math.floor(prod.price * quantite)} MAD</h1>
            </div>
            <div className="w-1/5 r-c-c p-2" >
                <button onClick={() => onDelete(prod.id)} className='c-c-c text-red-500 font-semibold cursor-pointer ' >
                    <svg className='stroke-red-600 stroke-2 mb-2 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M4 7l16 0"></path> <path d="M10 11l0 6"></path> <path d="M14 11l0 6"></path> <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path> <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path> </svg>
                    Supprimer
                </button>
            </div>
        </div>
    )
}

const Panier = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setLoding] = useState(false);
    const [ObjectTotalCost, setObjectTotalCost] = useState({});
    const [RealTotal, setRealTotal] = useState(0);

    const getFakeProducts = async () => {
        setLoding(true)
        let resp = await api.get('/products')
        resp.data.products.map(p => {
            setObjectTotalCost(cur => ({ ...cur, id: { id: p.id, total: p.price * p.stock } }))
        })
        console.log(resp.data.products);
        
        setProducts(resp.data.products)
        setLoding(false)
    }

    useEffect(() => {
        setRealTotal(Object.keys(ObjectTotalCost).reduce((c, e) => c + ObjectTotalCost[e].total, 0))
    }, [ObjectTotalCost])

    useEffect(() => {
        getFakeProducts()
    }, []);


    function deleteProd(id) {
        delete ObjectTotalCost[id];
        setProducts(products.filter(e => e.id != id))
        setRealTotal(Object.keys(ObjectTotalCost).reduce((c, e) => c + ObjectTotalCost[e].total, 0))

    }

    return (
        <div className='w-full p-2 h-full'>
            <div className="w-full r-b-c p-4">
                <div className="r-e-c">
                    <img src="media/cartLogo.png" className='h-10' alt="" />
                    <h1 className="text-2xl ml-4 font-semibold opacity-80">
                        Votre Panier
                    </h1>
                </div>

            </div>
            <div className="w-full  r-b-s mt-10 h-10/12">
                <div className="c-s-s w-10/12 mr-4 h-full">
                    <div className="w-full r-p-c p-4">
                        <div className="w-1/5  r-c-c p-2">
                            <h1 className="font-semibold text-md">
                                IMAGE DE PRODUIT
                            </h1>
                        </div>
                        <div className="w-1/5  r-c-c p-2">
                            <h1 className='font-semibold text-md'>NOM DU PRODUIT</h1>
                        </div>
                        <div className="w-1/5  r-c-c p-2">
                            <h1 className='font-semibold text-md'>PRIX</h1>
                        </div>
                        <div className="w-1/5  r-c-c p-2">
                            <h1 className='font-semibold text-md'>QUANTITE</h1>
                        </div>
                        <div className="w-1/5  r-c-c p-2">
                            <h1 className='font-semibold text-md'>SOUS-TOTAL</h1>
                        </div>
                        <div className="w-1/5  r-c-c p-2">
                            <h1 className='font-semibold text-md'>ACTION</h1>
                        </div>

                    </div>
                    <div className="w-full c-s-s max-h-full scrl_none overflow-auto ">

                        {
                            isLoading ?
                                <Loader />
                                :
                                <>
                                    {
                                        products.map(p => {
                                            return <CartProduct onDelete={deleteProd} onQtChage={(e) => setObjectTotalCost(c => ({ ...c, [e.id]: e }))} key={p.id} prod={p} />
                                        }
                                        )
                                    }

                                </>

                        }


                    </div>
                </div>

                <CartResume RealTotal={RealTotal} />
            </div>
        </div>
    )
}

export default Panier
