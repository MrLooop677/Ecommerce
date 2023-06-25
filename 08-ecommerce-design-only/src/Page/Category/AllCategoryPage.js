import React from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Uitily/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategories } from "../../RTK/categoriesSlice";

const AllCategoryPage = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getAllCategories(2));
  }, [dispatch]);
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer categories={categories.data} loading={loading} />
      <Pagination pageCount={categories?.paginationResult?.numberOfPages} />
    </div>
  );
};

export default AllCategoryPage;
