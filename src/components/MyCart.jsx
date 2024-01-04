import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { decreaseCart, addCart, removeCart } from "../redux/slices/cartSlice";

const MyCart = ({ cartItem }) => {
  const dispatch = useDispatch();

  return (
    <Card className="productCard border-0  ms-3 me-3 ">
      <Card.Body className="d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3 ">
          <Card.Img
            src={cartItem.images}
            alt={cartItem.title}
            className="mr-2 object-fit-contain"
            style={{ width: "70px", height: "100px" }}
          />
          <div>
            <Card.Title className="text-black mb-3 fw-bolder">
              {cartItem.title.slice(0, 20)}
            </Card.Title>
            <Card.Text
              className="fw-bold d-md-block d-none"
              style={{ maxWidth: "150px", fontSize: "10px" }}
            >
              {cartItem.description.slice(0, 50)}
            </Card.Text>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3 justify-content-around ">
          <div className="ml-auto d-flex align-items-center gap-3">
            <Card.Text className="mt-3">${cartItem.price.toFixed(1)}</Card.Text>
            <div className=" d-flex align-items-center">
              <Button
                className="fs-6 p-1 px-2"
                variant="outline-secondary"
                onClick={() => dispatch(decreaseCart(cartItem))}
              >
                -
              </Button>
              <div className="mx-2 ">{cartItem.cartQuantity}</div>
              <Button
                className=" p-1 px-2"
                variant="outline-secondary"
                onClick={() => dispatch(addCart(cartItem))}
              >
                +
              </Button>
            </div>
            <Card.Text className=" ml-2 text-success">
              ${cartItem.price.toFixed(1) * cartItem.cartQuantity}
            </Card.Text>
          </div>
          <Button
            variant="danger"
            onClick={() => dispatch(removeCart(cartItem))}
          >
            Kaldır
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MyCart;
