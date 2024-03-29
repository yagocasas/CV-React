import React from "react";
import styled from "styled-components";

const BurguerButton = () => {
  return (
    <Burguer>
      <div class="three col">
        <div class="hamburger" id="hamburger-9">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
    </Burguer>
  );
};

export default BurguerButton;

const Burguer = styled.div`
  #hamburger-9 {
    position: relative;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  #hamburger-9.is-active {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #hamburger-9:before {
    content: "";
    position: absolute;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 70px;
    height: 70px;
    border: 5px solid transparent;
    top: calc(50% - 35px);
    left: calc(50% - 35px);
    border-radius: 100%;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  #hamburger-9.is-active:before {
    border: 5px solid #ecf0f1;
  }

  #hamburger-9.is-active .line {
    width: 35px;
  }

  #hamburger-9.is-active .line:nth-child(2) {
    opacity: 0;
  }

  #hamburger-9.is-active .line:nth-child(1) {
    -webkit-transform: translateY(13px);
    -ms-transform: translateY(13px);
    -o-transform: translateY(13px);
    transform: translateY(13px);
  }

  #hamburger-9.is-active .line:nth-child(3) {
    -webkit-transform: translateY(-13px) rotate(90deg);
    -ms-transform: translateY(-13px) rotate(90deg);
    -o-transform: translateY(-13px) rotate(90deg);
    transform: translateY(-13px) rotate(90deg);
  }
`;
