module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['semantic-release-rubygem', { gemHost: 'https://rubygems.org' }],
    '@semantic-release/github',
  ],
};
