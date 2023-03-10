import { createRoot } from "react-dom/client";
// import React from "react";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import Stories from "./components/Stories";
// import Posts from "./components/Posts"
import App from "./components/App";

// function InstagramLayout() {
//   return (
//     <div class="root">
//       <Navbar />
//       <div class="corpo">
//         <div class="esquerda">
//           <Stories/>
//           <Posts />
//         </div>
//         <Sidebar/>
//       </div>
//     </div>
//   )
// }

const layout = App();
const container = document.querySelector("body");
const root = createRoot(container);
root.render(layout);
