import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Finde extends React.Component {
	getInitialState() {
		return { state: true };
	}; 
	render() {
		var message = "";
		if(this.getInitialState()) {
			message = 'выбран!';
		}
		else {
			message = 'не выбрано!';
		}
		return (
			<div>
				<input type='checkbox' onChange={this.getInitialState()} defaultChecked={this.getInitialState()} />
				<p>Чекбокс {message}</p>
			</div>
			)
	};
}

export default Finde;