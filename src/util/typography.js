import Typography from 'typography';

const typography = new Typography({
  baseFontSize: 18,
  bodyFontFamily: ['Arial', 'Verdana', 'Segoe UI', 'sans-serif'],
  headerFontFamily: ['Montserrat', 'Arial', 'Verdana', 'Segoe UI'],
  headerColor: '#fff',
  bodyColor: '#eee',
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [700],
    },
  ],
});

typography.injectStyles();

export default typography;
