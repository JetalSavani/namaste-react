// const heading = React.createElement("h1" , {id : "heading" , abc: "xyz"} , "Hello world from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



import React from "react";
import  ReactDOM  from "react-dom";


const jsxHeading = (<h1 id = "heading" className="head"> 
This heading from the jsx 
</h1>
);




const Title = () => <h3>This is Title component inside HeadingComponent3</h3 >

const elem = <span>React Element inside element    </span>;

const element = (
    
    <h1>
        {elem}
         it's just element that i want to pass inside component inside curly breaket
        </h1>
       
);

const HeadingComponent2  = () => {
    <h1>This is functional component</h1>
}

const number = 10000;

const HeadingComponent3 = () => (
    <div id="container"> <Title />
    <h1 id="heading" className="head">
        THIS is funtional component 3
    </h1>

{/* // we can write any js code inside curly bracket */}
  {/* example of js code which we can write inside curly breaket */}

    <h2>{number}</h2>
        <h4>{200 * 300 }</h4>
        {console.log("it's also work in curly braket")}

   {/* call the element inside component - {element} */}
   {element}

    </div>
)

// above three are the same function ... there is diferent syntax.


console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent3 />);



// react functional component return the 
//  a fucntion retrun a piece of jsx code .

//normal way a fumction return a jsx element