"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Biyaheroes Developers
		@email: developers@biyaheroes.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "detail",
			"path": "detail/detail.jsx",
			"file": "detail.jsx",
			"module": "detail",
			"author": "Biyaheroes Developers",
			"contributors": [
				"Robot Biyaheroes <robot@biyaheroes.com>",
				"Richeve S. Bebedor <richeve.bebedor@gmail.com>"
			],
			"eMail": "developers@biyaheroes.com",
			"repository": "https://github.com/Biyaheroes/bh-mj-detail.git",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Biyaheroes MJML Detail Component.
	@end-module-documentation

	@include:
		{
			"booleanize": "booleanize",
			"Component": "react.Component",
			"Column": "mjml-column",
			"falzy": "falzy",
			"MJMLElement": "mjml-core",
			"React": "react",
			"Table": "mjml-table",
			"wichevr": "wichevr"
		}
	@end-include
*/

//: @ignore:
import "./detail.scss";
//: @end-ignore

import React, { PureComponent } from "react";

import { MJMLElement } from "mjml-core";

import Column from "mjml-column";
import Table from "mjml-table";

import booleanize from "booleanize";
import falzy from "falzy";
import wichevr from "wichevr";

const tagName = "mj-detail";

const parentTag = [ "mj-container", "mj-section" ];

const endingTag = false;

const defaultMJMLDefinition = {
	"content": "",
	"attributes": {
		"name": "",
		"title": "",
		"label": "",
		"value": "",
		"count": 3,
		"align": "left",
		"reverse": false,
		"background-color": "white",
		"foreground-color": "black"
	}
};

const DEFAULT_DETAIL_MAXIMUM_COUNT = 3;

@MJMLElement
class Detail extends PureComponent {
	resolve( property ){
		const { mjAttribute } = this.props;

		let {
			name,
			title, label, value,
			count, align, reverse,
			backgroundColor, foregroundColor
		} = this.props;

		name = wichevr( name, mjAttribute( "name" ) );

		title = wichevr( title, label, mjAttribute( "title" ), mjAttribute( "label" ) );

		value = wichevr( value, mjAttribute( "value" ) );

		if( falzy( value ) ){
			title = "";
		}

		try{
			count = parseInt( wichevr( count, mjAttribute( "count" ), DEFAULT_DETAIL_MAXIMUM_COUNT ) );

		}catch( error ){
			count = DEFAULT_DETAIL_MAXIMUM_COUNT;
		}

		let width = `${ Math.round( ( 100 / count ) / 10 ) * 10 }%`;

		align = wichevr( align, mjAttribute( "align" ) );

		reverse = booleanize( wichevr( reverse, mjAttribute( "reverse" ) ) );

		backgroundColor = wichevr( backgroundColor, mjAttribute( "background-color" ) );

		foregroundColor = wichevr( foregroundColor, mjAttribute( "foreground-color" ) );

		return {
			"name": name,
			"title": title,
			"value": value,
			"align": align,
			"width": width,
			"reverse": reverse,
			"backgroundColor": backgroundColor,
			"foregroundColor": foregroundColor
		};
	}

	componentWillMount( ){
		this.setState( { "data": this.resolve( this.props ) } );
	}

	componentWillReceiveProps( property ){
		this.setState( { "data": this.resolve( property ) } );
	}

	render( ){
		let {
			title, value,
			align, width, reverse,
			backgroundColor, foregroundColor
		} = this.state.data;

		let titleComponent = (
			<td
				style={ {
					"padding": "0px 0px 0px 0px",
					"fontSize": "11px",
					"fontWeight": "500",
					"letterSpacing": "0.3px",
					"textTransform": "uppercase",
					"textAlign": align,
					"color": foregroundColor
				} }
			>
				{ title }
			</td>
		);

		let valueComponent = (
			<td
				style={ {
					"padding": "0px 0px 0px 0px",
					"fontSize": "15px",
					"letterSpacing": "0.3px",
					"textAlign": align,
					"color": foregroundColor
				} }
			>
				{ value }
			</td>
		);

		return (
			<Column
				width={ width }
				background-color={ backgroundColor }
			>
				<Table
					align={ align }
					table-layout="auto"
					width="auto"
				>
					<tr>
						{ reverse? valueComponent : titleComponent }
					</tr>
					<tr>
						{ reverse? titleComponent : valueComponent }
					</tr>
				</Table>
			</Column>
		);
	}

	componentDidMount( ){
		$( ReactDOM.findDOMNode( this ) )
			.addClass( "bh-mj-detail" )
			.addClass( this.state.data.name )
			.append( `
				<link
					class="bh-mj-detail style"
					rel="stylesheet"
					type="text/css"
					href="https://unpkg.com/bh-mj-detail/detail.css"
				/>
			` );
	}

	componentWillUnmount( ){
		$( ".bh-mj-detail.style" ).remove( );
	}
}

Detail.tagName = tagName;
Detail.parentTag = parentTag;
Detail.endingTag = endingTag;
Detail.defaultMJMLDefinition = defaultMJMLDefinition;

export default Detail;
