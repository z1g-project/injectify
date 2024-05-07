import { LFS, FFS } from "./fs"
import { cfg } from "./types"
import XOR from "./xor"

export default function main() {
    const cfg: cfg = self.__injectify$cfg

    if (cfg.fsType === "localstorage") {
        let plugins = await LFS(cfg.fsItem)
        let frameView = cfg.whereTo
        let blacklist = cfg.blacklist
        plugins.forEach(script => {
            if (blacklist && blacklist.includes(script)) {
                return 
            }
            const encodedScript = cfg.useProxy ? XOR.encode(script) : script
            const scriptElement = document.createElement("script")
            scriptElement.src = encodedScript
            if (cfg.whereTo === "head") {
                document.head.appendChild(scriptElement)
            } else {
                frameView.contentWindow.document.head.appendChild(scriptElement)
            }
        })
        setInterval(() => {
            plugins.forEach(script => {
                if (blacklist && blacklist.includes(script)) {
                    return
                }
                const encodedScript = cfg.useProxy ? XOR.encode(script) : script
                if (cfg.whereTo === "head") {
                    if (!document.querySelector(`script[src="${encodedScript}"]`)) {
                        const scriptElement = document.createElement("script")
                        scriptElement.src = encodedScript
                        document.head.appendChild(scriptElement)
                    }
                } else {
                    if (!frameView.contentWindow.document.querySelector(`script[src="${encodedScript}"]`)) {
                        const scriptElement = frameView.contentWindow.document.createElement("script")
                        scriptElement.src = encodedScript
                        frameView.contentWindow.document.head.appendChild(scriptElement)
                    }
                }
            })
        }, 1000)
    } else if (cfg.fsType === "filer") {
        let plugins = await FFS(cfg.fsItem)
        // Filer is very slow so this may take up some time. This is not suitible for injecting things such as Vencord. Read the docs for more info
        let frameView = cfg.whereTo
        let blacklist = cfg.blacklist
        plugins.forEach(script => {
            if (blacklist && blacklist.includes(script)) {
                return
            }
            const encodedScript = cfg.useProxy ? XOR.encode(script) : script
            const scriptElement = document.createElement("script")
            scriptElement.src = encodedScript
            if (cfg.whereTo === "head") {
                document.head.appendChild(scriptElement)
            } else {
                frameView.contentWindow.document.head.appendChild(scriptElement)
            }
        })
        setInterval(() => {
            plugins.forEach(script => {
                if (blacklist && blacklist.includes(script)) {
                    return
                }
                const encodedScript = cfg.useProxy ? XOR.encode(script) : script
                if (cfg.whereTo === "head") {
                    if (!document.querySelector(`script[src="${encodedScript}"]`)) {
                        const scriptElement = document.createElement("script")
                        scriptElement.src = encodedScript
                        document.head.appendChild(scriptElement)
                    }
                } else {
                    if (!frameView.contentWindow.document.querySelector(`script[src="${encodedScript}"]`)) {
                        const scriptElement = frameView.contentWindow.document.createElement("script")
                        scriptElement.src = encodedScript
                        frameView.contentWindow.document.head.appendChild(scriptElement)
                    }
                }
            })
        }, 1000)
    } else {
        throw new Error("Cannot read Injectify Config. Does it exist?")
    }    
}

main()