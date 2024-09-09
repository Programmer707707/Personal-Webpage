import React from 'react'
import "./Contact.scss";
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useEffect, useState } from 'react'

const Contact = () => {
  const form = useRef();

  return (
    <>
    <div className="container contact-page">
        <div className="contact-text-part">
          <h1>
            Contact me
          </h1> 
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND"/>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Contact