import React from 'react';
import { createApp } from "vue";
const { default: VueComponent } = await import("http://localhost:7400/bundle.js")
const app = createApp(VueComponent);
app.mount("#app");

const VueactComponent = () => {
  return (
    <div id="app">
      {/* Your static content goes here */}
      <p>This is a static HTML tag inside the component.</p>
    </div>
  );
};

export default VueactComponent;
