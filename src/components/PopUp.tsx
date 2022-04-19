import React from "react";

interface PopupProps {
  msg: string | undefined;
}

const Popup: React.FC<PopupProps> = (props) => {
  return (
    <div className="popUpDiv">
      {!props.msg ? null : (
        <div>
          <h4>{props.msg}</h4>
        </div>
      )}
    </div>
  );
};

export default Popup;
