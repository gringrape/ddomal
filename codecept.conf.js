exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:19300',
      show: true,
      browser: 'chromium',
    },
  },
  include: {
    I: './tests/steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'ddomal',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
