const gulp = require("gulp"),
  svgSprite = require("gulp-svg-sprite");

gulp.task("sprite", function() {
  return gulp
    .src("src/images/icons/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("."));
});

const config = {
  mode: {
    symbol: {
      dest: ".",
      sprite: "dist/icons.svg",
      example: true,
      render: {
        scss: { dest: "src/scss/_sprite.scss" }
      },
      prefix: ".icon-%s",
      dimensions: "%s",
      layout: "vertical",
      bust: false
    }
  },
  shape: {
    transform: [
      {
        svgo: {
          plugins: [
            { removeAttrs: { attrs: "(stroke|fill)" } },
            { removeUselessStrokeAndFill: true },
            { removeUselessDefs: true },
            { removeViewBox: true }
          ]
        }
      }
    ]
  }
};

gulp.task("watch", function() {
  gulp.watch("src/icons/*.svg", ["sprite"]);
});

gulp.task("default", ["watch"]);
