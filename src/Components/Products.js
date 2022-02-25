import Product from './Product';
import a from './products.json'

function Products(){


    return a.map((value,index)=> (

        <Product key={index} product={value} />
              )  );
}

export default Products;