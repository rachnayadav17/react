import React from "react";
import ReactDOM from "react-dom/client";
// const parent=React.createElement("div" , {id:"parent"},[
// React.createElement("div",{id:"child"},
// [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"hey I am jayant kumar")]
// ),
// React.createElement("div",{id:"child"},
// [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]
// )]
// // );
// console.log(parent)


//React Element
const jsxHeading = 
<h1 id="heading">Hey I am Rachna Jayant Yadav</h1>;
// console.log(jsxHeading)

//React functional component

const HeadingComponent=() =>{
    return <h1>Namaste React Functional component</h1>
};

const HeadingComponent2=()=>(
    <div>
        {/* "<HeadingComponent/>" */}
        {/* <h1>{console.log("rachna")}</h1> */}
        {jsxHeading}
        {jsxHeading}
        {jsxHeading}
        {10000}
        {HeadingComponent()}
        <HeadingComponent/>
        <h1>
        Namaste React Functional component
        </h1>
    </div>
);

const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingComponent2/>)