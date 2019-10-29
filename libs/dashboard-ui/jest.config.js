module.exports = {
  name: 'dashboard-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/dashboard-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
