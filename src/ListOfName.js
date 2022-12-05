import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./List.css";
import { mappropstodispatch, mappropstostate } from "./redux/Map";

const ListOfName = (props) => {
    const navigate = useNavigate();
  const gotochat = (n,p) => {
    navigate("/chatpage",{state:{name:n,pic:p}})
  };
  return (
    <div className="listofnames">
      <div className="chatlist">
        <p>WhatsApp</p>
      </div>
      <div className="parentlistdiv">
        {props.users.map((i, index) => {
          return (
            <div className="listdiv" onClick={() => gotochat(i.name,i.pic)}>
              <img className="dppic" alt="" src={i.pic} />

              <p className="chatname">{i.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(mappropstostate, mappropstodispatch)(ListOfName);
