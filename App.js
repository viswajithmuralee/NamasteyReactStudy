const parent = React.createElement("div", { id: "parent" }, 
    React.createElement("div", { id: "child" }, 
        [React.createElement("h1", { id: "h1tag" }, "This is an h1 tag"), React.createElement("h2", { id: "h2tag" }, "This is an h2 tag")]))

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);
root.render(parent);