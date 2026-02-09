import { AppStateProvider } from './state/AppState'


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AppStateProvider>{children}</AppStateProvider>
      </body>
    </html>
  )
}
