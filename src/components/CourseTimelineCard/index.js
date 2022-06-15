import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {eachItem} = props
  const {courseTitle, description, duration, tagsList} = eachItem
  return (
    <div>
      <div className="container">
        <h1>{courseTitle}</h1>
        <div className="duration">
          <AiFillClockCircle color="#171f46" />
          <p style={{margin: '3px'}}>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="itemsContainer">
        {tagsList.map(eachItems => (
          <div style={{backgroundColor: '808080'}}>
            <button type="button" className="items">
              {eachItems.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
