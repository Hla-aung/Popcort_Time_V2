import React from "react";
import Footer from "../footer/Footer"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from "@mui/material";
import "./Pricing.css"

const pricing = [
    {
        id: 1,
        plan: "Free",
        watch: "Watch on 1 supported device at a time",
        limit: "1 Movie per 5 Ads",
        ads: "Ad-supported Movies",
        download: "Download is not supported",
        quality: "Watch in 720p(HD)",
        pricing: "Free",
    },

    {
        id: 2,
        plan: "Basic",
        watch: "Watch on 1 supported device at a time",
        limit: "Unlimited Movies",
        ads: "Ad-free Movies",
        download: "Download is supported",
        quality: "Watch in 1080p(FHD)",
        pricing: "$7.99/month"
    },

    {
        id: 3,
        plan: "Premium",
        watch: "Watch on 2 supported devices at a time",
        limit: "Unlimited Movies",
        ads: "Ad-free Movies",
        download: "Download is supported",
        quality: "Watch in 2160p(UHD)",
        pricing: "$11.99/month"
    },

]

const Pricing = () => {
    return(
    <div className="pricing">
        <h1>Plans and Pricing</h1>
        <p>Popcorn Time offers a variety of plans to meet your entertainment needs. You can easily change your plan or cancel at any time.</p>
        <Grid container spacing={1}>
        {
            pricing.map((item) => (
                <Grid item lg={4} sm={12} >
                <Card sx={{backgroundColor: '#ffbd59', borderRadius: '20px'}} id={item.id} key={item.id} className="card">
                    <CardContent>
                        <h2>{item.plan}</h2>
                        <ul>
                            <li>{item.watch}</li>
                            <li>{item.limit}</li>
                            <li>{item.ads}</li>
                            <li>{item.download}</li>
                            <li>{item.quality}</li>
                            <li>{item.pricing}</li>
                        </ul>
                        </CardContent>
                        <button className="button" size="medium">Subscribe</button>
                    </Card>
                    </Grid>
            ))
        }
        </Grid>
        <div className="note">
            <i className="fa-solid fa-quote-left"></i>
                <span><b> Note: </b>Basic plan requires to watch ads and skipping ads is not allowed.<br>
                </br> Depending on where you live, you may be charged taxes in addition to your subscription price. </span>
            <i className="fa-solid fa-quote-right"></i>
        </div>

        <Footer />
    </div>
    )
}
export default Pricing