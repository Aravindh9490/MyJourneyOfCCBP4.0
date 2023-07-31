import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="mt-3">
      <h1 className="text-center">MY JOURNEY OF</h1>
      <h1 className="text-center fw-bold text-primary">CCBP 4.0</h1>
      <div className="mt-4">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            primary: '#0967d2',
            secondary: '#ffff',
            cardBgColor: '#ffffff',
            cardForeColor: 'black',
            titleColor: '#2b237c',
          }}
        >
          {timelineItemsList.map(courses =>
            courses.categoryId === 'COURSE' ? (
              <CourseTimelineCard key={courses.id} courseDetail={courses} />
            ) : (
              <ProjectTimelineCard key={courses.id} projectDetail={courses} />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
