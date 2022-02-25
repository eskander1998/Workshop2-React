import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'


function Product(props){

  const [likes,setLikes]=useState(0);
  const addLikes = ()=> { setLikes(likes+1)}

  return  likes > 5 ? <ProductFrameBest>

    {props.product.name}
   
    <ProductImageWrapperBest>

      <ProductImage src=        {props.product.img}>

       </ProductImage>

   </ProductImageWrapperBest>

   <ProductInfoWrapperBest>
   <span>{props.product.price}</span>
   <span>Likes : {likes} </span>
   <button onClick={addLikes}>Like</button>
    <Link to={'/productDetails'+props.product.name}>Details</Link>
   </ProductInfoWrapperBest>
</ProductFrameBest>
 : <ProductFrame>

    {props.product.name}
   
    <ProductImageWrapper>

      <ProductImage src=        {props.product.img}>

       </ProductImage>

   </ProductImageWrapper>

   <ProductInfoWrapper>
   <span>{props.product.price}</span>
   <span>Likes : {likes} </span>
   <button onClick={addLikes}>Like</button>
   <Link to={'/productDetails/'+props.product.name}>Details</Link>

   </ProductInfoWrapper>
</ProductFrame>; } 
    
      
      const ProductFrame = styled.div`
      border-radius: 25px;
      min-height: 200px;
      min-width: 200px;
      background-color: rgb(110, 110, 110, 0.7);
      margin: 10px;
      display: flex;
      flex-direction: column;
     
    `;
    const ProductImageWrapper = styled.div`
      margin: 5px;
      max-width: 200px;
    `;
    const ProductImage = styled.img`
      width: 100%;
      height: 100%;
      border-radius: 25px;
    `;
    const ProductInfoWrapper = styled.div`
      margin-top: auto;
      margin-bottom: 5px;
      display: flex;
      flex-direction: column;
      & > span {
        text-align: center;
      }
    `;
    const ProductFrameBest = styled.div`
      border-radius: 25px;
      min-height: 200px;
      min-width: 200px;
      background-color: #DB7093;
      margin: 10px;
      display: flex;
      flex-direction: column;
      animation:  clignote 2s linear infinite;
      @keyframes clignote {  
      50% { opacity: 0.5; }
    }
    `;
    const ProductImageWrapperBest = styled.div`
      margin: 5px;
      max-width: 200px;
    `;
    const ProductImageBest = styled.img`
      width: 100%;
      height: 100%;
      border-radius: 25px;
    `;
    const ProductInfoWrapperBest = styled.div`
      color:white;
      margin-top: auto;
      margin-bottom: 5px;
      display: flex;
      flex-direction: column;
      & > span {
        text-align: center;
      }
    `;
    const Button = styled.button`
      /* Adapt the colors based on primary prop */
      background: ${props => props.primary ? "palevioletred" : "white"};
      color: ${props => props.primary ? "white" : "palevioletred"};
      font-size: 1.5em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
    `;
    



export default Product;
// export default class Product extends Component {

//     constructor(props){  // props en parametre pas obligatoire, sauf si on fais this.props
//         super(props);
//         this.state ={ product: props.product, updated: 0 ,likes: 0 };
//         this.addLikes = this.addLikes.bind(this);
//         this.Reinit = this.Reinit.bind(this);
//     }

//     // componentDidMount() {
//     //   console.log(
//     //     "I have finished rendering ");
//     // }

//     componentDidMount () {
//       console.log(
//         "I have finished rendering "+
//           this.props.product.name +
//             "price:"+
//           this.state.product.price
//       );
//       }


//     componentDidUpdate() {
//       console.log("I have been updated "+this.state.updated +"times"); 
//     }

//       componentWillUnmount() {
//       console.log("I'm being destroyed");
//       }
      

//       addLikes() {
//         this.setState((prev) => ({
//           likes: prev.likes + 1,
//           updated: prev.updated + 1,
//         }));
//       }

//       Reinit() {
//         this.setState((prev) => ({
//           likes:0,
//           updated: prev.updated + 1,
//         }));
//       }

//   render() {
//     return <ProductFrame>

//         {this.props.product.name}
        
//         <ProductImageWrapper>

//             <ProductImage src=        {this.props.product.img}
// >

//             </ProductImage>

//         </ProductImageWrapper>

//         <ProductInfoWrapper>
//         <span>{this.state.product.price}</span>
//         <span>Likes : {this.state.likes} </span>
//         <button onClick={this.addLikes}>Like</button>
//         <button onClick={this.Reinit}>Reinitialiser</button>

//         </ProductInfoWrapper>
//     </ProductFrame>;
//   }


// }


// const ProductFrame = styled.div`
//   border-radius: 25px;
//   min-height: 150px;
//   min-width: 150px;
//   background-color: rgb(110, 110, 110, 0.7);
//   margin: 10px;
//   display: flex;
//   flex-direction: column;
// `;
// const ProductImageWrapper = styled.div`
//   margin: 5px;
//   max-width: 150px;
// `;
// const ProductImage = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 25px;
// `;
// const ProductInfoWrapper = styled.div`
//   margin-top: auto;
//   margin-bottom: 5px;
//   display: flex;
//   flex-direction: column;
//   & > span {
//     text-align: center`;

