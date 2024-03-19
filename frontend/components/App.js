import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const apiKey = "DEMO_KEY"
const URL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          // console.log(res.data)
          setApod(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }

    //  fetchPhoto()

    setApod({
      "date": "2024-03-19",
      "explanation": "What's that at the end of the road? The Sun. Many towns have roads that run east-west, and on two days each year, the Sun rises and sets right down the middle. Today, in some parts of the world (tomorrow in others), is one of those days: an equinox.  Not only is this a day of equal night (\"aequus\"-\"nox\") and day time, but also a day when the sun rises precisely to the east and sets due west. Displayed here is a picturesque rural road in Alberta, Canada that runs approximately east-west. The feat...",
      "hdurl": "https://apod.nasa.gov/apod/image/2403/EquinoxSunset_Dyer_1701.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "A Picturesque Equinox Sunset",
      "url": "https://apod.nasa.gov/apod/image/2403/EquinoxSunset_Dyer_960.jpg"
    })

  }, [])

  if (!apod) return "Fetching Photo of the Day..."

  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageUrl={apod.url}
        date={apod.date}
      />
    </section>
  )
}

export default App
