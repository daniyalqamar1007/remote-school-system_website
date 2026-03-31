import { Suspense, lazy } from "react";
import Loading from "../components/loading/Loading";
import PropTypes from "prop-types";
import { ErrorBoundary } from "react-error-boundary";
import NetworkErrorFallback from "../pages/error/ErrorFallback";

const componentMap = {
  // auth
  "/login": lazy(() => import("../pages/auth/Login")),
  // home
  "/": lazy(() => import("../pages/home/Home")),
  "/demo":lazy(()=>import("../pages/demoScreen/Demo")),
  "/free-trial":lazy(()=>import("../pages/freeTrial/FreeTrial")),
  "/faqs":lazy(()=>import("../pages/faqs/FaqsScreen")),
  "/contact":lazy(()=>import("../pages/contact/Contact")),
  "/about-us": lazy(() => import("../pages/about/AboutUs")),
  "/career": lazy(() => import("../pages/career/Career")),
  "/roles": lazy(() => import("../pages/roles/Roles")),
};

const LazyComponent = ({ path }) => {
  const Component = componentMap[path];
  if (!Component) {
    return <div>Page not found</div>;
  }

  return (
    <ErrorBoundary FallbackComponent={NetworkErrorFallback}>
      <Suspense fallback={<Loading />}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
};

LazyComponent.propTypes = {
  path: PropTypes.string.isRequired,
};

export default LazyComponent;
