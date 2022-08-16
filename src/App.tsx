import { useState } from 'react'
import electron from '/electron.png'
import react from '/react.svg'
import vite from '/vite.svg'
import styles from 'styles/app.module.scss'
import CodeMirror from '@uiw/react-codemirror'

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  const code = "holaaa"

  return (
    <div
      className={styles.app}
      style={{ 
        textAlign: 'start',
        backgroundColor: 'black'
      }}
    >
      <CodeMirror
        value={code}
        options={{
          mode: 'jsx'
        }}
      />
    </div>
  )
}

export default App
