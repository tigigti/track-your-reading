import {
    cyan500, cyan700,
    pinkA200,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
  } from 'material-ui/styles/colors';
import getMuiTheme from "material-ui/styles/getMuiTheme";

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: pinkA200
    },
    appBar: {
    }
});

export default muiTheme;