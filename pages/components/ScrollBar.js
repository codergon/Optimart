import React from "react";

const ScrollBar = () => {
  return (
    <div className="scroll_bar">
      <div className="scroll_bar_inn">
        <ul className="scroll_copy">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => {
            return (
              <>
                <span>Decentralized</span>
                <i></i>
                <span>Secure Asset Wallet</span>
                <i></i>
                <span>Open Source Platform</span>
                <i></i>
                <span>Transparent Transactions</span>
                <i></i>
                <span>Fast</span>
                <i></i>
              </>
            );
          })}
        </ul>
        <ul className="scroll_copy">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => {
            return (
              <>
                <span>Decentralized</span>
                <i></i>
                <span>Secure Asset Wallet</span>
                <i></i>
                <span>Open Source Platform</span>
                <i></i>
                <span>Transparent Transactions</span>
                <i></i>
                <span>Fast</span>
                <i></i>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ScrollBar;
