import { Switch, Route } from "react-router"
import CarCollisionIndex from "../routes/CarCollisionIdex";
import CarCollisionDetail from "../routes/CarCollisionDetail";

const App = () => {
    return (
        <Switch>
            <Route path="/" component={CarCollisionIndex}/>
            <Route path="/collisionDetails" component={CarCollisionDetail}/>
        </Switch>
    )    
}

export default App;