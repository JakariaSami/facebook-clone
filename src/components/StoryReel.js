import React from 'react'
import './CSS/StoryReel.css'
import Story from './Story'

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story 
      image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTOl4WchC2t7UvD-eFK0LHWpBQ8ZFHfsblyA&usqp=CAU'
      profileSrc='https://s3.amazonaws.com/arc-authors/opb/ed9391fa-0aa3-46e5-8526-97cca2c2d8ad.png'
      title='Kall Halden'
      />
      <Story 
      image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ74AouZkVczggOYvh8xtISwFEssc122nJHjQ&usqp=CAU'
      profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8NwIuO1LcG2MkGLavzva6x8JEciUXAHz0gNdMFy9CbhUgdVlNko5FXySfw5DN-rWe_yQLu9yLDT1YvdE2Eho0-sClpXgmWHyFj6b2wuk&usqp=CAU&ec=45714081'
      title='Jakaria Sami'
      />
      <Story 
      image='https://specials-images.forbesimg.com/imageserve/5f0dadd7674a780007018f55/960x0.jpg?fit=scale'
      profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9dtTCBJOL9TK52wdYDfZCwLkhuh1zj33_OQ&usqp=CAU'
      title='Linus Troval'
      />
      <Story 
      image='https://www.befunky.com/images/wp/wp-2018-06-replace-color-tool-32.jpg?auto=webp&format=jpg&width=1184'
      profileSrc='https://qph.fs.quoracdn.net/main-qimg-88f854779acaf0f1abe66e5f74c312b2.webp'
      title='Micky Love'
      />
      <Story 
      image='https://topazlabs.com/wp-content/uploads/2020/02/TopazLabs_Ambassador_HarryCollins_11.jpg'
      profileSrc='https://img-0.journaldunet.com/q_Px3oiB1PHu5hFllyEMYqDLcPw=/1080x/smart/925a5b0ae0034281b2e83af34d80339d/ccmcms-jdn/10747834.jpg'
      title='Kall Halden'
      />
    </div>
  )
}
export default StoryReel
