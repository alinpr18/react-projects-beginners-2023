import './Video.css'

export function Video({ videoSrc }) {
  return (
    <div className='video-player-container'>
      <video autoPlay controls muted loop src={videoSrc}></video>
    </div>
  )
}
