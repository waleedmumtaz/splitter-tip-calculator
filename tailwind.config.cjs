const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        cstm: {
          primary: {
            'strong-cyan': 'hsl(172, 67%, 45%)',
          },
          neutral: {
            'dark-cyan': 'hsl(183, 100%, 15%)',
            'dark-grayish-cyan-one': 'hsl(186, 14%, 43%)',
            'dark-grayish-cyan-two': 'hsl(184, 14%, 56%)',
            'light-grayish-cyan-one': 'hsl(185, 41%, 84%)',
            'light-grayish-cyan-two': 'hsl(189, 41%, 97%)',
          },
        },
      },
      fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
      }
    },
  },

  plugins: [],
}

module.exports = config
