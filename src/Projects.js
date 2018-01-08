import React from 'react'
import { Link } from 'react-static'
import data from './data.json'

const renderStack = (stack) => <span className="stack-item">{stack}</span>

class Projects extends React.Component {
  render() {
    const projects = data.map(project => {
      const projectImageStyle = `border-${project.style} w-full border-8 border-solid block`
      const linkStyle = `no-underline border-b text-${project.style} transition`
      return (
        <div className="my-8">
          <Link to={project.url} rel="nofollow"><img src={project.image} className={projectImageStyle} /></Link>
          <h2 className="font-poppins mt-4 md:mt-8 text-xl leading-normal">
            <Link to={project.url} rel="nofollow" className={linkStyle}>{project.title}</Link>
          </h2>
          <div className="text-base leading-normal">
          <p className="mt-4">{project.desc}</p>
          <p className="mt-4">
            <strong>Stack: </strong>
            {project.stack.map(item => renderStack(item))}
          </p>
          </div>
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
