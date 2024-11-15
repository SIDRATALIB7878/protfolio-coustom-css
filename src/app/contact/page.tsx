// app/contact/page.tsx (if using Next.js 13+ with the App Router)
import React from 'react';

const ContactPage = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' , }}>
      <h1 className='cont'>CONTACT ME</h1>
      <form action="#" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"  placeholder="Your Name" required
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
           
          }}
        />
        <label htmlFor="email">Email:</label>
        <input type="email"id="email" name="email" placeholder="Your Email" required
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}/>

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        ></textarea>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#0070f3',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
