module.exports = function (config) {
    config.set({

        basePath : '../',

        files : [
            'test/unit/spec.bundle.js',

            {
                pattern: 'mocked_backend/**/*.json'
            }
        ],

        autoWatch : true,

        frameworks: ['jasmine', 'fixture'],

        browsers: ['PhantomJS'],

        reporters: ['progress', 'coverage'],

        jsonFixturesPreprocessor: {
            variableName: '__json__'
        },

        plugins : [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-fixture',
            'karma-json-fixtures-preprocessor',
            'karma-phantomjs-launcher',
            'karma-notify-reporter',
            'karma-webpack',
            'karma-sourcemap-loader'
        ],

        preprocessors: {
            'test/unit/spec.bundle.js': ['webpack', 'sourcemap'],
            'mocked_backend/**/*.json': ['json_fixtures']
        },
        webpack: require('../webpack.test.config'),
        webpackMiddleware: {
            // turning off verbose output
            stats: 'errors-only'
        },
        coverageReporter: {
            reporters: [
                {
                    type : 'text'
                },
                {
                    type : 'lcov',
                    dir : 'test/coverage/',
                    file : 'lcov.info'
                }
            ]
        },
        client: {
            // Stops Jasmine from randomly executing tests, our tests are not written that way right now
            jasmine: {
                random: false
            }
        },
        logLevel: config.LOG_INFO

    });
};
