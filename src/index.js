import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

const defaults = {
  include: '**/*.css',
};

export default function (options) {
  // process options, allowing for variable number of args
  if (typeof options === 'string' || options instanceof String) {
    options = [options];
  }
  if (Array.isArray(options)) {
    options = Object.assign({}, defaults, {browsers: arguments[0]}, arguments[1]);
  }
  else options = Object.assign({}, defaults, options);

  // configure a postcss processor for reuse on every job
  const plugin = autoprefixer(options);
  const processor = postcss([plugin]);

  // return the builder
  return function exhibitAutoprefixer({matches, contents}) {
    // check if it matches
    if (!matches(options.include)) return contents;

    return processor
      .process(contents.toString(), {
        map: true,
      })
      .then(result => {
        result.warnings().forEach(warn => {
          console.warn(warn.toString()); // TODO: SourceError
        });

        return result.css;
      });
  };
}
