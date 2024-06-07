import { LFS, FFS } from "./fs"
import { cfg, extdata } from "./types"
import { XOR } from "./encoders"
import axios from "axios"

export default async function injectify() {
    // @ts-ignore
    const configuration: cfg = window.__injectify$cfg;
    if (configuration.extraLogging === true) {
        console.log('Injectify has been inited')
        console.log(`Configuration:`, configuration)
    }
    if (configuration.manifestVer === 2) {
        console.warn('Manifest v2 Support is in early beta')
        if (configuration.whereTo === null) {
            throw new Error("You must specify where to inject items to.")
        }
        if (configuration.manifestLoc.includes("http")) {
            axios.get(configuration.manifestLoc).then(async (val: any) => {
                let exts: (extdata | any)[]
                try {
                    exts = JSON.parse(val)
                } catch (err: any) {
                    throw new Error(err)
                }
                if (configuration.extraLogging === true) {
                    console.log(`Using Manifest v2 CFG from ${configuration.manifestLoc}`)
                    console.log(exts)
                }
                if (configuration.whereTo === 'head') {
                    exts.forEach((ext: extdata | any) => {
                        const script = document.createElement('script')
                        script.src = ext.url
                        console.log(`Injected: ${ext.name} v${ext.version} to Head`)
                        document.head.appendChild(script)
                    });
                } else {
                    if (document.getElementById(configuration.whereTo) === null || undefined) {
                        // @ts-expect-error
                        const to: HTMLElement = document.getElementById(configuration.whereTo)
                        exts.forEach((ext: extdata | any) => {
                            const script = document.createElement('script')
                            script.src = ext.url
                            console.log(`Injected: ${ext.name} v${ext.version} to Head`)
                            to.appendChild(script)
                        });
                    } else {
                        // @ts-expect-error
                        const to: HTMLElement = document.querySelector(configuration.whereTo)
                        exts.forEach((ext: extdata | any) => {
                            const script = document.createElement('script')
                            script.src = ext.url
                            console.log(`Injected: ${ext.name} v${ext.version} to Head`)
                            to.appendChild(script)
                        });
                    }
                }
            })
        } else {

        }
    } else {
        if (configuration.fsType === "localstorage") {
            let plugins: any = await LFS(configuration.fsItem)
            let frameView: any = configuration.whereTo
            let blacklist: any = configuration.blacklist
            if (configuration.extraLogging === true) {
                console.log(frameView)
            }
            plugins.forEach(script => {
                if (blacklist && blacklist.includes(script)) {
                    return 
                }
                const encodedScript = configuration.useProxy ? XOR.encode(script) : script
                const scriptElement = document.createElement("script")
                scriptElement.src = encodedScript
                if (configuration.extraLogging === true) {
                    console.log(scriptElement.src)
                }
                if (configuration.whereTo === "head") {
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
                    const encodedScript = configuration.useProxy ? XOR.encode(script) : script
                    if (configuration.whereTo === "head") {
                        if (!document.querySelector(`script[src="${encodedScript}"]`)) {
                            const scriptElement = document.createElement("script")
                            scriptElement.src = encodedScript
                            if (configuration.extraLogging === true) {
                                console.log(scriptElement.src)
                            }
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
        } else if (configuration.fsType === "filer") {
            let plugins: any = await FFS(configuration.fsItem)
            // Filer is very slow so this may take up some time. This is not suitable for injecting things such as Vencord. Read the docs for more info
            let frameView: any = configuration.whereTo
            let blacklist: any = configuration.blacklist
            if (configuration.extraLogging === true) {
                console.log(frameView)
            }
            plugins.forEach(script => {
                if (blacklist && blacklist.includes(script)) {
                    return
                }
                const encodedScript = configuration.useProxy ? XOR.encode(script) : script
                const scriptElement = document.createElement("script")
                scriptElement.src = encodedScript
                if (configuration.extraLogging === true) {
                    console.log(scriptElement.src)
                }
                if (configuration.whereTo === "head") {
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
                    const encodedScript = configuration.useProxy ? XOR.encode(script) : script
                    if (configuration.whereTo === "head") {
                        if (!document.querySelector(`script[src="${encodedScript}"]`)) {
                            const scriptElement = document.createElement("script")
                            scriptElement.src = encodedScript
                            if (configuration.extraLogging === true) {
                                console.log(scriptElement.src)
                            }
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
}

injectify()
