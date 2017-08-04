"use strict";

/*;
              	@test-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "bh-mj-detail",
              			"path": "bh-mj-detail/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Biyaheroes Developers",
              			"contributors": [
              				"Robot Biyaheroes <robot@biyaheroes.com>",
              				"Richeve S. Bebedor <richeve.bebedor@gmail.com>"
              			],
              			"eMail": "developers@biyaheroes.com",
              			"repository": "https://github.com/Biyaheroes/bh-mj-detail.git",
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"path": "path",
              			"same": "looks-same",
              			"scrshot": "scrshot"
              		}
              	@end-include
              */

var assert = require("should");

//: @bridge:
var fs = require("fs");
var path = require("path");
var same = require("looks-same");
var scrshot = require("scrshot");
//: @end-bridge

//: @bridge:
describe("bh-mj-detail", function () {
	var renderBase = path.resolve(__dirname, "render.base.png");
	var renderShot = path.resolve(__dirname, "render.test.png");
	describe("render based comparison", function () {
		it("should be equal", function (done) {
			same(renderBase, renderShot, { "tolerance": 1 }, function (error, equal) {
				if (error instanceof Error) {
					done(error);

				} else if (equal) {
					done();

				} else {
					done(new Error("render image test not equal"));
				}
			});
		});

		after(function () {return fs.unlinkSync(renderShot);});
	});

	var componentBase = path.resolve(__dirname, "component.base.png");
	var componentShot = path.resolve(__dirname, "component.test.png");
	describe("component based comparison", function () {
		it("should be equal", function (done) {
			same(componentBase, componentShot, { "tolerance": 1 }, function (error, equal) {
				if (error instanceof Error) {
					done(error);

				} else if (equal) {
					done();

				} else {
					done(new Error("component image test not equal"));
				}
			});
		});

		after(function () {return fs.unlinkSync(componentShot);});
	});
});
//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJmcyIsInBhdGgiLCJzYW1lIiwic2Nyc2hvdCIsImRlc2NyaWJlIiwicmVuZGVyQmFzZSIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJyZW5kZXJTaG90IiwiaXQiLCJkb25lIiwiZXJyb3IiLCJlcXVhbCIsIkVycm9yIiwiYWZ0ZXIiLCJ1bmxpbmtTeW5jIiwiY29tcG9uZW50QmFzZSIsImNvbXBvbmVudFNob3QiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7O0FBRUE7QUFDQSxJQUFNQyxLQUFLRCxRQUFTLElBQVQsQ0FBWDtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUcsT0FBT0gsUUFBUyxZQUFULENBQWI7QUFDQSxJQUFNSSxVQUFVSixRQUFTLFNBQVQsQ0FBaEI7QUFDQTs7QUFFQTtBQUNBSyxTQUFVLGNBQVYsRUFBMEIsWUFBTztBQUNoQyxLQUFJQyxhQUFhSixLQUFLSyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsaUJBQXpCLENBQWpCO0FBQ0EsS0FBSUMsYUFBYVAsS0FBS0ssT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGlCQUF6QixDQUFqQjtBQUNBSCxVQUFVLHlCQUFWLEVBQXFDLFlBQU87QUFDM0NLLEtBQUksaUJBQUosRUFBdUIsVUFBRUMsSUFBRixFQUFZO0FBQ2xDUixRQUFNRyxVQUFOLEVBQWtCRyxVQUFsQixFQUE4QixFQUFFLGFBQWEsQ0FBZixFQUE5QixFQUFrRCxVQUFFRyxLQUFGLEVBQVNDLEtBQVQsRUFBb0I7QUFDckUsUUFBSUQsaUJBQWlCRSxLQUFyQixFQUE0QjtBQUMzQkgsVUFBTUMsS0FBTjs7QUFFQSxLQUhELE1BR00sSUFBSUMsS0FBSixFQUFXO0FBQ2hCRjs7QUFFQSxLQUhLLE1BR0Q7QUFDSkEsVUFBTSxJQUFJRyxLQUFKLENBQVcsNkJBQVgsQ0FBTjtBQUNBO0FBQ0QsSUFWRDtBQVdBLEdBWkQ7O0FBY0FDLFFBQU8sb0JBQU9kLEdBQUdlLFVBQUgsQ0FBZVAsVUFBZixDQUFQLEVBQVA7QUFDQSxFQWhCRDs7QUFrQkEsS0FBSVEsZ0JBQWdCZixLQUFLSyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsb0JBQXpCLENBQXBCO0FBQ0EsS0FBSVUsZ0JBQWdCaEIsS0FBS0ssT0FBTCxDQUFjQyxTQUFkLEVBQXlCLG9CQUF6QixDQUFwQjtBQUNBSCxVQUFVLDRCQUFWLEVBQXdDLFlBQU87QUFDOUNLLEtBQUksaUJBQUosRUFBdUIsVUFBRUMsSUFBRixFQUFZO0FBQ2xDUixRQUFNYyxhQUFOLEVBQXFCQyxhQUFyQixFQUFvQyxFQUFFLGFBQWEsQ0FBZixFQUFwQyxFQUF3RCxVQUFFTixLQUFGLEVBQVNDLEtBQVQsRUFBb0I7QUFDM0UsUUFBSUQsaUJBQWlCRSxLQUFyQixFQUE0QjtBQUMzQkgsVUFBTUMsS0FBTjs7QUFFQSxLQUhELE1BR00sSUFBSUMsS0FBSixFQUFXO0FBQ2hCRjs7QUFFQSxLQUhLLE1BR0Q7QUFDSkEsVUFBTSxJQUFJRyxLQUFKLENBQVcsZ0NBQVgsQ0FBTjtBQUNBO0FBQ0QsSUFWRDtBQVdBLEdBWkQ7O0FBY0FDLFFBQU8sb0JBQU9kLEdBQUdlLFVBQUgsQ0FBZUUsYUFBZixDQUFQLEVBQVA7QUFDQSxFQWhCRDtBQWlCQSxDQXhDRDtBQXlDQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYmgtbWotZGV0YWlsXCIsXG5cdFx0XHRcInBhdGhcIjogXCJiaC1tai1kZXRhaWwvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiQml5YWhlcm9lcyBEZXZlbG9wZXJzXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiUm9ib3QgQml5YWhlcm9lcyA8cm9ib3RAYml5YWhlcm9lcy5jb20+XCIsXG5cdFx0XHRcdFwiUmljaGV2ZSBTLiBCZWJlZG9yIDxyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcImRldmVsb3BlcnNAYml5YWhlcm9lcy5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9CaXlhaGVyb2VzL2JoLW1qLWRldGFpbC5naXRcIixcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcInBhdGhcIjogXCJwYXRoXCIsXG5cdFx0XHRcInNhbWVcIjogXCJsb29rcy1zYW1lXCIsXG5cdFx0XHRcInNjcnNob3RcIjogXCJzY3JzaG90XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG4vLzogQGJyaWRnZTpcbmNvbnN0IGZzID0gcmVxdWlyZSggXCJmc1wiICk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcbmNvbnN0IHNhbWUgPSByZXF1aXJlKCBcImxvb2tzLXNhbWVcIiApO1xuY29uc3Qgc2Nyc2hvdCA9IHJlcXVpcmUoIFwic2Nyc2hvdFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuLy86IEBicmlkZ2U6XG5kZXNjcmliZSggXCJiaC1tai1kZXRhaWxcIiwgKCApID0+IHtcblx0bGV0IHJlbmRlckJhc2UgPSBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJyZW5kZXIuYmFzZS5wbmdcIiApO1xuXHRsZXQgcmVuZGVyU2hvdCA9IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcInJlbmRlci50ZXN0LnBuZ1wiICk7XG5cdGRlc2NyaWJlKCBcInJlbmRlciBiYXNlZCBjb21wYXJpc29uXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsXCIsICggZG9uZSApID0+IHtcblx0XHRcdHNhbWUoIHJlbmRlckJhc2UsIHJlbmRlclNob3QsIHsgXCJ0b2xlcmFuY2VcIjogMSB9LCAoIGVycm9yLCBlcXVhbCApID0+IHtcblx0XHRcdFx0aWYoIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgKXtcblx0XHRcdFx0XHRkb25lKCBlcnJvciApO1xuXG5cdFx0XHRcdH1lbHNlIGlmKCBlcXVhbCApe1xuXHRcdFx0XHRcdGRvbmUoICk7XG5cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0ZG9uZSggbmV3IEVycm9yKCBcInJlbmRlciBpbWFnZSB0ZXN0IG5vdCBlcXVhbFwiICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblxuXHRcdGFmdGVyKCAoICkgPT4gZnMudW5saW5rU3luYyggcmVuZGVyU2hvdCApICk7XG5cdH0gKTtcblxuXHRsZXQgY29tcG9uZW50QmFzZSA9IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImNvbXBvbmVudC5iYXNlLnBuZ1wiICk7XG5cdGxldCBjb21wb25lbnRTaG90ID0gcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiY29tcG9uZW50LnRlc3QucG5nXCIgKTtcblx0ZGVzY3JpYmUoIFwiY29tcG9uZW50IGJhc2VkIGNvbXBhcmlzb25cIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWxcIiwgKCBkb25lICkgPT4ge1xuXHRcdFx0c2FtZSggY29tcG9uZW50QmFzZSwgY29tcG9uZW50U2hvdCwgeyBcInRvbGVyYW5jZVwiOiAxIH0sICggZXJyb3IsIGVxdWFsICkgPT4ge1xuXHRcdFx0XHRpZiggZXJyb3IgaW5zdGFuY2VvZiBFcnJvciApe1xuXHRcdFx0XHRcdGRvbmUoIGVycm9yICk7XG5cblx0XHRcdFx0fWVsc2UgaWYoIGVxdWFsICl7XG5cdFx0XHRcdFx0ZG9uZSggKTtcblxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRkb25lKCBuZXcgRXJyb3IoIFwiY29tcG9uZW50IGltYWdlIHRlc3Qgbm90IGVxdWFsXCIgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdFx0YWZ0ZXIoICggKSA9PiBmcy51bmxpbmtTeW5jKCBjb21wb25lbnRTaG90ICkgKTtcblx0fSApO1xufSApO1xuLy86IEBlbmQtYnJpZGdlXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
