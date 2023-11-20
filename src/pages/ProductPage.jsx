import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const ProductPage = ({ products }) => {
  const navigate = useNavigate();
  const { productID } = useParams();

  const neededProduct = products.find((item) => item.id === Number(productID));

  useEffect(() => {
    if (products.length >= 1 && !neededProduct) {
      setTimeout(() => {
        navigate("/products");
      }, 1500);
    }
  }, [products]);

  if (!neededProduct) {
    return (
      <>
        <header>
          <h2>Nike store</h2>
        </header>
        <main>
          <div className="info">
            <h2>Loading...</h2>
            <p>
              Redirecting you to the product page. If it's too long{" "}
              <Link to="/products">Click Here</Link>
            </p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <header>
        <h2>Nike store</h2>
      </header>
      <main>
        <img src={neededProduct.image} alt="" />
        <div className="product-info">
          <h1>{neededProduct.title}</h1>
          <h2>{neededProduct.category}</h2>
          <b>{neededProduct.price}$</b>
          <div className="divider"></div>
          <p>{neededProduct.description}</p>
          <button>Add to cart</button>
        </div>
      </main>
    </>
  );
};

export default ProductPage;
