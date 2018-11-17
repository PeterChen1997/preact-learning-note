import { h, Component } from 'preact';

class Home extends Component {
	state = {
		todoArr: [
			'123',
			'321'
		],
		inputValue: ''
	}

	handleClick = () => {
		let newTodoArr = Array.from(this.state.todoArr)
		newTodoArr.push(this.state.inputValue)
		console.log(newTodoArr)
		this.setState({
			todoArr: newTodoArr,
			inputValue: ''
		})
	}

	handleInput = (e) => {
		this.setState({
			inputValue: e.target.value
		})
	}

	render() {
		return (
			<div className="container">
				<div className="input-area">
					<input onChange={this.handleInput} value={this.state.inputValue}/>
					<button onClick={this.handleClick}>click</button>
				</div>

				<div className="todo-list">
					{ this.state.todoArr.map(item => <li key={item}>{item}</li>)}
				</div>
			</div>	
		)
	}
}

export default Home;
