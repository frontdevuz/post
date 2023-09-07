import React, { useEffect, useState } from "react";
import { data2 } from "./data/data";
import "./App.css";
import axios from "axios";
export default function App() {
  const URL = "https://64ec8fe5f9b2b70f2bfa8eb4.mockapi.io/marvel";
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img__url, setImg__url] = useState("");
  const [img__bg, setImg__bg] = useState("");
  const Submit = (e) => {
    e.preventDefault();
    const objs = { title, img__url, img__bg, text };
    console.log(objs);
    axios
      .post(URL, objs)
      .then(() => {})
      .catch((err) => {
        console.log(arr);
      });
  };
  useEffect(() => {
    axios.post(URL).then((response) => {}).then(()=> {
      
    });
  }, []);

  return (
    <React.Fragment>
      <div className="post">
        {data2.map((item, index) => (
          <div  className="input__box" key={index}>
            <div className="input">
              <input
                type="text"
                placeholder={item.title}
                onChange={(e) => setTitle(e.target.value)}
                required
                value={title}
              />
              <textarea
                id=""
                cols="30"
                rows="10"
                placeholder={item.decription}
                onChange={(e) => setText(e.target.value)}
                required
                value={text}
              ></textarea>
              <input
                type="text"
                placeholder={item.img}
                onChange={(e) => setImg__url(e.target.value)}
                required
                name="img__url"
                value={img__url}
              />
              <input
                type="text"
                placeholder={item.background__img}
                onChange={(e) => setImg__bg(e.target.value)}
                required
                value={img__bg}
              />
              <button onClick={Submit}>{item.button}</button>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
