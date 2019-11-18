function babelConfig(api) {
  if (api) {
    api.cache(false);
  }

  const presets = [`module:metro-react-native-babel-preset`];
  const plugins = [
    [
      `module-resolver`,
      {
        root: [`./`],
        extensions: [`.js`, `.ios.js`, `.android.js`],
        alias: {
          "~assets": `./src/assets`,
          "~components": `./src/components`,
          "~context": `./src/context`,
          "~data": `./src/data`,
          "~scss": `./src/scss`,
          "~utils": `./src/utils`,
          "~views": `./src/views`
        }
      }
    ]
  ];

  return {
    presets,
    plugins
  };
}

module.exports = babelConfig;
