"use client"
import AuthContextProvider from "./AuthContext"
import { ThemeProvider } from "./theme-provider"
const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >

            <AuthContextProvider>

                {children}

            </AuthContextProvider>
        </ThemeProvider>
    )
}
export default Provider