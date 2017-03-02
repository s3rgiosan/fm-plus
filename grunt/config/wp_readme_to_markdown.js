/* global module */
module.exports = function(grunt, options) {
  return {
    main: {
      files: {
        'README.md': 'README.txt',
      },
      options: {
        post_convert: function(readme) {
          var extra = '';
          Object.keys(options.badges).forEach(function(key) {
            extra += options.badges[key] + '\n';
          });
          return extra + '\n' + readme;
        },
      },
    },
  };
};
