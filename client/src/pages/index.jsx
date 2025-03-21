import AuthWrapper from "../components/AuthWrapper";
import Companies from "../components/Landing/Companies";
import Everything from "../components/Landing/Everything";
import FiverrBusiness from "../components/Landing/FiverrBusiness";
import HeroBanner from "../components/Landing/HeroBanner";
import PopularServices from "../components/Landing/PopularServices";
import Services from "../components/Landing/Services";
import { useStateProvider } from "../context/StateContext";
import  Cursor from "../components/Cursor";
import React from "react";

function Index() {
  const [{ showLoginModal, showSignupModal }] = useStateProvider();

  return (
    <div>
      <Cursor />      
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <Services />
      <FiverrBusiness />
      {(showLoginModal || showSignupModal) && (
        <AuthWrapper type={showLoginModal ? "login" : "signup"} />
      )}
    </div>
  );
}

export default Index;
