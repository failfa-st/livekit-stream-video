import Image from 'next/image'
import styles from './page.module.css'
import VideoPlayer from '@/components/video-player'

export default function Home() {
  return (
    <main className={styles.main}>
      <VideoPlayer src="video1.mp4" />
    </main>
  )
}
