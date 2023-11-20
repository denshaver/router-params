import { useNavigate } from "react-router-dom";

const HomePage = ({ products }) => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h2>Nike store</h2>
      </header>
      <main>
        <div className="products-container">
          {products.map((item) => {
            return (
              <div className="product">
                <img src={item.image} alt="" />
                <h3>{item.title}</h3>
                <span>{item.price}</span>
                <button onClick={() => navigate(`/products/${item.id}`)}>
                  Add to cart
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default HomePage;
