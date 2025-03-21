import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import TrendingView from '../components/trendingView';

const CartResume = ({ RealTotal }) => {
    return (
        <div className="w-3/12 ml-1 mb-6 bg-white drop-shadow-lg p-4 rounded-2xl">
            <div className="w-full pb-4 text-xl border-b-2 font-bold border-b-black">RÉSUMÉ DU PANIER</div>
            <div className="w-full mt-5 flex justify-between">
                <span className="font-bold opacity-70">Sous-total</span>
                <h1 className="font-bold text-xl text-center">{Math.floor(RealTotal)} MAD</h1>
            </div>
            <p className="text-green-500 font-bold mt-10">Félicitations ! Vous avez la livraison gratuite</p>
            <div className="mt-5">
                <span className="opacity-80">Code Promo</span>
                <input type="text" className="rounded-xl w-full p-4 border border-gray-300 mt-2 outline-blue-500" placeholder='Entrez le code promo' />
                <div className="w-full mt-2 flex justify-end">
                    <button className='bg-blue-500 text-white p-1 px-4 font-bold rounded-md'>Valider</button>
                </div>
            </div>
            <Link className='w-full block p-4 bg-blue-800 text-white font-semibold text-center mt-12 rounded-md'>
                Commander ({Math.floor(RealTotal * 1.2)} MAD)
            </Link>
        </div>
    );
};

const CartProduct = ({ prod, onQtChage, onDelete }) => {
    const [quantite, setQantite] = useState(1);

    const handleChangeQ = (increase) => {
        setQantite(prevQty => {
            const newQty = increase ? prevQty + 1 : Math.max(1, prevQty - 1);
            onQtChage({ id: prod.id, total: newQty * prod.price });
            return newQty;
        });
    };

    return (
        <div className='w-full flex justify-between p-2 bg-white rounded-2xl'>
            <img src={prod.images[0]} className='max-h-40 w-1/5' alt={prod.title} />
            <h1 className='text-center font-semibold w-1/5'>{prod.title}</h1>
            <h1 className='text-center font-semibold w-1/5'>{prod.price} MAD</h1>
            <div className="w-1/5 flex justify-center items-center">
                <button onClick={() => handleChangeQ(false)} className='mr-2'>➖</button>
                <h1 className='text-center p-4 font-semibold'>{quantite}</h1>
                <button onClick={() => handleChangeQ(true)} className='ml-2'>➕</button>
            </div>
            <h1 className='text-center font-semibold w-1/5'>{quantite * prod.price} MAD</h1>
            <button onClick={() => onDelete(prod.id)} className='text-red-500 font-semibold cursor-pointer w-1/5'>❌ Supprimer</button>
        </div>
    );
};

const Panier = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoding] = useState(false);
    const [ObjectTotalCost, setObjectTotalCost] = useState({});
    const [RealTotal, setRealTotal] = useState(0);

    const addToCart = (product) => {
        setProducts(prevProducts => [...prevProducts, product]);
        setObjectTotalCost(prev => ({
            ...prev,
            [product.id]: { id: product.id, total: product.price }
        }));
    };

    const getFakeProducts = async () => {
        setLoding(true);
        let resp = await api.get('/products');

        let initialTotalCost = {};
        resp.data.products.forEach(p => {
            initialTotalCost[p.id] = { id: p.id, total: p.price * 1 };
        });
        setObjectTotalCost(initialTotalCost);
        setProducts(resp.data.products);
        setLoding(false);
    };

    useEffect(() => {
        setRealTotal(
            Object.values(ObjectTotalCost).reduce((total, item) => total + item.total, 0)
        );
    }, [ObjectTotalCost]);

    useEffect(() => {
        getFakeProducts();
    }, []);

    function deleteProd(id) {
        setObjectTotalCost(current => {
            const updated = { ...current };
            delete updated[id];
            return updated;
        });

        setProducts(prevProducts => prevProducts.filter(e => e.id !== id));
    }

    return (
        <div className='w-full p-2 h-full'>
            <div className="w-full flex items-center p-4">
                <img src="media/cartLogo.png" className='h-10' alt="" />
                <h1 className="text-2xl ml-4 font-semibold opacity-80">Votre Panier</h1>
            </div>
            <div className="w-full flex mt-10 h-10/12">
                <div className="w-10/12 mr-4 h-full">
                    <div className="w-full flex p-4 bg-gray-100 rounded-t-2xl">
                        <h1 className="w-1/5 font-semibold text-md">IMAGE</h1>
                        <h1 className="w-1/5 font-semibold text-md">NOM</h1>
                        <h1 className="w-1/5 font-semibold text-md">PRIX</h1>
                        <h1 className="w-1/5 font-semibold text-md">QUANTITÉ</h1>
                        <h1 className="w-1/5 font-semibold text-md">SOUS-TOTAL</h1>
                        <h1 className="w-1/5 font-semibold text-md">ACTION</h1>
                    </div>
                    <div className="w-full max-h-full overflow-auto bg-white">
                        {isLoading ? <Loader /> : (
                            products.map(p => (
                                <CartProduct 
                                    onDelete={deleteProd} 
                                    onQtChage={e => setObjectTotalCost(c => ({ ...c, [e.id]: e }))} 
                                    key={p.id} 
                                    prod={p} 
                                />
                            ))
                        )}
                    </div>
                </div>
                <CartResume RealTotal={RealTotal} />
            </div>
            {/* <TrendingView addToCart={addToCart} /> */}
        </div>
    );
};

export default Panier;
