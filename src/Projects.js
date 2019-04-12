import React from 'react'
import { Link } from 'react-static'
import data from './data.json'

const Project = item => {
  const projectImageStyle = `border-${item.style} w-full border-8 border-solid block`
  const linkStyle = `no-underline text-${item.style}`
  return (
    <div className="mt-8">
      <Link to={item.url} rel="nofollow">
        <img src={item.image} className={projectImageStyle} />
      </Link>
      <h2 className="mt-4 text-xl md:text-2xl leading-normal">
        <Link to={item.url} rel="nofollow" className={linkStyle}>
          {item.title}
        </Link>
      </h2>
    </div>
  )
}

const renderProjects = projects => projects.map(project => <Project key={project.url} {...project} />)

class Projects extends React.Component {
  render() {
    const work = renderProjects(data.filter(x => x.type === 'work'))

    return (
      <div className="portfolio">
        <div className="work mt-80">
          <h1 className="text-3xl lg:text-4xl lg:w-3/4">Work Portfolio</h1>
          <div className="grid">{work}</div>
        </div>
      </div>
    )
  }
}

export default Projects
