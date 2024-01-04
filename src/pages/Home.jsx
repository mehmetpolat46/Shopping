import { useGetProductsQuery } from "../redux/query/productsApi";
import { Col, Row } from "react-bootstrap";
import ProductCard from "./../components/ProductCard";

const Home = () => {
  const { data, isError, isLoading } = useGetProductsQuery();

  return (
    <div className="ms-4 align-items-center justify-content-center ">
      <div className="me-2 d-flex align-items-center justify-content-center mt-3 fw-bold">
        <h2>Ürünler</h2>
      </div>

      <Row
        xs={1}
        sm={2}
        md={3}
        lg={3}
        xl={4}
        xxl={5}
        className="g-4 justify-content-center align-items-center"
      >
        {isLoading ? (
          <p>Yükleniyor...</p>
        ) : isError ? (
          <p>Üzgünüz :( Beklenmedik bir hata oluştu</p>
        ) : (
          data.map((product, key) => (
            <Col key={key}>
              <ProductCard key={product.id} product={product} />
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default Home;
