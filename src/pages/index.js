import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Header from "../components/header"
import Banner from "../components/Banner"
import Cargo from "../components/Cargo"
import SemiBanner from "../components/SemiBanner"
import BannerCard from "../components/BannerCard"
import MiniCard from "../components/MiniCard"
import TrasposAcros from "../components/TrasposAcros"
import CustomerSay from "../components/CustomerSay"
import WhyChoose from "../components/WhyChoose"
import OurTeam from "../components/OurTeam"
import GetInTouch from "../components/GetInTouch"
import OurNews from "../components/OurNews"
import FooterBanner from "../components/FooterBanner"
import Footer from "../components/Footer"





const IndexPage = () => (
 <div className="w-full bg-white">
<Banner></Banner>
<Cargo></Cargo>
<SemiBanner></SemiBanner>
<BannerCard></BannerCard>
<MiniCard></MiniCard>
<TrasposAcros></TrasposAcros>
<CustomerSay></CustomerSay>
<WhyChoose></WhyChoose>
<OurTeam></OurTeam>
<GetInTouch></GetInTouch>
<OurNews></OurNews>
<FooterBanner></FooterBanner>
<Footer></Footer>
 </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
