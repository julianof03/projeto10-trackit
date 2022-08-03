import { Route, Routes, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import LoginScreen from './components/loginscreen';
import Registration from './components/regscreen';
export default function App() {

  return (

  <Container>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />}></Route>
        <Route path="/cadastro" element={<Registration />}></Route>
      </Routes>
    </BrowserRouter>
</Container>
  );
}



const Container = styled.div`
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}`;