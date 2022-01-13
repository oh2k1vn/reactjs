import React from "react";
import Logo from "../../assets/img/Logo_alta.png";
import baner_respass from "../../assets/img/baner_respass.png";
import "./ResetPass.scss";

import Respass from '../../components/login/respass/index';
// import Resetpass from '../../components/login/resetpass/index'

const ResetPass = () => {
  return (
    <div className="respass">
      <div className="respass_body">
        <div className="respass_body_logo">
          <img src={Logo} alt="" />
        </div>
        <div className="respass_body_center">
            <Respass />
            {/* <Resetpass /> */}
        </div>
      </div>
      <div className="respass_baner">
        <img
          src={baner_respass}
          alt=""
          height="560px"
          width="711px"
        />
      </div>
    </div>
  );
};

export default ResetPass;
