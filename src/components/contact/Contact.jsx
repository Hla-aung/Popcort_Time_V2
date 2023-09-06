import React from "react";
import Footer from "../footer/Footer";
import { Grid } from "@mui/material";
import "./Contact.css"

const Contact = () => {
    return(
        <div className="contact">
            <h1>Contact Us</h1>

            <Grid container spacing={2}>
                <Grid item lg={6} md={12} sm={12}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16662.732459996518!2d96.18056292457038!3d16.779226072336723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ecfbbdfe6ce7%3A0xaf2a19c99c332dd3!2zMTbCsDQ2JzQ4LjAiTiA5NsKwMTEnMTguNSJF!5e0!3m2!1sen!2smm!4v1670514342081!5m2!1sen!2smm"  title="myplace" style={{border : "1", borderRadius : "20px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="map"></iframe>
                </Grid>
                <Grid item lg={6} md={6} sm={12} className='otherContact'> 
                    <i className="fa-solid fa-home"></i><span> San Pya Street, Dawpone Township, Yangon </span><br/><br/>
                    <i className="fa-solid fa-phone"></i><a href="tel:+959795799397"><span> (+95)979 579 9397</span></a><br/><br/>
                    <i className="fa-brands fa-facebook"></i><a href="https://www.facebook.com/profile.php?id=100057543196999" target="_blank" rel="noreferrer"><span> Htet Lin Aung</span></a><br/>
                    <i className="fa-brands fa-github"></i><a href="https://github.com/Hla-aung" target="_blank" rel="noreferrer"><span> Hla-aung</span></a><br/>
                    <i className="fa-solid fa-envelope"></i><span> htetlinaung.hla109@proton.me</span>
                </Grid>
            </Grid>

            <Footer />
        </div>
    )
}

export default Contact