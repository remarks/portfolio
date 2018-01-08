import React from 'react'
import { Link } from 'react-static'
import data from './data.json'

const renderStack = stack => <span className="stack-item">{stack}</span>

const Project = item => {
  const projectImageStyle = `border-${item.style} w-full border-8 border-solid block`
  const linkStyle = `no-underline border-b text-${item.style} transition`
  return (
    <div className="my-8">
      <Link to={item.url} rel="nofollow">
        <img src={item.image} className={projectImageStyle} />
      </Link>
      <h2 className="font-poppins mt-4 md:mt-8 text-xl leading-normal">
        <Link to={item.url} rel="nofollow" className={linkStyle}>
          {item.title}
        </Link>
      </h2>
      <div className="text-base leading-normal">
        <p className="mt-4">{item.desc}</p>
        <p className="mt-4">
          <strong>Stack: </strong>
          {item.stack.map(stack => renderStack(stack))}
        </p>
      </div>
    </div>
  )
}

const renderProjects = projects => {
  return projects.map(project => <Project {...project} />)
}

class Projects extends React.Component {
  render() {
    const work = renderProjects(data.filter(x => x.type === 'work'))
    const personal = renderProjects(data.filter(x => x.type === 'personal'))

    return (
      <div className="portfolio">
        <div className="work mt-80">
          <h1 className="font-poppins text-3xl lg:text-4xl lg:w-3/4">Work Portfolio</h1>
          <div className="grid">{work}</div>
        </div>
        <div className="personal mt-80">
          <h1 className="font-poppins text-3xl lg:text-4xl lg:w-3/4">Personal Projects</h1>
          <div className="grid">{personal}</div>
        </div>
      </div>
    )
  }
}

export default Projects
