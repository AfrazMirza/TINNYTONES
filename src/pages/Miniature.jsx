import React , {useEffect} from 'react';
import ProductCard from '../components/ProductCard';
import all_products from '../assets/all_product';

function Miniature() {

  useEffect(()=>{
window.scrollTo(0,0)
  })
  const miniItems = all_products.filter((product) => {
    return product.category === 'miniature';
  });

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-center leading-wide text-2xl mb-12 font-medium">
        Kota Bundi Miniature paintings
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {miniItems.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default Miniature;
