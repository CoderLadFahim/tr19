module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/_global.scss";`,
			},
		},
	},
};
