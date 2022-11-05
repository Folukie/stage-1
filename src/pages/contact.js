/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Footer from '../components/footer.component'

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  })
  const handleChange = (event) => {
    setFormData(event.target.value)
  }
  const Swal = require('sweetalert2')
  const onSubmit = (e) => {
    e.preventDefault()
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Message sent successfully!',
      showConfirmButton: false,
      timer: 1500,
    })
  }
  return (
    <div>
      <div className="w-2/5 mx-auto my-28 space-y-3 sm:w-full sm:px-6 sm:my-16">
        <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
        <p className="text-gray-600 text-lg">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form className="space-y-6 py-3" onSubmit={onSubmit}>
          <div className="grid grid-cols-2 justify-between gap-3 sm:grid-cols-1">
            <div className="grid space-y-2">
              <label
                for="first_name"
                className="text-gray-700 text-sm font-bold"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Enter your first name"
                required
                onChange={handleChange}
                className="border-2 rounded-md h-12 px-2 py-4 placeholder:text-sm w-full"
              />
            </div>
            <div className="grid space-y-2">
              <label
                for="last_name"
                className="text-gray-700 text-sm font-bold"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Enter your first name"
                required
                onChange={handleChange}
                className="border-2 rounded-md h-12 px-2 py-4 placeholder:text-sm w-full"
              />
            </div>
          </div>
          <div className="grid space-y-2">
            <label for="email" className="text-gray-700 text-sm font-bold">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="yourname@email.com"
              required
              onChange={handleChange}
              className="border-2 rounded-md h-12 px-2 py-4 placeholder:text-sm w-full"
            />
          </div>
          <div className="grid space-y-2">
            <label for="message" className="text-gray-700 text-sm font-bold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              form="message_form"
              rows="5"
              cols="33"
              required
              onChange={handleChange}
              className="border-2 rounded-md px-2 py-4 placeholder:text-sm w-full"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            ></textarea>
          </div>
          <div className="flex gap-3 text-gray-600 items-baseline">
            <input type="checkbox" />
            <p>
              You agree to providing your data to FolukeOdus who may contact
              you.
            </p>
          </div>
          <button
            className="bg-blue w-full text-center text-white rounded-md h-12 font-bold disabled:bg-opacity-50"
            id="btn_submit"
          >
            Send message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
