
const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"h1"},"I am heading"),React.createElement("h2",{id:"h2"},"I am heading2")]));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
