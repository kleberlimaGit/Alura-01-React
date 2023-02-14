import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  },
  a:{
    textDecoration: 'none'
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$neutral400',
    color: '$neutral999',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 'x'
  }
})