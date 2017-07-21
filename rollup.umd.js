const banner = require("./banner")
const buble = require("rollup-plugin-buble")
const resolve = require("rollup-plugin-node-resolve")
const fileSize = require("rollup-plugin-filesize")
const commonjs = require("rollup-plugin-commonjs")
const json = require("rollup-plugin-json")
const nodent = require("rollup-plugin-nodent")
const alias = require("rollup-plugin-alias")

const config = {
	entry: "src/index.js",
	dest: "dist/embed.umd.js",
	moduleName: "EmbedJS",
	format: "umd",
	banner,
	sourceMap: true,
	plugins: [
		alias({
			"isomorphic-unfetch": "node_modules/unfetch/dist/unfetch.es.js"
		}),
		resolve({
			extensions: [".js", ".json"]
		}),
		json(),
		commonjs(),
		nodent({ promises: true, noRuntime: true, es6target: true }),
		buble(),
		fileSize()
	]
}

module.exports = config
