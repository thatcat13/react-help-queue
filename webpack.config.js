const webpack = require('webpack');
const { resolve } = require('path');

// We require the webpack package and the resolve functionality from the path package at the top of the file.
//
// The path library is a dependency of Webpack. It allows us to resolve file paths, as seen in lines above that read resolve(). Resolving a path is the act of providing a dedicated tool (like the path library) the name of a directory or file, and relying upon it to find the exact path.
//
// This allows us to say things like resolve('file_name') instead of ./../much/longer/filepath/to/the/file_name.js. It's essentially a shortcut, so we don't have to meticulously list the exact file path to each file we need. This can also prevent errors.

module.exports = {

  entry: [
    resolve(__dirname, "src") + "/index.jsx"
  ],

  // Within the module we declare an entry specifying the file where the bundling process starts. Similar to the main.ts file in Angular, we specify index.jsx as our entry point.
  //
  // An entry point is the file responsible for instructing the module bundler how to build the application. The browser loads this file first. Similar to a jQuery selector, our React app needs a place to reference in the DOM and manipulate to render our code.

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
  },

  // This tells Webpack where to place the bundle file it creates.
  //
  // path: points to a directory called build. This is where our transpiled, bundled source code will reside. __dirname refers to the current directory webpack.config.js is located in. We call resolve() and pass the name of the directory we're attempting to locate (build) and __dirname. The path library then resolves the exact file path for us.
  //
  // filename determines the name of the file containing our bundled code. We've named ours app.bundle.js. This exact name isn't required, but it's a standard naming convention other developers will recognize.
  //
  // In summary, this section instructs Webpack to place bundled code in build/app.bundle.js.

  resolve: {
    extensions: ['.js', '.jsx']
  },

  // The resolve option tells Webpack to locate files with specific extensions. By specifying the extensions here, we can later import files without explicitly listing an extension in their import statement. (ie,: require(myComponent) instead of: require(myComponent.jsx)). This is certainly not mandatory, but a helpful feature.

  module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: [
              "es2015",
              "react"
            ]
          }
        }
      ]
    }
  // Here we've instructed Webpack to use Babel as a loader. A loader is an additional library that works with Webpack to pre-process code before Webpack bundles it. This process is sometimes called a transformation.
  // In plain English, the configuration above reads “Hey Webpack, use this babel-loader tool to transpile our JSX into ES5 in this React project. You can find the JSX in files with a .jsx extension. But ignore .jsx files in the nodemodules directory.”_
};
