
const ProductDetails = ({ params }) => {
    console.log("params",params.details);

    return (
        <div> 
            <h1>Params: {params.details}</h1>
            <h1>Product Details page</h1>
        </div>
    )
}
  
export default ProductDetails;