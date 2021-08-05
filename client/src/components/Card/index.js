import React from "react";
import "./style.css";

const Card = (props) => {
	
	if(!props.src) {
		props.src = "https://materializecss.com/images/sample-1.jpg"
	}

	return (
			<div class="col s3">
				<div class="card">
					<div class="card-image">
						<img src={props.src}></img>
						<span class="card-title">Card Title</span>
					</div>

					<div class="card-content">
						<p>
							I am a very simple card. I am good at containing
							small bits of information. I am convenient because I
							require little markup to use effectively.
						</p>
					</div>
				</div>
			</div>
	);
};

export default Card;
