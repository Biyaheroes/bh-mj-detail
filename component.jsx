
"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Detail from "./detail.js";

ReactDOM.render( <Detail
			title="Hello World" value="This is a normal value"
			title="Hello World" value="This is a normal value" reverse="true"
			title="Hello World" value="This is a normal value" align="center"
			title="Hello World" value="This is a normal value" background-color="blue" foreground-color="white"
			></Detail>,
document.getElementById( "root" )
);
