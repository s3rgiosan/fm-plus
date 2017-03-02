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
      badges: {
        packagist_stable: '[![Latest Stable Version](https://poser.pugx.org/s3rgiosan/fm-plus/v/stable)](https://packagist.org/packages/s3rgiosan/fm-plus)',
        packagist_downloads: '[![Total Downloads](https://poser.pugx.org/s3rgiosan/fm-plus/downloads)](https://packagist.org/packages/s3rgiosan/fm-plus)',
        packagist_license: '[![License](https://poser.pugx.org/s3rgiosan/fm-plus/license)](https://packagist.org/packages/s3rgiosan/fm-plus)',
        codacy_grade: '[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6dc6efd8e7594536aaf457d136d01d9b)](https://www.codacy.com/app/s3rgiosan/fm-plus?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=s3rgiosan/fm-plus&amp;utm_campaign=Badge_Grade)',
        codeclimate_grade: '[![Code Climate](https://codeclimate.com/github/s3rgiosan/fm-plus/badges/gpa.svg)](https://codeclimate.com/github/s3rgiosan/fm-plus)',
      },
    },
  });
};
