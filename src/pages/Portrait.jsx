import React , {useEffect} from 'react';
import ProductCard from '../components/ProductCard';
import all_products from '../assets/all_product';
function Portrait() {
    useEffect(()=>{
window.scrollTo(0,0)
  })
  const portraitItems = all_products.filter((product) => {
    return product.category === 'portrait';
  });
  console.log(portraitItems);
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-center leading-wide text-2xl mb-12 font-medium">
        Portraits
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {portraitItems.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default Portrait;
