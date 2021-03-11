import React from 'react'
import moment from 'moment'
const Article = ({ title, date, length, snippet, link }) => {
  return (
    <article className='post'>
      <a href={link}>
        <h2>{title}</h2>
      </a>
      <div className='post-info'>
        {/* using moment.js here */}
        <span> {moment(date).format('dddd Do, MMMM ,  YYYY.')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article
