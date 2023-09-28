module.exports = {
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      "@vue/app",
      {
        targets: { esmodules: true },
        polyfills: false,
      },
    ],
  ],
};
