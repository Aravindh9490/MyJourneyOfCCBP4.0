import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetail} = props
  const {
    projectUrl,
    duration,
    imageUrl,
    description,
    projectTitle,
  } = projectDetail
  return (
    <div className="p-3">
      <img className="w-100  img-fluid" src={imageUrl} alt={projectTitle} />
      <div className="d-flex flex-row justify-content-between">
        <h4>{projectTitle}</h4>
        <div className="d-flex flex-row">
          <AiFillCalendar className="m-2" />
          <p className="p-1">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <p className="fw-bold">
        <a
          className="unstyled fw-bold"
          href={projectUrl}
          rel="noreferrer"
          target="_blank"
        >
          Visit
        </a>
      </p>
    </div>
  )
}

export default ProjectTimelineCard
