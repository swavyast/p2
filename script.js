const h2 = React.createElement(
  "h1",
  { className: "myH2", key: 1, style: { textAlign: "center" } },
  "Hello React"
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(h2);

const myDiv = React.createElement(
  "div",
  { className: "container", id: "container", key: 0, style: { textAlign: "center" } },
  "Demo Container"
);

const card = React.createElement("div", { className: "card", key: 2 }, [
  React.createElement("div", { className: "card-body", key: 3, style: { textAlign: "center" } }, [
    React.createElement(
      "p",
      { className: "body-text", key: 4 },
      "Card body text"
    ),
  ]),
  React.createElement(
    "form",
    {
      className: "regForm",
      id: "regForm",
      action: "register.html",
      method: "post",
      key: 5,
      style: { with: "500px" },
    },
    React.createElement(
      "div",
      {
        className: "form-container",
        style: {
          border: "1px solid green",
          justifyContent: "space-between",
          width: "300px",
          margin: "0 auto",
          padding: "5px 10px",
        },
      },
      [
        React.createElement("img", {
          alt: "logo",
          style: {
            with: 200,
            height: 200,
            background: "teal",
            padding: "15px",
            borderRadius: "15px",
            opacity: 0.8,
            marginLeft: "45px",
            marginTop: "10px",
          },
          src: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        }),
        React.createElement(
          "div",
          { className: "form-input", key: 6, style: { marginTop: "10px" } },
          [
            React.createElement(
              "label",
              { htmlFor: "name", key: 7, style: { marginRight: "50px" } },
              "Name : "
            ),
            React.createElement("input", {
              type: "text",
              id: "name",
              key: 8,
              style: { margin: "5px", padding: "5px" },
            }),
          ]
        ),
        React.createElement("div", { className: "form-input", key: 9 }, [
          React.createElement(
            "label",
            { htmlFor: "email", key: 10, style: { marginRight: "50px" } },
            "Email : "
          ),
          React.createElement("input", {
            type: "text",
            id: "email",
            key: 11,
            style: { margin: "5px", padding: "5px" },
          }),
        ]),
        React.createElement("div", { className: "form-input", key: 12 }, [
          React.createElement(
            "label",
            { htmlFor: "password", key: 13, style: { marginRight: "28px" } },
            "Password : "
          ),
          React.createElement("input", {
            type: "text",
            id: "password",
            key: 14,
            style: { margin: "5px", padding: "5px" },
          }),
        ]),
        React.createElement(
          "div",
          { className: "form-input", key: 15 },
          React.createElement(
            "button",
            {
              type: "submit",
              id: "submit",
              value: "Register",
              form: "regForm",
              key: 16,
              style: {
                padding: "15px",
                width: "120px",
                color: "white",
                background: "black",
                borderRadius: "20px",
                marginTop: "15px",
                marginLeft: "100px",
                cursor:'pointer'
              },
            },
            "Register"
          )
        ),
      ]
    )
  )
]);




root.render([h2, myDiv, card]);

