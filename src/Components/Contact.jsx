import React from 'react'

const Contact = () => {
  return (
    <section className='min-w-[95%] md:max-w-[1400px] p-4 mx-auto mb-24'>
      <div className='max-w-[500px] mx-auto p-[2px] rounded-xl bg-gradient-to-br from-white/50 to-white/5 backdrop-blur-3xl animate-border shadow-2xl '>
        <div className='bg-black/60 backdrop-blur-3xl rounded-xl p-6'>
          <h3 className=' bg-gradient-to-br from-[#00FFFF] to-[#240024] text-transparent bg-clip-text text-4xl md:text-5xl md:mb-1 mb-0 font-semibold'>Get In Touch</h3>
          <p className='text-[#9b859b] font-semibold mb-2 text-sm'>I'm excited to collaborate and create something amazing together!</p>
          <form action="">
            <div>
              <input className='border border-[#3b3636] focus:outline-none focus:border-white  w-full p-2 rounded-full bg-white/5 mb-2 text-white' type="text" name="name" id="name" />
              <p className="err-msg"></p>
            </div>
            <div>
              <input className='border border-[#3b3636] focus:outline-none focus:border-white  w-full p-2 rounded-full bg-white/5 mb-2 text-white' type="email" name="email" id="email" />
              <p className="err-msg"></p>
            </div>
            <div>
              <textarea className='border border-[#2c2929] focus:outline-none focus:border-white w-full p-2 rounded-4xl bg-white/5  mb-2 text-white' name="message" id="message" cols="30" rows="10"></textarea>
              <p className="err-msg"></p>
            </div>
            <button type="submit" className="cursor-pointer w-full p-2 bg-white text-black font-semibold rounded-4xl">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
