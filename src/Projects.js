import React from 'react'
import { Link } from 'react-static'
import data from './data.json'

const Project = item => {
  const projectImageStyle = `border-${item.style} w-full border-8 border-solid block`
  const linkStyle = `no-underline text-${item.style}`
  return (
    <div className="my-8">
      <Link to={item.url} rel="nofollow">
        <img src={item.image} className={projectImageStyle} />
      </Link>
      <h2 className="mt-4 md:mt-8 text-xl md:text-2xl leading-normal">
        <Link to={item.url} rel="nofollow" className={linkStyle}>
          {item.title}
        </Link>
      </h2>
      <div className="text-base md:text-lg leading-normal">
        <div>
          <strong>Stack: </strong>
          <span class="stack-item">
            {item.stack.slice(0, -1).join(', ')}, {item.stack.slice(-1)[0]}
          </span>
        </div>
        <div className="mt-4">{item.desc}</div>
      </div>
    </div>
  )
}

const renderProjects = projects => {
  return projects.map(project => <Project key={project.url} {...project} />)
}

class Projects extends React.Component {
  render() {
    const work = renderProjects(data.filter(x => x.type === 'work'))
    const personal = renderProjects(data.filter(x => x.type === 'personal'))

    return (
      <div className="portfolio">
        <div className="work mt-80">
          <h1 className="text-3xl lg:text-4xl lg:w-3/4">Work Portfolio</h1>
          <div className="grid">{work}</div>
        </div>
        <div className="personal mt-80">
          <h1 className="text-3xl lg:text-4xl lg:w-3/4">Personal Projects</h1>
          <div className="grid">{personal}</div>
        </div>
      </div>
    )
  }
}

export default Projects
