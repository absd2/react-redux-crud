import Layout from "./components/Layout";
import { Button } from "@mui/joy";
import "./styles/global.css";

function App() {
  return (
    <Layout.Base>
      <Layout.Header />
      <Layout.Content>
        <Button variant="soft">Click me!</Button>
      </Layout.Content>
    </Layout.Base>
  );
}

export default App;
