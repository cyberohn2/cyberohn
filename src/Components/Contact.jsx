'use client';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send.');
      }
    } catch {
      setStatus('Failed to send.');
    }
  };

  return (
    <section id='contact' className='scroll-mt-20 min-w-[95%] md:max-w-[1400px] p-4 mx-auto mb-24'>
      <div className='max-w-[500px] mx-auto p-[2px] rounded-xl bg-gradient-to-br from-white/50 to-white/5 backdrop-blur-3xl animate-border shadow-2xl '>
        <div className='bg-black/60 backdrop-blur-3xl rounded-xl p-6'>
          <h3 className='termina bg-gradient-to-br from-[#00FFFF] to-[#ff00ea] text-transparent bg-clip-text text-4xl md:text-5xl md:mb-1 mb-0 font-semibold'>Get In Touch</h3>
          <p className='text-[#9b859b] font-semibold mb-2 text-sm'>I'm excited to collaborate and create something amazing together!</p>
          <form onSubmit={handleSubmit}>
            <div>
              <input placeholder="Name" className='border border-[#3b3636] focus:outline-none focus:border-white  w-full p-2 rounded-full bg-white/5 mb-2 text-white' type="text" name="name" id="name" value={form.name} onChange={handleChange} required />
              <p className="err-msg"></p>
            </div>
            <div>
              <input placeholder="E-mail" className='border border-[#3b3636] focus:outline-none focus:border-white  w-full p-2 rounded-full bg-white/5 mb-2 text-white' type="email" name="email" id="email" value={form.email} onChange={handleChange} required />
              <p className="err-msg"></p>
            </div>
            <div>
              <textarea placeholder="Message for me" className='border border-[#2c2929] focus:outline-none focus:border-white w-full p-2 rounded-4xl bg-white/5  mb-2 text-white' name="message" id="message" cols="30" rows="10" value={form.message} onChange={handleChange} required></textarea>
              <p className="err-msg"></p>
            </div>
            <button type="submit" className="cursor-pointer w-full p-2 bg-white text-black font-semibold rounded-4xl">Send</button>
            {status && <p className="mt-2 text-center text-sm">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
