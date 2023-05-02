import React from "react";
import WorkImg from "../assets/projects/workImg.jpeg";
import realEstate from "../assets/projects/realestate.jpg";
import HTML from "../assets/html.png";
import netflix from "../assets/projects/netflix.PNG";
import code from "../assets/projects/code.PNG";
import spoti from "../assets/projects/spoti.png";
import visual from "../assets/projects/visual.PNG";
import movie from "../assets/projects/moviefinder.PNG"
import mink from "../assets/projects/Capture.PNG"
import weather from "../assets/projects/weather.PNG"
import keep from "../assets/projects/notes.PNG"
import Pokedex from "../assets/projects/pokemon.PNG"
import Meal from "../assets/projects/meal.PNG"




const Work = () => {
  return (
    <div name="work" className="w-full bg-[#0a192f] md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-pink-800">
            Work
          </p>
          <p className="py-5">Check out my some resent work</p>
        </div>
        <div className="grid sm:grid md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${netflix})` }}
            className="content-div shadow-lg shadow-[#040c16] group container rounded-md items-center flex justify-center mx-auto "
          >
            {/* hover  */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-widest">
                React Js Application <br />
                Netflix
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" href="https://netflixbymayank.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/myankprad/netflix/tree/master/netflix"
                >
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${keep})`}} className='content-div shadow-lg shadow-[#040c16] group container rounded-md items-center flex justify-center mx-auto '>
               
               <div className='opacity-0 group-hover:opacity-100 '>
                   <span className='text-2xl font-bold text-white tracking-widest'>
                    Google Notes
                   </span>
                    <div className='pt-8 text-center'>
                      <a href="https://notesredux.netlify.app/">
                       <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Demo</button>
                      </a>
                      <a href="https://github.com/myankprad/todoapp">
                       <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Code</button>
                      </a>
                   </div>
               </div>
           </div>
          <div
            style={{ backgroundImage: `url(${movie})` }}
            className="content-div shadow-lg shadow-[#040c16] group container rounded-md items-center flex justify-center mx-auto "
          >
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-widest">
                Movie Finder
              </span>
              <div className="pt-8 text-center">
                <a href="https://movieefinder.netlify.app">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/myankprad/moviedb">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${visual})` }}
            className="content-div shadow-lg shadow-[#040c16] group container rounded-md items-center flex justify-center mx-auto "
          >
            {/* hover  */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-widest">
                Visual studio web
              </span>
              <div className="pt-8 text-center">
                <a href="https://ephemeral-kringle-af7524.netlify.app">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/myankprad/VSCODE-CLONE">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${mink})`}} className='content-div shadow-lg shadow-[#040c16] group container rounded-md items-center flex justify-center mx-auto '>
               
                <div className='opacity-0 group-hover:opacity-100 '>
                    <span className='text-2xl font-bold text-white tracking-widest'>
                     MinkMart 
                    </span>
                     <div className='pt-8 text-center'>
                       <a href="https://minkmart.netlify.app">
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Demo</button>
                       </a>
                       <a href="https://github.com/myankprad/MinkMaart">
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Code</button>
                       </a>
                    </div>
                </div>
            </div> 
          <div
            style={{ backgroundImage: `url(${code})` }}
            className="content-div shadow-lg shadow-[#040c16] group container rounded-md items-center flex justify-center mx-auto "
          >
            {/* hover  */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-widest">
                Code Editor
              </span>
              <div className="pt-8 text-center">
                <a href="https://codepennn.netlify.app">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/myankprad/editor">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${weather})`}} className='content-div shadow-lg shadow-[#040c16] group container rounded-md items-center flex justify-center mx-auto '>
               
                <div className='opacity-0 group-hover:opacity-100 '>
                    <span className='text-2xl font-bold text-white tracking-widest'>
                    Weather 
                    </span>
                     <div className='pt-8 text-center'>
                       <a href="https://weather-may.netlify.app/">
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Demo</button>
                       </a>
                       <a href="https://github.com/myankprad/Weather-App">
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Code</button>
                       </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Meal})`}} className='content-div shadow-lg shadow-[#040c16] group container rounded-md items-center flex justify-center mx-auto '>
               
                <div className='opacity-0 group-hover:opacity-100 '>
                    <span className='text-2xl font-bold text-white tracking-widest'>
                     Food App
                    </span>
                     <div className='pt-8 text-center'>
                       <a href="https://cozy-mooncake-1fb0d1.netlify.app/">
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Demo</button>
                       </a>
                       <a href="https://github.com/myankprad/food">
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Code</button>
                       </a>
                    </div>
                </div>
            </div>
          
            <div style={{backgroundImage: `url(${Pokedex})`}} className='content-div shadow-lg shadow-[#040c16] group container rounded-md items-center flex justify-center mx-auto '>
               
                <div className='opacity-0 group-hover:opacity-100 '>
                    <span className='text-2xl font-bold text-white tracking-widest'>
                     Pokedex
                    </span>
                     <div className='pt-8 text-center'>
                       <a href="https://pokedexbymink.netlify.app/">
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Demo</button>
                       </a>
                       <a href="https://github.com/myankprad/pokemon">
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Code</button>
                       </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
