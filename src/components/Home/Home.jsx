import LogoName from "../../assets/images/logo-s.png"
import { Link } from "react-router-dom"
import "./Home.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Loader from "react-loaders";
import Logo from "./Logo/Logo";

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
            <h1>
                <span className={letterClass} >H</span>
                <span className={`${letterClass} _12`} >i</span>
                 <br />
                 <span className={`${letterClass} _12`} >I</span>
                 <span className={`${letterClass} _12`} >'m</span>
                <img src={LogoName} alt="developer" />
                <span className={`${letterClass} _12`} >h</span>
                <span className={`${letterClass} _12`} >e</span>
                <span className={`${letterClass} _12`} >r</span>
                <span className={`${letterClass} _12`} >z</span>
                <span className={`${letterClass} _12`} >o</span>
                <span className={`${letterClass} _12`} >d</span>
                 <br />
                <span className={`${letterClass} _12`} >W</span>
                <span className={`${letterClass} _12`} >e</span>
                <span className={`${letterClass} _12`} >b</span>
                <span className={`${letterClass} _12`} > </span>
                <span className={`${letterClass} _12`} >D</span>
                <span className={`${letterClass} _12`} >e</span>
                <span className={`${letterClass} _12`} >v</span>
                <span className={`${letterClass} _12`} >e</span>
                <span className={`${letterClass} _12`} >l</span>
                <span className={`${letterClass} _12`} >o</span>
                <span className={`${letterClass} _12`} >p</span>
                <span className={`${letterClass} _12`} >e</span>
                <span className={`${letterClass} _12`} >r</span>
            </h1>

            <h2>Web Developer / Student </h2>
            <Link to={'/contact'} className="flat-button">CONTACT ME</Link>
        </div>

        <Logo/>
      </div>
      <Loader type="pacman"/>
    </>
  )
}

export default Home