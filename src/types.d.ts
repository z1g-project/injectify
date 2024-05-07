interface cfg {
    useProxy: boolean,
    fsType: string,
    fsItem: string,
    location: string,
    whereTo: string,
    blacklist: JSON,
    extraLogging: boolean
}

interface Filer {
    Filer,
        fs,
            promises,
                readFile: string,
                writeFile: string
}
  
export { cfg, Filer };
  