import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card
      className="shadow"
      style={{
        maxWitdh: "18rem",
        border: "none",
        top: "30px",
        margin: "auto",
        height: "28rem",
      }}
    >
      <Card.Img
        height={200}
        className="object-fit-contain mt-2 "
        variant="top"
        src={product.images}
      />
      <div className="d-flex align-items-center justify-content-around mt-4">
        <p className="text-success fw-bold">${product.price}</p>
      </div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="text-black">
            {product.title.slice(0, 20)}
          </Card.Title>
          <Card.Text>
            <p>{product.description.slice(0, 40) + "..."}</p>
          </Card.Text>
        </div>

        <Button
          style={{ backgroundColor: "orange" }}
          onClick={() => dispatch(addCart(product))}
          variant="primary"
        >
          Sepete Ekle
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
