import {config} from './wdio.conf'

config.capabilities = [
        {
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: ['--headless', '--disable-gpu', '--disable-dev-shm-usage'],
            },
        },
];

exports.config = config;