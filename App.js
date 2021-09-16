import React, { useState } from 'react'
import './App.css';
import { FacebookShareButton, FacebookIcon, TelegramShareButton, TelegramIcon } from "react-share";


function App() {
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")

    const clickedButton = () => {
        fetch("http://api.quotable.io/random").then(res => res.json()).then(
            (obj) => {
                setQuote(obj.content);
                setAuthor(obj.author);
                // console.log(obj);
            }
        )
    }
    return ( <
        div >
        <
        div id = "quote-box"
        className = "container-fluid" >
        <
        div id = "text" > < p > { quote } < /p></div >
        <
        div id = "author" > < p > { author } < /p></div >

        <
        div id = "buttons" >

        <
        /div> <
        button onClick = { clickedButton }
        id = "new-quote" > New Quote < /button> <
        div id = "social-media" >
        <
        FacebookShareButton url = { "https://www.facebook.com/" } >
        <
        FacebookIcon size = { 32 }
        round = { true } > < /FacebookIcon> < /
        FacebookShareButton > <
        TelegramShareButton url = { "https://www.telegram.com/" } >
        <
        TelegramIcon size = { 32 }
        round = { true }
        /> < /
        TelegramShareButton > <
        /div> < /
        div >



        <
        /div>

    );
}

export default App