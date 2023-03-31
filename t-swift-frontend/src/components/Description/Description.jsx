import React from 'react'
import "../Description/Description.scss"

const Description = ({type}) => {
    if (type === "style"){
        return (
            <div className='description'>
                <h2 className='description__heading'>The Style Chameleon Taylor Swift</h2>
                <p className='description__content'>Taylor Swift has undergone a remarkable style evolution throughout her career. Beginning as a young country artist in the mid-2000s, Swift often wore cowboy boots, sundresses, and curly hair to complement her music's country sound. However, as her career progressed, so did her style. <br/>
                <br/>In the late 2000s, Swift began experimenting with a more glamorous look, wearing sequined dresses and high heels on the red carpet. By the early 2010s, she had fully embraced a more sophisticated style, often opting for elegant gowns with clean lines and minimal embellishments. She also began wearing her hair in a sleek, straight style, which became her signature look for several years. <br/>
                <br/>Around the mid-2010s, Swift's style took a more edgy turn, with the introduction of bold, dark colors and sharp, angular shapes. She began incorporating more leather, metallics, and rock-inspired accessories into her outfits, which complemented the sound of her music during this time. <br/>
                <br/>In recent years, Swift's style has become more playful and colorful, often incorporating bold prints and bright hues. She has also experimented with more eclectic, bohemian-inspired looks, including oversized sunglasses, flowy dresses, and statement jewelry. Overall, Taylor Swift's style evolution has been marked by her willingness to take risks and try new things, which has kept her fashion sense fresh and exciting throughout her career.</p>
            </div>
          )
    } else if (type === "album"){
        return (
            <div className='description'>
                <h2 className='description__heading'>The Musical Chameleon Taylor Swift</h2>
                <p className='description__content'>Taylor Swift's music has undergone a significant evolution throughout her career, with each album showcasing a different side of her artistry.
                <br/>Swift's early albums, released in the mid-2000s, featured country-inspired songs with relatable lyrics about teenage life, love, and heartbreak. Her self-titled debut album and its follow-up, Fearless, were both critical and commercial successes, earning her numerous awards and cementing her as a rising star in the country music scene.
                <br/>With the release of Speak Now in 2010, Swift began to experiment with different sounds and musical styles. The album featured more pop-influenced tracks, such as "Mine" and "The Story of Us," which foreshadowed her eventual transition into mainstream pop music.
                <br/>Swift's full embrace of pop came with the release of 1989 in 2014. The album marked a departure from her country roots and showcased a more synth-heavy sound, with catchy hooks and upbeat, danceable tracks. It was a critical and commercial success, earning Swift several awards and making her one of the biggest pop stars in the world.<br/>
                <br/>In 2017, Swift released Reputation, which featured darker, more introspective songs that addressed the media scrutiny she had faced in recent years. The album also experimented with hip-hop and electronic music, showing Swift's continued willingness to push the boundaries of her sound.<br/>
                <br/>Most recently, Swift's albums folklore and evermore have showcased a more stripped-down, indie-folk sound that has been praised by critics for its introspective lyrics and haunting melodies. Overall, Taylor Swift's music evolution has been marked by her willingness to experiment with different sounds and styles, while always maintaining her signature storytelling and emotional depth.<br/></p>
            </div>
          )
    }
  
}

export default Description