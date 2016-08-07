//引入模块样式
import styles from './MenuComponent.css';
import React, {Component} from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
const ACTIVE = { color: '#ff6100' };

var MenuComponent = React.createClass({
	getInitialState:function(){
		return {};
	},
	render:function(){
		var sidebar = this.props.navs['sidebar'];
		// var url = "http://localhost:9000/app/home",
		// 	headers = {
		// 		"Content-Type": "application/json"
		// 	},
		// 	body = {},
		// 	method = "POST";
		// fetch(url, headers, body, method, function(data) {
		// 	console.log(data);
		// })
		console.log(ajax);
		return (
			<div className="sidebar">
				<div className="profile">
					<a></a>
					<span>多啦博客</span>
				</div>

				<ul>
					{
						sidebar.map(function(nav, index){
							var style = '';
							var iconcss = nav.iconcss;
							var url = nav.url;
							var text = nav.text;
							var nowcss = nav.nowcss;
							return <li><Link to={url} activeStyle={ACTIVE}><i className={iconcss}></i>{text}</Link></li>
						})
					}
		        </ul>
			</div>
		)
	}
});
export default MenuComponent;