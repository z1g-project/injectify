interface cfg {
    useProxy: boolean,
    encoder: string,
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
  