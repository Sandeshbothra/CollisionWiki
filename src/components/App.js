import { Switch, Route, BrowserRouter } from "react-router-dom";
import CarCollisionIndex from "../routes/CarCollisionIdex";
import CarCollisionDetail from "../routes/CarCollisionDetail";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={CarCollisionIndex}/>
                <Route path="/:id" component={CarCollisionDetail}/>
            </Switch>
        </BrowserRouter>
    )    
}

export default App;