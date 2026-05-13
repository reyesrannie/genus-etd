import React, { useEffect } from "react";
import AppLayout from "../../components/custom/AppLayout";

const ProtectedRoute = ({
  isAuthenticated,
  redirectPath = "https://one.rdfmis.com",
}) => {
  useEffect(() => {
    if (!isAuthenticated) {
      window.location.replace(redirectPath);
    }
  }, [isAuthenticated, redirectPath]);

  return isAuthenticated ? <AppLayout /> : null;
};

export default ProtectedRoute;
