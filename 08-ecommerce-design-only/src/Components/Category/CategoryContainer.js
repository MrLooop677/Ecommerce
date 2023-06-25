import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";
const CategoryContainer = ({ loading, categories }) => {
  const categoriesWrap = loading ? (
    <div style={{ textAlign: "center" }}>
      <Spinner animation="border" variant="dark" />
    </div>
  ) : categories ? (
    categories?.map((category) => (
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
      <div className="admin-content-text mt-2 ">كل التصنيفات</div>
      <Row className="my-2 d-flex justify-content-center">{categoriesWrap}</Row>
    </Container>
  );
};

export default CategoryContainer;
