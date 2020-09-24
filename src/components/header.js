import React from "react"
import styles from "./header.module.scss"
import { graphql, Link, StaticQuery } from "gatsby"


export default () =>
(

<StaticQuery

  query={graphql`query {site{siteMetaData{title}}}`}

  render={data => (<header className={styles.container}>
    <div className={styles.row}>
      <HomeButton to='/' text={data.site.siteMetaData.title}/>
      <SocialButton site='github' username='evangeloper'/>
      <SocialButton site='linkedin' username='evangeloper' />
      <SocialButton site='twitter' username='evangeloper' />
    </div>
    <div className={styles.row}>
      <HeaderLink to="/about" text='ARTICLES' /><HeaderLink to="/" text='BLOG' />
    </div>
  </header>)}

/>)


// when creating a  'componnent' or sub component inside of a component, you need to use thje '()' brackets.
//Header link component
const HeaderLink = props => (
  <Link className={styles.link} to={props.to}>{props.text}</Link>
)

//home button
const HomeButton = props => (
  <Link to={props.to}>
    <div className={styles.button}>
      {props.text}
    </div>
  </Link>
)

// SocialButton component
const SocialButton = (props) => {

  let style = ""
  let url = ""

  if (props.site === "twitter") {
    style = styles.buttonTwitter
    url = "https://twitter.com/" + props.username
  } else if (props.site === "linkedin") {
    style = styles.buttonLinkedin
    url = "https://www.linkedin.com/in/" + props.username
  } else if (props.site === "github") {
    style = styles.buttonGithub
    url = "https://www.github.com/" + props.username
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={style}>{props.children}&nbsp;</div>
    </a>
  )

}

