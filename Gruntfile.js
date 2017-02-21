/* global module require process */
module.exports = function(grunt) {
  var path = require('path');

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt/config'),
    jitGrunt: {
      customTasksDir: 'grunt/tasks',
      staticMappings: {
        makepot: 'grunt-wp-i18n',
      },
    },
    data: {
      i18n: {
        author: 'Sérgio Santos <me@s3rgiosan.com>',
        support: 'https://github.com/s3rgiosan/fm-plus/issues',
        pluginSlug: 'fm-plus',
        mainFile: 'fm-plus',
        textDomain: 'fm-plus',
        potFilename: 'fm-plus',
      },
    },
  });
};
