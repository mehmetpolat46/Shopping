import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotals } from "../redux/slices/cartSlice";
import SepetCard from "../components/MyCart";
import { Link } from "react-router-dom";

const CartTotal = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div className="total ms-4 d-flex flex-column align-items-center">
      <h2 className="mb-5 fw-bold text-center mt-3">Alışveriş Sepeti</h2>
      {cart.cartItems.length === 0 ? (
        <div>
          <p>Sepetin Henüz Boş</p>
          <div>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span className="text-success">Alışverişe Başla</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div>
            {cart.cartItems?.map((cartItem) => (
              <SepetCard key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
          <div
            style={{ borderTop: "2px solid #ccc" }}
            className="d-flex align-items-center justify-content-between ms-5 me-5"
          >
            <button
              className="border-0 p-2 rounded-2 text-bg-danger"
              onClick={() => dispatch(clearCart())}
            >
              Temizle
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span className="fw-bold">Toplam : </span>
                <span className="amount text-success">
                  ${cart.cartTotalAmount}
                </span>
              </div>
              <p className="fw-light">Vergiler dahil toplam fiyat</p>
              <button className="ms-5 mb-3 border-0 p-2 rounded-2 text-bg-info">
                Kontrol Et
              </button>
              <div className="continue-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span className="text-success mb-2">Alışverişe Devam Et</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartTotal;
