import "./styles.scss";

// import selfie from "./public/unnamed.jpg";

// document.querySelector("img").src = selfie;

const fakeJson = ["unnamed", "unnamed"];

fakeJson.forEach((el) => {
  const t = document.createElement("img");
  t.src = el + ".jpg";
  document.body.appendChild(t);
});

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
