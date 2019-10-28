/**
 * @typedef { import("@vue/cli-service").ProjectOptions } Options
 */

/**
 * @type { Options }
 */
module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	chainWebpack(config) {
		config.performance.maxAssetSize(2_097_152 /* 2 MiB */).maxEntrypointSize(5_242_880 /* 5 MiB */);
	}
};
