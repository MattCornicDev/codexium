import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import { Socialicons } from "../components/socialicons";
import { NotFound } from "../pages/error/NotFound";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Home = lazy(() =>
  import("../pages/home").then((module) => ({ default: module.Home }))
);
const Portfolio = lazy(() =>
  import("../pages/portfolio").then((module) => ({ default: module.Portfolio }))
);
const ContactUs = lazy(() =>
  import("../pages/contact").then((module) => ({ default: module.ContactUs }))
);
const About = lazy(() =>
  import("../pages/about").then((module) => ({ default: module.About }))
);
const Articles = lazy(() =>
  import("../pages/articles").then((module) => ({ default: module.Articles }))
);
const Devis = lazy(() =>
  import("../pages/tarifications/Devis").then((module) => ({
    default: module.Devis,
  }))
);
const PackAuditCyber = lazy(() =>
  import("../pages/packAuditCyber").then((module) => ({
    default: module.PackAuditCyber,
  }))
);
const Profile = lazy(() => import("../pages/profile/Profile"));

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/packAuditCyber" element={<PackAuditCyber />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <Suspense fallback={<div role="status">Chargement de la page…</div>}>
        <AnimatedRoutes />
      </Suspense>
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
