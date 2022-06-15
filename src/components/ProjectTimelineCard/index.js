import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {eachItem} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = eachItem
  return (
    <div>
      <img src={imageUrl} alt="project" className="projectImage" />
      <div className="titleContainer">
        <h1>{projectTitle}</h1>
        <div className="duration">
          <AiFillCalendar color="#171f46" />
          <p className="para">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
