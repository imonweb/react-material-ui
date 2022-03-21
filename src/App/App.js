import './App.css';
import SideMenu from '../components/SideMenu';
import { makeStyles } from '@material-ui/styles';
import Header from '../components/Header';
import { CssBaseline } from '@mui/material';
import CustomThemeAppBarOption from '../AppBars/CustomThemeBarOption';
// import ClassesAppBarOption from '../AppBars/ClassesAppBarOption';
import StyledAppBarOption from '../AppBars/StyledAppBarOption';
// import ClassesAppBarOption from '../AppBars/ClassesAppBarOption';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (
     <>
       <SideMenu />
       <div className={classes.appMain}>
         <Header />
       </div>
       <div>
         <CustomThemeAppBarOption />
       </div>
       <div>
         <StyledAppBarOption />
       </div>
       <CssBaseline />
     </>
  );
}

export default App;
