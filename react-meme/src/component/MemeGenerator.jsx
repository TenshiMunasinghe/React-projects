import React, {Component} from "react";

class MemeGenerator extends Component {
	state = {
		topText: "",
		bottomText: "",
		randomImg: "http://i.imgflip.com/1bij.jpg",
		allMemeImgs: []
	};

	componentDidMount = () => {
		fetch("https://api.imgflip.com/get_memes")
			.then(res => res.json())
			.then(res => this.setState({allMemeImgs: res.data.memes}));
	};

	handleChange = e => {
		const {value, name} = e.target;
		this.setState({[name]: value});
	};

	generateMeme = e => {
		e.preventDefault();
		let {randomImg, allMemeImgs} = this.state;
		const index = Math.floor(Math.random() * allMemeImgs.length);
		randomImg = allMemeImgs[index].url;
		console.log(randomImg);
		this.setState({randomImg});
	};

	render() {
		const {topText, bottomText, randomImg} = this.state;
		return (
			<div className='meme-generator'>
				<form onSubmit={this.generateMeme}>
					<input
						type='text'
						name='topText'
						value={topText}
						placeholder='top text'
						onChange={this.handleChange}
					/>
					<input
						type='text'
						name='bottomText'
						value={bottomText}
						placeholder='bottom text'
						onChange={this.handleChange}
					/>
					<input type='submit' value='Generate' />
				</form>

				<div className='meme'>
					<img src={randomImg} alt='' />
					<h2 className='top'>{topText}</h2>
					<h2 className='bottom'>{bottomText}</h2>
				</div>
			</div>
		);
	}
}

export default MemeGenerator;