
"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Detail from "./detail.module.jsx";

ReactDOM.render(
	<div>
		<Detail
			name="test-1"
			title="Hello World"
			value="This is a normal value"
		/>
		<Detail
			name="test-2"
			title="Hello World"
			value="This is a normal value"
			reverse="true"
		/>
		<Detail
			name="test-3"
			title="Hello World"
			value="This is a normal value"
			align="center"
		/>
		<Detail
			name="test-4"
			title="Hello World"
			value="This is a normal value"
			background-color="blue"
			foreground-color="white"
		/>
	</div>,
	document.getElementById( "root" )
);
