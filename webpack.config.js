const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

const path = require("path");

const mode = process.env.NODE_ENV || "development";

var getEntryInfo = (folder, file) => {
  return {
    entry: __dirname + "/Client/" + folder + "/" + file + ".razor.scss",
    output: path.resolve(__dirname, "Client/" + folder),
  };
};

var config = {
  mode: mode,
  devtool: "source-map",
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name].css" },
          },
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [new FixStyleOnlyEntriesPlugin()],
};

var appConfig = Object.assign({}, config, {
  name: "App",
  entry: [__dirname + "/Client/wwwroot/css/app.scss"],
  output: { path: __dirname + "/Client/wwwroot/css/" },
});

var counterConfig = Object.assign({}, config, {
  name: "Counter",
  entry: [getEntryInfo("Pages", "Counter").entry],
  output: { path: getEntryInfo("Pages", "Counter").output },
});

var fetchDataConfig = Object.assign({}, config, {
  name: "Fetch Data",
  entry: [getEntryInfo("Pages", "FetchData").entry],
  output: { path: getEntryInfo("Pages", "FetchData").output },
});

var layoutConfig = Object.assign({}, config, {
  name: "Layout",
  entry: [getEntryInfo("Shared", "MainLayout").entry],
  output: { path: getEntryInfo("Shared", "MainLayout").output },
});

var navMenuConfig = Object.assign({}, config, {
  name: "NavMenu",
  entry: [getEntryInfo("Shared", "NavMenu").entry],
  output: { path: getEntryInfo("Shared", "NavMenu").output },
});

module.exports = [
  appConfig,
  counterConfig,
  layoutConfig,
  navMenuConfig,
  fetchDataConfig,
];
