import React from 'react'
import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handlFocus = (e) => {
    e.target.classList.add('active');
  }
  const handlBlur = (e) => {
    e.target.classList.remove('active');
  }
  return (
   <section className="relative flex lg:flex-row flex-col max-container">
    <div className='flex-1 min-w-[50%] flex flex-col'>
    <h1 className='head-text'>Get in Touch</h1>
      <form
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
      </form>
    </div>
    </section>
  )
}

export default Contact