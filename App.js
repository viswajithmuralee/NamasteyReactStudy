const parent = React.createElement("div", { id: "parent" }, 
    React.createElement("div", { id: "child" }, 
        [React.createElement("h1", { id: "h1tag" }, "I a Viswajith"), React.createElement("h2", { id: "h2tag" }, "We")]))

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);
root.render(parent);