exports.config = {
  runner: 'local',
  port: 4723,

  specs: [
    './test/specs/**/*.js'
  ],
  exclude: [],

  // Garante execução sequencial
  maxInstances: 1,

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'emulator-5554',
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'com.google.android.calculator',
    'appium:appActivity': 'com.android.calculator2.Calculator',
    'appium:appWaitActivity': 'com.android.calculator2.Calculator',
    'appium:autoGrantPermissions': true,
    'appium:noReset': true,
    'appium:fullReset': false // ✅ Evita reinstalação entre testes
  }],

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 1,

  services: ['appium'],
  framework: 'mocha',
  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    parallel: false // ✅ Garante que os testes não rodem em paralelo
  }
};