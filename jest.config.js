const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
    // Add more setup options before each test is run
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    // Add any custom reporters and enable coverage
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.stories.{ts,tsx}'],
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/node_modules/', '/.next/', '/coverage/', '/jest.setup.js'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/', '/coverage/', '/jest.setup.js'],
    watchPathIgnorePatterns: ['/node_modules/', '/.next/', '/coverage/', '/jest.setup.js'],
    modulePathIgnorePatterns: ['/node_modules/', '/.next/', '/coverage/', '/jest.setup.js'],

}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)