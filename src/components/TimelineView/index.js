import {Component} from 'react'

import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="chrono-container" style={{textAlign: 'center'}}>
        <h1 style={{color: '#2b237c'}}>MY TIMELINE APPLICATION</h1>
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(eachItem =>
            eachItem.categoryId === 'COURSE' ? (
              <CourseTimelineCard eachItem={eachItem} />
            ) : (
              <ProjectTimelineCard eachItem={eachItem} />
            ),
          )}
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
