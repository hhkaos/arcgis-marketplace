/**
 * acetate config files are CommonJS modules that
 * export a single function which takes an Acetate
 * object.
 */
module.exports = function (acetate) {
  /**
   * loads all files ending in .md or .html in
   * the source folder (src)
   */
  acetate.load('**/*.+(md|html|js|css)');

  /**
   * Use the 'main' block in the _layout.html file
   * the file extension is optional
   */
  acetate.layout('**/*.+(md|html)', '_layout:main');

  acetate.metadata('**/*', {
    author: 'Raul Jimenez - @hhkaos'
  });
};
