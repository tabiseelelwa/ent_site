import React from "react";
import ReactDOM from "react-dom/client";
import "../src/css/App.scss";
import "../src/css/Actualite.scss";
import "../src/css/dashboard.scss";
import "../src/css/createArticle.scss";
import "../src/css/detailArticle.scss";
import "../src/css/mesarticles.scss";
import "../src/css/login.scss";
import "../src/css/sidebar.scss";
import "../src/css/about.scss";
import "../src/css/createUser.scss";
import "bootstrap/dist/css/bootstrap.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./composants/Layout";
import Accueil from "./Pages/Accueil";
import Acutalites from "./Pages/Acutalites";
import AffichArticle from "./Modules/Affichage/AffichArticle";
import DetailArticle from "./Modules/Affichage/DetailArticle";
import ModifArticle from "./Modules/Modification/ModifArticle";
import Apropos from "./Pages/Apropos";
import Mediatheque from "./Pages/Mediatheque";
import Login from "./composants/Login";
import SignUp from "./composants/SignUp";
import Introuvable from "./composants/Introuvable";
import AjoutArticle from "./Modules/Ajout/ajoutArticle";
import ListArticles from "./Pages/ListArticles";
import Dashboard from "./composants/Dashboard";

import ListUtilisateurs from "./Modules/Admin/ListUtilisateurs";
import ListArticleCateg from "./Modules/Admin/ListArticleCateg";
import CreatCateg from "./Modules/Admin/CreatCateg";
import CreatUtilisateur from "./Modules/Admin/CreatUtilisateur";
import AccAdmin from "./Modules/Admin/AccAdmin";
import Parametres from "./Modules/Admin/Parametres";
import Profil from "./Modules/Admin/Profil";
import ListArticlesAdmin from "./Modules/Admin/ListArticlesAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Introuvable />,
    children: [
      { index: true, element: <Accueil /> },
      { path: "blog", element: <Acutalites /> },
      { path: "mediatheque", element: <Mediatheque /> },
      { path: "about", element: <Apropos /> },
      { path: "post/:idArticle", element: <AffichArticle /> },
      { path: "articles/:idArticle", element: <DetailArticle /> },
      { path: "modif/:idArticle", element: <ModifArticle /> },
      { path: "creat-article", element: <AjoutArticle /> },
      { path: "articles", element: <ListArticles /> },
    ],
  },

  {
    path: "/admin",
    element: <Dashboard />,
    children: [
      { path: "", element: <AccAdmin /> },
      { path: "list-article", element: <ListArticlesAdmin /> },
      { path: "creat-util", element: <CreatUtilisateur /> },
      { path: "creat-categ", element: <CreatCateg /> },
      { path: "list-uti", element: <ListUtilisateurs /> },
      { path: "list-art-categ", element: <ListArticleCateg /> },
      { path: "profil", element: <Profil /> },
      { path: "parametres", element: <Parametres /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/enregUser", element: <SignUp /> },
]);

export default router;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
