import { useState } from 'react';
import './App.css'
import { Menu } from './Menu';
import { Video } from './Video';

const videos = {
  deer:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
};

const videoNames = Object.keys(videos)

export function App() {
  const [videoSrc, setVideoSrc] = useState(videos.deer)

  const onSelectVideo = (video) => {
    const videoSrc = videos[video]
    setVideoSrc(videoSrc)
  }

  return (
    <>
      <h1 className='project-title'>Project 6: Video Player</h1>
      <Menu videoNames={videoNames} onSelectVideo={onSelectVideo} />
      <Video videoSrc={videoSrc} />
    </>
  )
}
