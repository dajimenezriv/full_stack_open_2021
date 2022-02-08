import ReactDOM from 'react-dom'
import App from './App'

// npx json-server --port 3001 --watch db.json
// npm run build:ui (only to copy the frontend to the backend)
// heroku login and npm run deploy:full
// npm run server

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
