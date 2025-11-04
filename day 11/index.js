const heading=React.createElements("h1",{},"Hello!React learners(React)");
    console.log(heading);

    const root=ReactDOM.createRoot(document.getElementById("root1));
    root.render(heading);

    <div id="outer">
        <div id="inner">
            <p id="para"></p>
            <h1 id="heading"></h1>
            <span id="message">
                Hello React Learners
            </span>
        </div>

    </div>

    const heading=React.createElement("div",{id:"outer"},
        [React.createElement("div",id:"inner"),
        React.createElement("p",{id:"para"},"I am a paragraph");
        React.createElement("h1",{id:"heading"},"I am a heading");
        React.createElement("span",{id:"span"},"Hello React Learners"),
    ]
)
