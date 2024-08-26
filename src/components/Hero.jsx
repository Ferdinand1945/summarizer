import React from 'react'
import {logo} from '../assets'
const Hero = () => {
  return (
    <div className="w-full justify-center flex items-center flex-col">
        <nav className="flex justify-between items-center mb-10 pt-3">
            <img src={{logo}} alt="sumz_logo" className="w-28 object-contain"/> 

            <button
            type="button"
            onClick={()=> window.open("https://github.com/ferdinand1945")}
            className="black_btn">
              GitHub
            </button>
        </nav>

        <h1 className="head_text">
          Summarize articles with <br className="max-md:hidden"/>
          <span className="orange_gradient">OpenAi GPT-4</span>
        </h1>
        <h2>
          Simplify your reading with Summarize, an open-source article summarizer that transforms lengthy articles in clear and concise summaries
        </h2>
    </div>
  )
}

export default Hero