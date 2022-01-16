import React from "react";

import banner_respass from "../../assets/images/banner/banner_respass.png";
import logo from "../../assets/images/logo/logo_alta.svg";

const forgotPassword = () => {
  return (
    <div className="forgotPassword">
      <div className="forgotPassword_left">
        <form className="forgotPassword_left_form">
          <img src={logo} alt="" />
          {/* <p className="forgotPassword_left_form_top">Đặt lại mật khẩu</p>
          <p className="forgotPassword_left_form_bottom">Vui lòng nhập Email để đặt lại mật khẩu của bạn*</p>
          <input type="text" name="" id="" />
          <div className="forgotPassword_left_form_btn">
            <button className="btn active">Hủy</button>
            <button className="btn">Tiếp tục</button>
          </div> */}
          <div className="resetPassword">
            <p>Đặt lại mật khẩu</p>
            <label className="label" htmlFor="">Mật khẩu</label>
            <input type="password" name="" id="" />
            <label className="label" htmlFor="">Nhập lại mật khẩu</label>
            <input type="password" name="" id="" />
            <button className="btn">Xác nhận</button>
          </div>
        </form>
      </div>
      <div className="forgotPassword_right">
        <img src={banner_respass} alt="" />
      </div>
    </div>
  );
};

export default forgotPassword;