import React, { useState, useRef } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";

//import {  } from "../redux/slice";

const socket = io("http://localhost:4000");

const setConnection = () => {
  const [audVid, setAudVid] = useState(); //

  clientWindow = useRef();

  React.useEffect(() => {
    async function clientCamMic() {
      try {
        const clientStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setAudVid(clientStream);
        //clientWindow.current.srcObject = clientStream //??????
      } catch (error) {
        alert("Error ");
      }
    }
    clientCamMic();
  }, []);

  //socket.on("hi");
};

export { setConnection };
