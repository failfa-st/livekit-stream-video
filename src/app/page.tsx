import Image from 'next/image'
import styles from './page.module.css'
import VideoPlayer from '@/components/video-player'

export default function Home() {

  const videos = ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4", "video5.mp4"]

  return (
    <main className={styles.main}>
      <VideoPlayer src={videos} />
    </main>
  )
}
