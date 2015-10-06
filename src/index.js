import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

export default function (browsers) {
  const plugin = autoprefixer({browsers});
  const processor = postcss([ plugin ]);

  return function exhibitAutoprefixer(path, contents) {
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
