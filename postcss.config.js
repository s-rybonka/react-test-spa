import postcssImport from 'postcss-import';
import postcssNesting from 'postcss-nesting';
import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';

import tailwindcss from 'tailwindcss';


const config = {
  plugins: [
    postcssImport,
    postcssNesting,
    
    tailwindcss,
    
    autoprefixer,
    
  ],
};

export default config; 