import React from "react";
import {Dna} from "react-loader-spinner"
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const Products = () => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);

  const FetchData = async () => {
    const result = await fetch("https://dummyjson.com/products");
    const response = await result.json();
    return response.products
  };

  const {isLoading, data:products, error} = useQuery({queryKey:["Products"], queryFn:FetchData, staleTime:100000})



  // useEffect(() => {
  //   const FetchData = async () => {
  //     setLoading(true);
  //     const result = await fetch("https://dummyjson.com/products");
  //     const response = await result.json();
  //     setProducts(response.products);
  //     setLoading(false);
  //     console.log(products);
  //   };
  //   FetchData();
  // }, []);
  return (
    <div>
      <Link to={"/"}>Home</Link>
      {error?<h2>{error.message}</h2>: isLoading?<div
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>:<div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            rowGap: "30px",
            marginBottom: "20px",
          }}
        >
          {products?.map((eachItem, index) => (
            <div
              className="card"
              style={{ minWidth: "18rem", maxWidth: "18rem" }}
              key={index}
            >
              <img
                src={eachItem?.thumbnail}
                style={{ height: "250px", width: "100%" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{eachItem?.title}</h5>
                <p className="card-text">{eachItem?.description}</p>
                <Link to={`/products/${eachItem.id}`} className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          ))}
        </div>}
    </div>
  );
};

export default Products;


