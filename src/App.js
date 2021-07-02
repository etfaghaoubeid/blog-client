import routes from "./routes";
import { Route, Switch } from "react-router-dom"
import Layout from "./layout"
function App() {
  return (
    <>
      <Switch>
        <Layout>
          {routes.map((route) => (<Route exact path={route.path} component={route.component} />))}
        </Layout>
      </Switch>
    </>
  );
}

export default App;
