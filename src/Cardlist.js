import React from "react";
// import card to have access to "card.js"
import Card from "./Card";

//before adding a loop over the robots and creating a card component for each
// const Cardlist = ({robots}) => {
//   return (
//     <div>
//       <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
//       <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
//       <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
//     </div>
//   );
// };

// After adding the loop

const Cardlist = ({ robots }) => {
  //create the loop with ".map()" function which allows us to iterate
  //over an array of data and generate a list of components
  // based on that data

  //   The map() function takes a callback function as its first parameter. This callback function can take up to three parameters:
  // Element: The current element being processed in the array.
  // Index (Optional): The index of the current element being processed in the array.
  // Array (Optional): The array map() was called upon.

  // Always remember to use "key-prop", a special
  // attribute that you need to include when you create lists of elements.
  // this helps react-dom to know what item were changed, added, or removed.
  // This way, React can efficiently update the UI and keep track of individual components.

  //   const cardArray = robots.map((user, i) => {
  //     return (
  //       <Card
  //         key={i}
  //         id={robots[i].id}
  //         name={robots[i].name}
  //         email={robots[i].email}
  //       />
  //     );
  //   });

  //   return <div>{cardArray}</div>;
  // };

  // But the above code is one way of achieving this result, there is a more advanced approach below.

  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;
