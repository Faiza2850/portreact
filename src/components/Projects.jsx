import React from 'react'
import edusity from '../assets/edusity.png'

export const Projects = () => {
  return (
    <div className="project_container gap-4 grid-cols-3 grid ">
        <article className="project_item border-transparent p-5 border-r-8 ">
            <div className="project_item border-r-8 h-48 w-96">
                <img className='block object-fill w-full'src={edusity} alt='#'/>
            </div>
            <h3 className='text-cyan-100 block mx-5 my-8'> EDUSITY</h3>
            <div className="btn flex gap-4 my-4 border-r-2  ">
                <a href='https://github.com/Faiza2850/edusity' className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' target='_blank' rel='noreferrer'>GitHUb</a>
                <a href='#' className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
        </article>

        <article className="project_item border-transparent p-5 border-r-8 ">
            <div className="project_item border-r-8 h-48 w-96">
                <img className='block object-fill w-full'src={edusity} alt='#'/>
            </div>
            <h3 className='text-cyan-100 block mx-5 my-8'> EDUSITY</h3>
            <div className="btn flex gap-4 my-4 border-r-2  ">
                <a href='https://github.com/Faiza2850/edusity' className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' target='_blank' rel='noreferrer'>GitHUb</a>
                <a href='#' className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
        </article>

        <article className="project_item border-transparent p-5 border-r-8 ">
            <div className="project_item border-r-8 h-48 w-96">
                <img className='block object-fill w-full'src={edusity} alt='#'/>
            </div>
            <h3 className='text-cyan-100 block mx-5 my-8'> EDUSITY</h3>
            <div className="btn flex gap-4 my-4 border-r-2  ">
                <a href='https://github.com/Faiza2850/edusity' className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' target='_blank' rel='noreferrer'>GitHUb</a>
                <a href='#' className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
        </article>
        
    </div>
  )
}