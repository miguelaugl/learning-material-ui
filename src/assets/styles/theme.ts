import { createMuiTheme } from '@material-ui/core/styles';
import { indigo, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: indigo,
  },
});

export default theme;
