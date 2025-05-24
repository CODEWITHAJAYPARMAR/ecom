// import React from 'react';

// const Contact = () => {
//   const handleFormSubmit = (e) => {
//     e.preventDefault(); // prevent default form submission
//     const formData = new FormData(e.target); // use the event's target (form)
//     const formInputData = Object.fromEntries(formData.entries());
//     console.log(formInputData);
//   };

//   return (
//     <section className='section-contact'>
//       <h2 className='container-title'>Contact Us</h2>

//       <div className='contact-wrapper container'>
//         <form onSubmit={handleFormSubmit}>
//           <input
//             type="text"
//             name="username"
//             placeholder="Enter your name"
//             required
//             autoComplete="off"
//           />
//           <input
//             type="text"
//             className="form-control"
//             name="email"
//             placeholder="Enter your email"
//             required
//             autoComplete="off"
//           />
//           <textarea
//             className="form-control"
//             rows="10"
//             placeholder="Enter your message"
//             name="message"
//             required
//             autoComplete="off"
//           ></textarea>
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from 'react'

const Contact = () => {
  const handleFormSubmit=(formData)=>{

    const formInputData=Object.fromEntries(formData.entries())
    console.log(formInputData);
  };
  return (
    
      <section className='section-contact'>
        <h2 className='container-title'>Contact Us</h2>

        <div className='contact-wrapper container'>
        <form action={handleFormSubmit}>
          <input type="text"
            name="username"
            placeholder='Enter your name'
            required 
            autoComplete='false'
          />
          <input type="text"

            className='form-control'
            name="email"
            placeholder='Enter your email'
            required
            autoComplete='false'

          />
           <textarea
            className='form-control'
            rows="10"
            placeholder='Enter your message'
            name="message"
            required 
            autoComplete='false'
           
            ></textarea>
            <button type='submit'>Send</button>
        </form>
        </div>
      </section>
      
    

  )
}

export default Contact   



