import React from 'react';
import './styles.scss';

const BlogPages = () => (
    <>
        <div className="topBand"></div>
        <header className="pageHeader">
            <div className="headerImage"></div>
            <h1 className="authorName">SANTHANAM ELUMALAI</h1>
            <nav className="primaryNavigation">
                <ul>
                    <li>
                        <a href="#">About Me</a>
                    </li>
                    <li>
                        <a href="#">Codepen</a>
                    </li>
                    <li>
                        <a href="#">Github</a>
                    </li>
                </ul>
            </nav>
        </header>
        <div className="pageContainer">
            <blockquote className="quotedText">
                <p>TODO: Need to add some valuable information for the control-group.</p>
            </blockquote>
            <main role="main" className="pageBody">
                <div className="pageArticles">
                    <h2 className="sectionTitle">Recent Articles</h2>
                    <article className="articleContainer">
                        <h3 className="articleHeader">
                            <a href="#">Lorem Ipsum has been the industry's standard.</a>
                        </h3>
                        <p className="articleContent">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries,
                        </p>
                        <div className="articleFooter">
                            <time dateTime="2018-07-07">July 7th 2018</time>
                            <nav className="tagNavigation">
                                <ul>
                                    <li>
                                        <a href="#">UX</a>
                                    </li>
                                    <li>
                                        <a href="#">Design</a>
                                    </li>
                                    <li>
                                        <a href="#">Guides</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </article>
                    <article className="articleContainer">
                        <h3 className="articleHeader">
                            <a href="#">Lorem Ipsum has been the industry's standard.</a>
                        </h3>
                        <p className="articleContent">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries,
                        </p>
                        <div className="articleFooter">
                            <time dateTime="2018-07-07">July 7th 2018</time>
                            <nav className="tagNavigation">
                                <ul>
                                    <li>
                                        <a href="#">UX</a>
                                    </li>
                                    <li>
                                        <a href="#">Design</a>
                                    </li>
                                    <li>
                                        <a href="#">Guides</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </article>
                    <article className="articleContainer">
                        <h3 className="articleHeader">
                            <a href="#">Lorem Ipsum has been the industry's standard.</a>
                        </h3>
                        <p className="articleContent">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries,
                        </p>
                        <div className="articleFooter">
                            <time dateTime="2018-07-07">July 7th 2018</time>
                            <nav className="tagNavigation">
                                <ul>
                                    <li>
                                        <a href="#">UX</a>
                                    </li>
                                    <li>
                                        <a href="#">Design</a>
                                    </li>
                                    <li>
                                        <a href="#">Guides</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </article>
                </div>
                <div className="pageCategories">
                    <h2 className="sectionTitle">Categories</h2>
                    <nav className="categoryNavigation">
                        <ul>
                            <li>
                                <a href="#">Web development</a>
                            </li>
                            <li>
                                <a href="#">Javascript</a>
                            </li>
                            <li>
                                <a href="#">React</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>
        </div>
        <footer className="pageFooter">
            <p className="powerdByText">This site is powered by Wordpress.</p>
            <h2 className="footerAuthorName">Santhanam Elumalai</h2>
            <p className="footerAuthorDescription">Software Engineer, Active learner and tech blogger.</p>
            <nav className="footerNavigation">
                <ul>
                    <li>
                        <a href="#">About Me</a>
                    </li>
                    <li>
                        <a href="#">Codepen</a>
                    </li>
                    <li>
                        <a href="#">Github</a>
                    </li>
                </ul>
            </nav>
        </footer>
    </>
);

export default BlogPages;
