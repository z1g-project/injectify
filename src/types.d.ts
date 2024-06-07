interface cfg {
    useProxy: boolean,
    encoder: string,
    manifestVer: number,
    manifestLoc: string,
    fsType: string,
    fsItem: string,
    location: string,
    whereTo: string,
    blacklist: JSON,
    extraLogging: boolean
}

interface extdata {
    url: URL,
    name: string,
    description: string,
    version: number
}

interface Filer {
    Filer,
        fs,
            promises,
                readFile: string,
                writeFile: string
}

export { cfg, Filer, extdata };
  