// const heading = React.createElement("h1" , {id : "heading" , abc: "xyz"} , "Hello world from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello I'm H1 tag"),
    React.createElement("h2", {}, "hello I'm H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hello I'm H1 tag"),
    React.createElement("h2", {}, "hello I'm H2 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
