import React from "react";

const Card = (props) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${props.id}?200x200" `} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

// In React (and JavaScript in general), destructuring assignment allows 
// you to extract values from objects and arrays and assign them to 
// variables in a concise way. This feature is particularly useful 
// in React components when you're dealing with props and state.

// In React, components receive information called "props" (short for properties) 
// that determine how they look and behave. Destructuring in React is a way to 
// easily extract specific pieces of information from these props

//destructuring 1

// const Card = (props) => {
//     const {name, email, id} = props;
//   return (
//     <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//       <img alt="robots" src={`https://robohash.org/${id}?200x200" `} />
//       <div>
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     </div>
//   );
// };

//destructuring 2

// const Card = ({ name, email, id }) => {
//   return (
//     <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//       <img alt="robots" src={`https://robohash.org/${id}?200x200" `} />
//       <div>
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     </div>
//   );
// };

export default Card;
