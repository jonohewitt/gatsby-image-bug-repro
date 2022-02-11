import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Image by https://unsplash.com/@aedrian
// Source: https://unsplash.com/photos/0pc0vvZ-fk0

export const ComponentWithStaticImage = () => {
  return (
    <StaticImage src="../images/photo-1.jpg" alt="" placeholder="blurred" />
  )
}
