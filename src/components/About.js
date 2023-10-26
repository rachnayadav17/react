import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor")
  }
  componentDidMount() {
    // console.log("parent did mount")
  }
  render() {
    // console.log("parent render")
    return (
      <div>
        <p>
          Swiggy Labs is a self-contained extension of Swiggy that drives
          experiments and 0 to 1s for potential new business lines. This inturn
          helps us contribute to shaping the future of how Swiggy will continue
          to provide unparalleled convenience to its customers.
        </p>
        <User />
        <UserClass name={"rachna yadav class"} />
      </div>
    );
  }
}

// const About=()=>{
//     return(
//         <div>
//             <p>Swiggy Labs is
//                 a self-contained extension of Swiggy that drives experiments and 0 to 1s for potential new business lines.
//                 This inturn helps us contribute to shaping the future of how Swiggy will continue to provide unparalleled convenience
//                 to its customers.</p>
//                 <User/>
//                 <UserClass name={"rachna yadav class"}/>
//         </div>

//     )
// };

export default About;
