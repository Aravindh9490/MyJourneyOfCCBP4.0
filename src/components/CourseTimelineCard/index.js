import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetail} = props
  const {tagsList, description, duration, courseTitle} = courseDetail

  return (
    <div className="w-100 p-3">
      <div className="d-flex flex-row justify-content-between">
        <h5 className="fw-bold">{courseTitle}</h5>
        <div className="d-flex flex-row justify-content-center">
          <AiFillClockCircle className=" mt-2" />
          <p className="p-1">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="d-flex flex-wrap list-unstyled">
        {tagsList.map(tags => (
          <li className="bg-primary text-light shadow m-2 rounded p-1  ">
            {tags.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
