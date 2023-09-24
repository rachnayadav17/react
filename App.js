import React from "react";
import ReactDOM from "react-dom/client";






const parent=React.createElement("div" , {id:"parent"},[
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"hey I am jayant kumar")]
),
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]
)]
);


// const heading = React.createElement
// ("h1",
// {id:"heading", xyz:"abc"},
// "helloWorld from react");
console.log(parent)

const root= ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);