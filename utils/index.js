const { Server } = require('karma');
const { join, resolve } = require('path');

if (!(process.env.APP_ROOT_PATH)) {
  process.env.APP_ROOT_PATH = resolve();
}

const karmaServeAsync = async () => {
  const server = new Server({
    configFile: join(__dirname, 'karma.conf.js'),
    singleRun: true,
    basePath: process.env.APP_ROOT_PATH,
  },  (exitCode) => process.exit(exitCode));
  await new Promise((resolve, reject) => server.start());
};

exports.karmaServeAsync = karmaServeAsync;