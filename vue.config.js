/**
 * @typedef { import("@vue/cli-service").ProjectOptions } Options
 */

/**
 * @type { Options }
 */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  chainWebpack(config) {
    config.performance.maxAssetSize(2097152 /* 2 MiB */).maxEntrypointSize(5242880 /* 5 MiB */);
  }
};
