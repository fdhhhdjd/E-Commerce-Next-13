import { FullProductClient } from "../types/types";
import NotFoundText from "./NotFoundText";
import ProductCard from "./cards/ProductCard";

interface ProductGridProps {
  products: FullProductClient[];
  handleClickAfter?: () => void;
}

const ProductGrids = ({ products, handleClickAfter }: ProductGridProps) => {
  if (!products.length) {
    return <NotFoundText>No Product Found.</NotFoundText>;
  }

  return (
    <div className="mx-auto max-w-6xl w-full grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-1">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          {...product}
          handleClickAfter={handleClickAfter}
        />
      ))}
    </div>
  );
};

export default ProductGrids;
