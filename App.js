import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin';
import Navscrollex from './Components/Navscrollex';
import TeamLeadHomePage from './Components/TeamLeadHomePage';
import MemberHomePage from './Components/MemberHomePage';
import CreateProject from './Components/CreateProject';
import Register from './Components/Register';
import EditProject from './Components/EditProject';
import EditProjectDetails from './Components/EditProjectDetails';
import TasksPage from './Components/TasksPage';
import ChatRoom from './Components/ChatRoom';
import ChatGroup from './Components/ChatGroup';
import Notifications from './Components/Notifications';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/MemberHomePage" element={<MemberHomePage />} />
          <Route path="/Navscrollex" element={<Navscrollex />} />
          <Route path="/TeamLeadHomePage" element={<TeamLeadHomePage />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/edit-projects" element={<EditProject/>}/>
          <Route  path="/edit-project/:projectId" element={<EditProjectDetails/>} />
          <Route path="/tasks/:username" element={<TasksPage />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/chatroom/:chatGroupId" element={<ChatGroup />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
