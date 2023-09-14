const basicConfig = require('./wdio.conf')

exports.config = {
    ...basicConfig.config,
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: ['--headless', '--disable-gpu', '--disable-dev-shm-usage'],
            },
        },
    ],
}