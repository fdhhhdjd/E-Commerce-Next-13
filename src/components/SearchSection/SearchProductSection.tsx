"use client";

import { PRODUCTS_PER_PAGE } from "@/src/utils/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import NotFoundText from "../NotFoundText";
import ProductGrids from "../ProductGrids";
import PaginationButtons from "../buttons/PaginationButtons";
import Loader from "../loaders/Loader";

interface SearchProductSectionProp {
  search: string;
  onClose?: () => void;
}
const SearchProductSection = ({
  search,
  onClose,
}: SearchProductSectionProp) => {
  const [page, setPage] = useState(1);

  const fetchProducts = async (nameLike: string) => {
    const response = await axios.get(`http://localhost:5000/initProducts`, {
      params: {
        name_like: nameLike,
      },
    });
    return response.data;
  };

  const { data: products, isLoading } = useQuery(
    ["initProducts", search],
    () => fetchProducts(search),
    {
      onError: (err) => console.log(err),
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <Loader />;
  }
  if (!products || !products.length) {
    return <NotFoundText>No Products Found.</NotFoundText>;
  }

  return (
    <>
      <ProductGrids products={products} handleClickAfter={onClose} />
      {products.length !== 0 && (
        <PaginationButtons
          currentPage={page}
          disableNextPage={products.length < PRODUCTS_PER_PAGE}
          handlePrev={() => page !== 1 && setPage(page - 1)}
          handleNext={() =>
            products.length >= PRODUCTS_PER_PAGE && setPage(page + 1)
          }
        />
      )}
    </>
  );
};

export default SearchProductSection;
