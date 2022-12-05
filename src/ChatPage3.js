import React, { useState } from "react";
import "./Chat.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { connect } from "react-redux";
import { mappropstodispatch, mappropstostate } from "./redux/Map";
import { useLocation } from "react-router-dom";
const ChatPage = (props) => {
  const location = useLocation();
  const [logger, setLogger] = useState("Disha");
  const [chatter, setChatter] = useState("Tiger");

  const [mymsg, setMyMsg] = React.useState("");
  const [mymsgar, setMyMsgArr] = React.useState(["Hello..."]);

  const sendmsg = (e) => {
    let objDiv = document.getElementById("divExample2");
    objDiv.scrollTop = objDiv.scrollHeight;
    e.preventDefault();
    if (mymsg !== "") {
      setMyMsgArr([...mymsgar, mymsg]);
      setMyMsg("");
      props.send_msg({ name: logger, message: mymsg, chat_person: chatter });
    }
  };
  return (
    <div className="chatpage">
      <div className="headerchat">
        <IconButton>
          <ArrowBackIcon sx={{ color: "white" }} />
        </IconButton>
        <img
          className="chatpic"
          alt=""
          src="https://yt3.ggpht.com/ytc/AMLnZu8EFNtIG3ktIkbDfQ2zK-v-VRaPDA0wA9n0AQs=s900-c-k-c0x00ffffff-no-rj"
        />
        <p>{chatter}</p>
      </div>

      <div className="chatdiv" id="divExample2">
        <>
          {props.chat.map((i, index) => {
            if (i.name === logger && i.chat_person === chatter) {
              return (
                <div className="fullwidth2">
                  <div className="chatboxmy">
                    <p>{i.message}</p>
                  </div>
                </div>
              );
            }
            if (i.name === chatter && i.chat_person === logger) {
              return (
                <div key={index} className="fullwidth1">
                  <div className="chatbox">
                    <p>{i.message}</p>
                  </div>
                </div>
              );
            }
          })}
        </>
        <form onSubmit={sendmsg}>
          <div className="inputchatdiv">
            <input
              placeholder="Type here....."
              value={mymsg}
              onChange={(e) => {
                setMyMsg(e.target.value);
              }}
            />
            <IconButton onClick={sendmsg}>
              <SendIcon sx={{ color: "#176267", fontSize: "30px" }} />
            </IconButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(mappropstostate, mappropstodispatch)(ChatPage);
