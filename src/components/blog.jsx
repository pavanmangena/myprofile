import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Famous Blog</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://reactjs.org/" className="blog-img"><img src="images/reactJS.png" className="img-responsive" alt="react img" /></a>
						<div className="desc">
							<span><small>January 1, 2020  </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="https://reactjs.org/">ReactJS</a></h3>
							<p>How to learn ReactJS</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="https://www.w3schools.com/html/" className="blog-img"><img src="images/html.jpg" className="img-responsive" alt="html img" /></a>
						<div className="desc">
							<span><small>January 1, 2020 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="https://www.w3schools.com/html/">HTML</a></h3>
							<p>Practice HTML</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://www.w3schools.com/css/" className="blog-img"><img src="images/css.png" className="img-responsive" alt="css image" /></a>
						<div className="desc">
							<span><small>January 1, 2020  </small> | <small> Web design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="https://www.w3schools.com/css/">CSS</a></h3>
							<p>learn styling</p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 animate-box">
					<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
				</div>
			</div>
			</section>
      </div>
    )
  }
}
