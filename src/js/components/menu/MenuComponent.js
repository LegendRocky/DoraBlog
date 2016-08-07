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
		return (
			<div className="sidebar">
				<div className="avatar"></div>
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