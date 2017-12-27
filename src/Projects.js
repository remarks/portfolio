import React from 'react'
import { Link } from 'react-static'
import data from './data.json'

class Projects extends React.Component {
  render() {
    const projects = data.map(project => {
      const projectImageStyle = `border-${project.style} max-w-md w-full border-8 border-solid block`
      const linkStyle = `no-underline border-b text-${project.style} transition`
      return (
        <div className="my-8">
          <Link to={project.url}><img src={project.image} className={projectImageStyle} /></Link>
          <h2 className="font-poppins mt-4 md:mt-8 text-xl leading-normal">
            <Link to={project.url} className={linkStyle}>{project.title}</Link>
          </h2>
          <p className="text-lg leading-normal mt-4">{project.desc}</p>
        </div>
      )
    })
    return (
      <div className="projects mt-80">
        <h1 className="font-poppins text-3xl lg:text-4xl lg:w-3/4">Portfolio</h1>
        <div className="grid">{projects}</div>
      </div>
    )
  }
}

export default Projects
