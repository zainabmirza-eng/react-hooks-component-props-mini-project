import React from "react";

function Article(props) {
    const calculateTime = ((time, emoji) =>{
        const totalEmojis = Math.ceil(time / (emoji === '☕️'? 5 : 10))
        return emoji.repeat(totalEmojis)
    })

    const emojis =
    props.minutes < 30
      ? calculateTime(props.minutes, '☕️')
      : calculateTime(props.minutes, '🍱');

  return (
    <article>
      <h3>{props.title} <small>{emojis} {props.minutes} min read</small></h3>
      <small>{props.date || "January 1, 1970"}</small>
      <p>{props.preview}</p>
    </article>
  );
}

export default Article;