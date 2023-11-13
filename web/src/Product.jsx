import React from 'react'
import { Dna } from 'react-loader-spinner';
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom';

const Product = () => {
  const params = useParams();
  console.log(params.productId)
  const FetchData = async () => {
    const result = await fetch(`https://dummyjson.com/products/${params.productId}`);
    const response = await result.json();
    return response
    // console.log(response)
  };

  const {isLoading, data:product} = useQuery({queryKey:["Product", params.productId], queryFn:FetchData, staleTime:100000})
  console.log(product)
  return (
    <div>
      <Link to={"/products"}><button>Go Back</button></Link>
      <div
          style={{
            minHeight: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isLoading?  <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />:<div
          className="card"
          style={{ minWidth: "18rem", maxWidth: "18rem" }}
        >
          <img
            src={product?.thumbnail}
            style={{ height: "200px", width: "100%" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{product?.title}</h5>
            <p className="card-text">{product?.description}</p>
          </div>
        </div>}
        </div>

      {/* {isLoading?<div
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
              className="card"
              style={{ minWidth: "18rem", maxWidth: "18rem" }}
            >
              <img
                src={product?.thumbnail}
                style={{ height: "200px", width: "200px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{product?.title}</h5>
                <p className="card-text">{product?.description}</p>
              </div>
            </div>} */}
      
      <br />
            {/* <div
              className="card"
              style={{ minWidth: "18rem", maxWidth: "18rem" }}
            >
              <img
                src={product?.thumbnail}
                style={{ height: "200px", width: "200px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{product?.title}</h5>
                <p className="card-text">{product?.description}</p>
              </div>
            </div> */}
    </div>
  )
}

export default Product