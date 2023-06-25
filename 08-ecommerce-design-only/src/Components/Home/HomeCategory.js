import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import CategoryCard from "./../Category/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../RTK/categoriesSlice";

const HomeCategory = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  const categoriesWrap = loading ? (
    <div style={{ textAlign: "center" }}>
      <Spinner animation="border" variant="dark" />
    </div>
  ) : categories.data ? (
    categories.data
      .slice(0, 5)
      ?.map((category) => (
        <CategoryCard
          key={category._id}
          title={category.name}
          img={category.image}
        />
      ))
  ) : (
    <h1>لا توجد اقسام</h1>
  );
  return (
    <Container>
      <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {categoriesWrap}
      </Row>
    </Container>
  );
};

export default HomeCategory;
