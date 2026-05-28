// Vstupní bod aplikace — Vite zde spouští React
// StrictMode zapíná extra varování v konzoli během vývoje
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
