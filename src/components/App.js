import { Switch, Route } from "react-router-dom";
import CarCollisionIndex from "../routes/CarCollisionIdex";
import CarCollisionDetail from "../routes/CarCollisionDetail";

const App = () => {
    return (
        <Switch>
            <Route path="/" component={CarCollisionIndex}/>
            <Route path="/:id" children={<CarCollisionDetail/>}/>
        </Switch>
    )    
}

export default App;