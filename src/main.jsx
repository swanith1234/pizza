import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App userData={{"name":"pizza","emailId":"pidugubunny534@gmail.com","phoneNo":"123456789","projects":[{"title":"pizza","description":"pizza","technologies":["React"],"repoLink":"pizza","_id":"674b0d5e97166fee1c267d55"}],"resume":"","experiences":[{"companyName":"pizza","role":"pizza","description":"pizza","technologiesUsed":[],"duration":"pizza","_id":"674b0d5e97166fee1c267d56"}],"techStacks":[],"contactDetailsUrls":[],"codingProfilesUrls":[],"certificationsUrls":[],"achievements":[{"title":"pizza","description":"pizza","_id":"674b0d5e97166fee1c267d57"}],"about":"pizza","profilePhoto":"","_id":"674b0d5e97166fee1c267d54","createdAt":"2024-11-30T13:04:30.476Z","updatedAt":"2024-11-30T13:04:30.476Z","__v":0}} />
  </StrictMode>,
)
