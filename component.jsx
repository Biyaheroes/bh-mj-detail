
"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Detail from "./detail.js";

ReactDOM.render(
	<div>
		<Detail
			title="Hello World"
			value="This is a normal value"
		>
		</Detail>

		<Detail
			title="Hello World"
			value="This is a normal value"
			reverse="true"
		>
		</Detail>

		<Detail
			title="Hello World"
			value="This is a normal value"
			align="center"
		>
		</Detail>

		<Detail
			title="Hello World"
			value="This is a normal value"
			background-color="blue"
			foreground-color="white"
		>
		</Detail>
	</div>,
	document.getElementById( "root" )
);
