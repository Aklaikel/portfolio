import React, { useRef } from 'react'
import { useState } from 'react'

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handlFocus = (e) => {
    e.target.classList.add('active');
  }
  const handlBlur = (e) => {
    e.target.classList.remove('active');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, 2000);
  }
  return (
   <section className="relative flex lg:flex-row flex-col max-container">
    <div className='flex-1 min-w-[50%] flex flex-col'>
    <h1 className='head-text'>Get in Touch</h1>
      <form
      onSubmit={handleSubmit}
      className='w-full flex flex-col gap-7 mt-14'
      >
        <label className='text-black-500 fonct-semibold'>Name</label>
        <input
        type='text' name='name' placeholder='Your Name' required value={form.name} onChange={handleChange}
        onFocus={handlFocus} onBlur={handlBlur}
        />
        <label className='text-black-500 fonct-semibold'>Email</label>
        <input
        type='email' name='email' placeholder='Your Email' required value={form.email} onChange={handleChange}
        onFocus={handlFocus} onBlur={handlBlur}
        />
        <label className='text-black-500 fonct-semibold'>Your message</label>
        <textarea
        type='message' rows={4} name='message' placeholder='Your Message' required value={form.message} onChange={handleChange}
        onFocus={handlFocus} onBlur={handlBlur} className='textarea'
        />
        <button
        type='submit' onFocus={handlFocus} onBlur={handlBlur}
        className='btn' disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
    </section>
  )
}

export default Contact