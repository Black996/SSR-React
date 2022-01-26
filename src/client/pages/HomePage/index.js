import React from "react";

const Home = () => {
  return (
    <div>
      <h3>I am the home component</h3>
      <button onClick={() => alert("hellooo")}>I'll Alert hello</button>
    </div>
  );
};

export default {
  component: Home,
};
