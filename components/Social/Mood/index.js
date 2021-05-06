import Image from "@/components/Image"
import { useCallback, useEffect, useRef, useState } from "react"
const spotify = {
  name: "something",
  artists: "An artist?",
  cover: "",
  spotify: "",
  preview: "",
}

export default function Mood() {
  /** @type {{ current: HTMLAudioElement }} */
  let $track = useRef(null)
  const [song, setSong] = useState(spotify)

  useEffect(() => {
    fetch("/api/random_spotify_song")
      .then((r) => r.json())
      .then(setSong)
  }, [])

  const playSong = useCallback(() => {
    if (song.preview) {
      $track.current = $track.current || new Audio(song.preview)
      $track.current.currentTime = 0
      $track.current.play()
    } else {
      window.open(song.spotify, "_blank")
    }
  }, [song])

  const playSongTitle = song.preview ? "Tap to play" : "Tap to visit"
  return (
    <>
      <div className="bg-black w-full max-w-2xl">
        <div className="flex justify-end italic text-white font-bold text-5xl lg:text-7xl px-4 py-2">
          MY MOOD
        </div>
        <div className="relative p-3">
          <Image
            width={640}
            height={640}
            loading="eager"
            style={{ minHeight: "8rem", backgroundColor: "black" }}
            className="w-full h-full text-white"
            src={song.cover}
            alt="This might be loading, it's spotify fault!"
          />
          <div
            onClick={playSong}
            title={playSongTitle}
            className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 cursor-pointer"
          />
        </div>
      </div>
      <p className="lg:text-lg">
        Listening to{" "}
        <i>
          {song.name} by {song.artists}
        </i>
      </p>
    </>
  )
}
