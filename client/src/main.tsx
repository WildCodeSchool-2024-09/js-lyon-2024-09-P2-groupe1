// // Import necessary modules from React and React Router
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";

// /* ************************************************************************* */

// // Import the main app component
// import App from "./App";
// import LoginPage from "./components/LoginPage";
// // import Moviecard from "./components/Moviecard";

// // Import additional components for new routes

// // Try creating these components in the "pages" folder

// // import About from "./pages/About";
// // import Contact from "./pages/Contact";

// /* ************************************************************************* */

// // Create router configuration with routes
// // You can add more routes as you build out your app!

// const moviesData = [
//   {
//     title: "Les tomates de l'espace",
//     image:
//       "https://media.istockphoto.com/id/149049274/fr/photo/tomates-farcies.jpg?s=612x612&w=0&k=20&c=k4slxuM4taMJUkBeukW08kV2vC9vxmzsGe-50Ixay-Y=",
//     description: "un film sur les tomates farcies",
//     id: 1,
//   },
//   {
//     title: "Les tomates de l'espace 2: le retour",
//     image:
//       "https://media.istockphoto.com/id/149049274/fr/photo/tomates-farcies.jpg?s=612x612&w=0&k=20&c=k4slxuM4taMJUkBeukW08kV2vC9vxmzsGe-50Ixay-Y=",
//     description: "un deuxième film sur les tomates farcies",
//     id: 2,
//   },
//   {
//     title: "Les tomates de l'espace 3: la vengeance",
//     image:
//       "https://media.istockphoto.com/id/149049274/fr/photo/tomates-farcies.jpg?s=612x612&w=0&k=20&c=k4slxuM4taMJUkBeukW08kV2vC9vxmzsGe-50Ixay-Y=",
//     description: "un troisième film sur les tomates farcies",
//     id: 3,
//   },
//   {
//     title: "Les tomates de l'espace 3: la vengeance",
//     image:
//       "https://media.istockphoto.com/id/149049274/fr/photo/tomates-farcies.jpg?s=612x612&w=0&k=20&c=k4slxuM4taMJUkBeukW08kV2vC9vxmzsGe-50Ixay-Y=",
//     description: "un troisième film sur les tomates farcies",
//     id: 4,
//   },
//   {
//     title: "Les tomates de l'espace 3: la vengeance",
//     image:
//       "https://media.istockphoto.com/id/149049274/fr/photo/tomates-farcies.jpg?s=612x612&w=0&k=20&c=k4slxuM4taMJUkBeukW08kV2vC9vxmzsGe-50Ixay-Y=",
//     description: "un troisième film sur les tomates farcies",
//     id: 5,
//   },
//   {
//     title: "Les tomates de l'espace 3: la vengeance",
//     image:
//       "https://media.istockphoto.com/id/149049274/fr/photo/tomates-farcies.jpg?s=612x612&w=0&k=20&c=k4slxuM4taMJUkBeukW08kV2vC9vxmzsGe-50Ixay-Y=",
//     description: "un troisième film sur les tomates farcies",
//     id: 6,
//   },
// ];

// const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
// //   {
// //     path: "/",
// //     element: <App />,
// //     // children: [
// //     //   {
// //     //     path: "",
// //     //     element: <Moviecard />,
// //     //   },
// //     ],
// //   },
// // ]);

// /* ************************************************************************* */

// // Find the root element in the HTML document
// const rootElement = document.getElementById("root");
// if (rootElement == null) {
//   throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
// }

// // Render the app inside the root element
// createRoot(rootElement).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// );

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
