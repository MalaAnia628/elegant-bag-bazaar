
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product, getColorLabel } from '../../utils/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="product-card group relative overflow-hidden animate-fade-up transition-all duration-300 h-full flex flex-col">
      <Link to={`/product/${product.id}`} className="block">
        <div className="product-image-wrapper bg-gray-100 overflow-hidden rounded-lg">
          {!isLoaded && (
            <div className="absolute inset-0 loading-shimmer" />
          )}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`product-image transition-opacity duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
          />
          <div className="absolute bottom-0 left-0 w-full p-3">
            <div className="inline-block bg-neobags-cream/90 backdrop-blur-sm px-3 py-1 text-xs rounded-full">
              {product.collection}
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col flex-grow">
          <h3 className="text-lg font-serif mb-1">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-2">
            {product.colors.map(color => getColorLabel(color)).join(', ')}
          </p>
          <p className="text-lg font-medium mt-auto">{product.price} zł</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
