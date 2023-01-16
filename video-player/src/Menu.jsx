import './Menu.css'

export function Menu({ videoNames, onSelectVideo }) {
  return (
    <form className='video-list' onClick={(event) => onSelectVideo(event.target.value)}>
      {videoNames.map(videoName => (
        <div className='video-list-names' key={videoName}>
          <input type="radio" name='src' value={videoName} id={videoName} />
          <label htmlFor={videoName}>{videoName}</label>
        </div>
      ))}
    </form>
  )
}
