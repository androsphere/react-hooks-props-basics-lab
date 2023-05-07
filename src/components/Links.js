import React from "react";

function Links(props){
    return(
    <>
    <h3>Links</h3>
    <a href = {props.url1}>https://github.com/liza</a>
    <a href = {props.url2}>https://www.linkedin.com/in/liza/</a>
    </>
    );
}

export default Links;