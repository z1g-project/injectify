export function LFS(loc: string) {
    // LFS is short for LocalStorage FS
    const fsitm = loc
    const plugins = JSON.parse(fsitm)
    return plugins
}

export function FFS(file: string) {
    // FilerFS Compatability
    // NOTE This is very early in development and I still recommend using LocalStorage instead
    const fsitm = Filer.fs.promises.readFile(file)
    const plugins = JSON.parse(fsitm)
    return plugins
}