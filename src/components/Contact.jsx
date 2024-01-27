import { useState } from "react"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    const serviceID = "service_s9crntm"
    const templateID ="template_z1fm2yy"
    const publicKey = "l1A7RnMKd6BVLZc64"
    const templateParams = {
      from_name: name,
      from_email: email,
      name: "Ariyan",
      message: message
    };

    emailjs.send(serviceID,templateID,templateParams,publicKey)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert("Your Message Has Been Sent Successfully");
       setName("");
       setEmail("");
       setMessage("");
    }, function(error) {
       console.log('FAILED...', error);
       alert("Something Went Wrong");
    });
  }
  return (
    <div id="Contact" class="p-4 lg:p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-left" class="text-[52px] font-semibold mb-20 leading-normal uppercase text-indigo-500 aos-init aos-animate">Contact Me</h1>
        <form className="flex flex-col gap-2 lg:w-1/2" onSubmit={handleSubmit}>
          <div className="lg:flex gap-9">
            <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-indigo-800 b_glow text-xl text-slate-500" placeholder="Enter Your Name" type="text" 
            value={name} onChange={(e) => setName(e.target.value)}/>
            <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-indigo-800 b_glow text-xl text-slate-300" placeholder="Enter Your Email"
            value={email} type="email" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-indigo-800 b_glow text-xl text-slate-300"
          placeholder="Write Your Massage..." name="" id="" cols="20" rows="10" spellcheck="false" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 border-indigo-800 bg-indigo-800 hover:text-indigo-500 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold"
          type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Contact