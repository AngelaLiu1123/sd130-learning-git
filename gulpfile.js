const {src, dest} = require('gulp'); // import src() and dest() method from gulp package in node modules folder

function pagesTask() {
  return src('src/*.html').pipe(dest('dist')); // take this src(source) and then pipe it into dest(destenation)
}

function scriptsTask() {
  return src('src/scripts/*.js').pipe(dest('dist/scripts'));
}

function stylesTask() {
  return src('src/styles/*.css').pipe(dest('dist/styles'));
}

function imagesTask() {
  return src('src/images/*').pipe(dest('dist/images'));
}

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

// exports.default = series(pagesTask, scriptsTask, stylesTask, imagesTask);
exports.default = defaultTask;
exports.pages = pagesTask; // call the pagesTask() method directly from gulp
exports.scripts = scriptsTask;
exports.styles = stylesTask;
exports.images = imagesTask;