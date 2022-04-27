import React from "react";
import Container from "./Container";
function Footer() {
  return (
    <div className="w-full bg-transparent">
      <Container>
        <div className="border-t border-gray-800 text-gray-400 font-bold  text-md py-8 mt-10">
          © 2022 Digital Method LLC All right reserved
        </div>
      </Container>
    </div>
  );
}

export default Footer;
