import { createTheme, ThemeOptions } from "@material-ui/core";
import * as Colors from '@material-ui/core/colors';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
const Regular_Font = 'Helvetica, Arial, sans-serif';


const rootTheme: ThemeOptions = {
  props: {
    MuiButton: {
      // size: 'small',
    },
    MuiFilledInput: {
      margin: 'dense',
    },
    MuiFormControl: {
      margin: 'dense',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiListItem: {
      dense: true,
    },
    MuiOutlinedInput: {
      margin: 'dense',
    },
    MuiFab: {
      size: 'small',
    },
    MuiTable: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
    },
    MuiToolbar: {
      variant: 'dense',
    },
  },
  palette: {
    background: { paper: 'rgba(229, 229, 229, 1)', default: '#fafafa' },
    primary: {
      light: Colors.grey[300],
      main: Colors.blue[600],
      dark: Colors.grey[800],
      contrastText: Colors.grey[50],
    },
    secondary: {
      light: 'rgba(119, 116, 118, 1)',
      main: 'rgba(97, 93, 95, 1)',
      dark: 'rgba(29, 28, 28, 1)',
      contrastText: '#fff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    htmlFontSize: 16,
    fontFamily: 'Proxima-Nova-Regular, Helvetica, Arial, sans-serif',
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: { xs: 0, sm: 320, md: 768, lg: 1024, xl: 1580 },
  },
  overrides: {
    MuiLinearProgress: {
      root: {
        height: 6,
        backgroundColor: '#12161A',
        borderRadius: '3px',
      },
      barColorPrimary: {
        backgroundColor: '#2ADCFE',
        borderRadius: '3px',
      },
      colorPrimary: {
        backgroundColor: '#12161A',
      },
    },
    MuiButton: {
      root: {
        '&$disabled': {
          opacity: '0.3',
          cursor: 'pointer',
        },
      },
      textPrimary: {
        borderRadius: '6px',
        minWidth: '140px',
        minHeight: '40px',
        background: 'linear-gradient(135deg, #2ADCFE 0%, #56FFFE 100%)',
        color: '#12161A',
        fontFamily: 'ProximaNova-Bold, Helvetica, Arial, sans-serif',
        fontSize: '13px',
        lineHeight: '16px',
        padding: '0 24px',
        transition: 'none',
        '&:hover, &:focus': {
          background: '#56FFFE!important',
        },
        '&$focusVisible': {
          background: '#FFF',
        },
        '&:active': {
          background: '#000',
        },
        '&$disabled': {
          color: '#12161A',
          opacity: '0.3',
        },
      },
      textSecondary: {
        borderRadius: '6px',
        fontFamily: Regular_Font,
        minWidth: '140px',
        minHeight: '40px',
        fontSize: '15px',
        lineHeight: '24px',
        background: '#35414A',
        textTransform: 'initial',
        padding: '0 24px',
        color: '#fff',
        '&:hover, &:focus': {
          background: '#505B63 !important',
        },
      },
    },
  },
};

export default rootTheme;

// export default themeOptions;
