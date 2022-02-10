
import '../styles/App.css';
import {Route, Switch} from 'react-router-dom'
import {homepage} from "./homepage";
function App() {
  return (
      <Switch>
        <Route path="/" component={homepage}/>
        <Route path="/home"component={homepage}/>
        <Route path="/projects" component={homepage}/>
        <Route path="/blogs" component={homepage}/>
      </Switch>
  );
}

export default App;
