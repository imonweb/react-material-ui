import './App.css';
import SideMenu from '../components/SideMenu';
import { makeStyles } from '@material-ui/styles';
import Header from '../components/Header';
import { CssBaseline } from '@mui/material';

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
       <CssBaseline />
     </>
  );
}

export default App;
