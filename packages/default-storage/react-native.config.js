const project = (() => {
  const path = require("path");
  try {
    const { configureProjects } = require("react-native-test-app");
    return configureProjects({
      android: {
        sourceDir: path.join("sample", "android"),
      },
      ios: {
        sourceDir: path.join("sample", "ios"),
      },
      macos: {
        sourceDir: path.join("sample", "macos"),
      },
      windows: {
        sourceDir: path.join("sample", "windows"),
        solutionFile: path.join(
          "sample",
          "windows",
          "AsyncStorageExample.sln"
        ),
      },
    });
  } catch (_) {
    return undefined;
  }
})();

module.exports = {
  dependencies: {
    "@react-native-async-storage/async-storage": {
      root: __dirname,
      // rn-cli incorrectly resolves node_modules path for the following platforms
      platforms: {
        ios: null,
        macos: null,
      },
    },
    // We don't use Expo in our test apps
    expo: {
      platforms: {
        android: null,
        ios: null,
        macos: null,
        windows: null,
      },
    },
    // Suppress warnings about bob not being a proper native module
    "react-native-builder-bob": {
      platforms: {
        android: null,
        ios: null,
        macos: null,
        windows: null,
      },
    },
  },
  ...(project ? { project } : undefined),
};
