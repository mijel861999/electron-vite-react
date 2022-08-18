import electron from '/electron.png'
import react from '/react.svg'
import vite from '/vite.svg'
import styles from 'styles/app.module.scss'
import CodeMirror from '@uiw/react-codemirror'
import { createTheme } from '@uiw/codemirror-themes'
import { tags as t } from '@lezer/highlight';

const myTheme = createTheme({
  theme: 'light',
  settings: {
    background: 'transparent',
    foreground: 'white',
    caret: '#B1B1B1',
    selection: '#B1B1B1',
    selectionMatch: '#B1B1B1',
    lineHighlight: 'transparent',
    gutterBackground: 'transparent',
    gutterForeground: '#B1B1B1',
  },
  styles: [
    { tag: t.comment, color: '#787b8099' },
    { tag: t.variableName, color: '#0080ff' },
    { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
    { tag: t.number, color: '#5c6166' },
    { tag: t.bool, color: '#5c6166' },
    { tag: t.null, color: '#5c6166' },
    { tag: t.keyword, color: '#5c6166' },
    { tag: t.operator, color: '#5c6166' },
    { tag: t.className, color: '#5c6166' },
    { tag: t.definition(t.typeName), color: '#5c6166' },
    { tag: t.typeName, color: '#5c6166' },
    { tag: t.angleBracket, color: '#5c6166' },
    { tag: t.tagName, color: '#5c6166' },
    { tag: t.attributeName, color: '#5c6166' },
  ],
});


const App: React.FC = () => {
  const code = "holaaa"

  return (
      <CodeMirror
        width='100%'
        height='100%'
        value={code}
        options={{
          mode: 'jsx'
        }}
        theme={ myTheme }
      />
  )
}

export default App
