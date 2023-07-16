import React, { useEffect, useRef, useState } from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import SocialLinks from "./components/_SocialLinks";

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    const mainRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true)
    const [headerHeight, setHeaderHeight] = useState(1536);
    const [bannerHeight, setBannerHeight] = useState(256);

    useEffect(() => {
        const tempHeaderHeight = Math.max(384, window.innerHeight);
        setHeaderHeight(tempHeaderHeight);
        setBannerHeight(Math.max(256, tempHeaderHeight / 2));
        setIsLoading(false);
        mainRef.current.hidden = false;
    }, []);

    return (
        <Layout title="Home" description={siteConfig.tagline}>
            <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
                <div
                    className={styles.heroBannerWrapper}
                    style={{ minHeight: bannerHeight, display: isLoading ? "none" : "block" }}
                >
                    <p>Hi, my name is</p>
                    <h1 className="text-primary-default">Soham Gotkhindikar.</h1>
                    <p>
                        A <span className="text-purp">constantly curious</span> student at <span className="text-danger">NC State University </span>studying <span className="text-warning">mechanical engineering</span> and{" "}
                        <span className="text-success">computer science.</span>
                    </p>
                    <br />
                    {/* <SocialLinks /> */}
                    <p>
                        <Link to={useBaseUrl("#about")}>
                            <button className="border-2 rounded p-2 pl-4 pr-4 bg-primary-900 hover:bg-primary-800 transition text-white text-lg cursor-pointer">about me
                            </button>
                        </Link>
                    </p>
                </div>
            </header>
            <main id="about" ref={mainRef} hidden={true}>
                <div className={styles.aboutHeader}>
                    <h2 className="border-0 border-b-4 border-solid border-success">Who am I?</h2>
                </div>
                <div className={styles.about}>
                    <div>
                        <img
                            className={styles.aboutProfilePic}
                            src={useBaseUrl("img/profilepc.png")}
                        />
                    </div>
                    <div className={styles.aboutText}>
                        <h2>Hi there!</h2>
                        <p>
                            😎 I'm Soham, an aspiring engineer from Raleigh, NC.
                        </p>
                        <p>
                            🎓 Studying mechanical engineering and computer science at <a href="https://www.ncsu.edu">NC State</a> (3rd-year).
                        </p>
                        <p>
                            🤖 From robots to rockets, I love seeing my ideas {" "}
                            <Link to={useBaseUrl("portfolio/")}>
                                come to life
                            </Link>
                            .
                        </p>
                        <p>
                            ⚙️ Interning with <a href="https://www.plexus.com/en-us">
                                Plexus Corp.
                            </a>{" "} as a mechanical design engineer over the summer.
                        </p>
                        <p>
                            🚀 Designing <a href="https://liquidrocketry.com/">liquid-fueled rockets</a>{" "} and an <a href="https://www.ncstatebaja.com/"> off-road race buggy</a>{" "} extracurricular.
                        </p>
                        {/* <p>
                            🛠️ Building an off-road race buggy on the Wolfpack SAE Baja team.
                        </p> */}
                        <p>
                            👨‍💻 Developing full-stack web-apps part-time with <a href="https://it.engr.ncsu.edu/">campus engineering IT</a>
                            .
                        </p>
                        <p>
                            🚵 Hitting the <a href="https://www.strava.com/athletes/90810817">trails</a>, enjoying nature, and spending time with family!
                        </p>

                    </div>
                </div>
                <section className={styles.directory}>
                    <div className="container">
                        <h3>Continue exploring?</h3>
                        <nav className="pagination-nav">
                            <div className="pagination-nav__item">
                                <Link className="pagination-nav__link" to={useBaseUrl("blog/")}>
                                    <div className="pagination-nav__sublabel">Read</div>
                                    <div className="pagination-nav__label">My blog</div>
                                </Link>
                            </div>
                            <div className="pagination-nav__item pagination-nav__item--next">
                                <Link className="pagination-nav__link" to={useBaseUrl("docs/")}>
                                    <div className="pagination-nav__sublabel">Refer to</div>
                                    <div className="pagination-nav__label">My docs</div>
                                </Link>
                            </div>
                        </nav>
                        <nav className="pt-6 pagination-nav">
                            <div className="pagination-nav__item">
                                <Link
                                    className="pagination-nav__link"
                                    to={useBaseUrl("portfolio/")}
                                >
                                    <div className="pagination-nav__sublabel">Check out</div>
                                    <div className="pagination-nav__label">My projects</div>
                                </Link>
                            </div>
                            <div className="pagination-nav__item pagination-nav__item--next">
                                <a
                                    className="pagination-nav__link"
                                    href={useBaseUrl("https://drive.google.com/file/d/1-ZMQuWRKqaYSiYUYOD-eMxkxzdeSkGtr/view?usp=sharing")}
                                >
                                    <div className="pagination-nav__sublabel">Download</div>
                                    <div className="pagination-nav__label">My resume</div>
                                </a>
                            </div>
                        </nav>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export default Home;
