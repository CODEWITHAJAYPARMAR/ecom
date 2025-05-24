import React from 'react'
import countryFacts from '../api/countryData.json'
const About = () => {
  return (
    <section className='section-about container'>
      <h2 className='container-title'>
        Here are the interesting Facts
        <br/>
        We're proud of  
      </h2>
      <div className='gradient-cards'>
        {  countryFacts.map((country) => {
          const {id,countryName,capital,population,interestingFact}=country;
            return(
            <div className='card' key={id}>
              <div className='container-card bg-blue-box'>
                <p className='card-title'>{countryName}</p>
                <p>
                  <span className='card-description'>Capital:</span>
                    {capital}
                </p>
                <p>
                  <span className='card-description'>Population:</span>
                  {population}
                </p>
                <p>
                  <span className='card-description'>Interesting Fact:</span>
                  {interestingFact}
                </p>

              </div>
            </div>
            )
          })
        }
      </div>
    </section>
  )
}

{/* <div className='card'>
  <div className='container-card bg-blue-box'>
    <p className='card-title'>India</p>
 
  
    <p>
      <span className='card-description'>Capital:</span>
      Delhi
    </p>
    <p>
      <span className='card-description'>Population:</span>
      140000000
    </p>
    <p>
      <span className='card-description'>Interesting Fact:</span>
      We Love India
    </p>
    
  </div> */
/* </div> */}
export default About