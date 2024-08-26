import React from 'react'
import logo from '../assets/summalogo.png'
const Hero = () => {


  function getImgUrl(logo){
    let ext = '.png' 
    const imgUrl = new URL(`${logo}`, import.meta.url).href
    return imgUrl
}
  return (
    <div className="w-full justify-center flex items-center flex-col">
        <nav className="flex justify-between items-center mb-10 pt-3">
            <img src={getImgUrl(logo)} alt="sumz_logo" className="w-44 object-contain"/> 
        </nav>

        <h1 className="head_text">
          Summarize web articles with <br className="max-md:hidden"/>
          <span className="green_gradient text-4xl ">SummarizePRO </span>
          <span className="text-4xl">AND </span>
          <span className="blue_gradient text-4xl">OpenAi GPT-4</span>
        </h1>
        <h2 className="mt-4">
          Simplify your reading with Summarize, an open-source article summarizer that transforms lengthy articles in clear and concise summaries
        </h2>
    </div>
  )
}

export default Hero