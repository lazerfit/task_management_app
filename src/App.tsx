import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import LandingPage from './pages/LandingPage';
import AddTaskPage from './pages/AddTaskPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tasks/new" element={<AddTaskPage />} />
      </Route>
    </Routes>
  );
}

export default App;
