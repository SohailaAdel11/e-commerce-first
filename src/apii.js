import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  const styles = {
    container: {
      display: "flex",
      gap: "50px",
      padding: "30px",
    },

    list: {
      width: "40%",
    },

    item: {
      border: "1px solid #ccc",
      padding: "10px",
      marginBottom: "10px",
      cursor: "pointer",
    },

    details: {
      width: "60%",
      display: "flex",
      gap: "30px",
    },

    image: {
      width: "300px",
      height: "300px",
      borderRadius: "10px",
    },

    sizeBox: {
      border: "1px solid #ccc",
      padding: "8px 12px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      {/* products list*/}
      {!selectedProduct && (
        <div style={styles.list}>
          {products.map((item) => (
            <div
              key={item.id}
              style={styles.item}
              onClick={() => setSelectedProduct(item)}
            >
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      )}

      {/* product details*/}
      {selectedProduct && (
        <div style={styles.details}>
          <img src={selectedProduct.images[0]} alt="" style={styles.image} />

          <div
            style={{
              margin: "0",
              padding: "50px",
              alignItems: "flex-start",
              textAlign: "left",
            }}
          >
            <p style={{ backgroundColor: "#EEF0F2" }}>New!</p>

            <h2>{selectedProduct.title}</h2>
            <h3>{selectedProduct.price}$</h3>

            <p>Brand: {selectedProduct.brand}</p>

            <ul style={{ padding: 0, listStyle: "none" }}>
              <li>{selectedProduct.category}</li>
              <li>Rating: {selectedProduct.rating}</li>
              <li>Stock: {selectedProduct.stock}</li>
            </ul>

            {/* Sizes */}
            <p style={{ color: "#252C32", fontSize: "10px" }}>Sizes</p>
            <br />
            <div className="Sizes" style={styles.sizes}>
              <span style={styles.sizeBox}>XS</span>
              <span style={styles.sizeBox}>S</span>
              <span style={styles.sizeBox}>M</span>
              <span style={styles.sizeBox}>L</span>
            </div>

            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                background: "#FFFFFF",
                color: "#F61B5A",
                border: "none",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>

            <button onClick={() => setSelectedProduct(null)}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
}
