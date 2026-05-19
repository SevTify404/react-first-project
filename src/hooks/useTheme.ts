import { useEffect, useState } from "react"

type Theme = "light" | "dark" | "system"

const STORAGE_KEY = "theme"

export default function useTheme() {
    const [themeState, setThemeState] = useState<Theme>(() => {
        const saved = localStorage.getItem(STORAGE_KEY) as Theme | null
        return saved || "system"
    })

    // Détermine le vrai thème appliqué
    const getSystemTheme = () =>
        globalThis.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"

    const appliedTheme =
        themeState === "system" ? getSystemTheme() : themeState

    // Applique le thème au document
    useEffect(() => {
        const root = document.documentElement

        root.classList.remove("light", "dark")
        root.classList.add(appliedTheme)
    }, [appliedTheme])

    // Sauvegarde dans le localStorage
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, themeState)
    }, [themeState])

    // Écoute les changements système
    useEffect(() => {
        if (themeState !== "system") return

        const media = globalThis.matchMedia(
            "(prefers-color-scheme: dark)"
        )

        const handleChange = () => {
            const root = document.documentElement

            root.classList.remove("light", "dark")
            root.classList.add(getSystemTheme())
        }

        media.addEventListener("change", handleChange)

        return () => {
            media.removeEventListener("change", handleChange)
        }
    }, [themeState])

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme)
    }

    const toggleTheme = () => {
        setThemeState((prev) =>
            prev === "dark" ? "light" : "dark"
        )
    }

    return {
        theme: themeState,
        appliedTheme,
        setTheme,
        toggleTheme,
    }
}