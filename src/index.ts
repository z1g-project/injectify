import { LFS, FFS } from "./fs"
import { cfg } from "./types"

const cfg: cfg = self.__injectify$cfg

if (cfg.fsType === "localstorage") {
    let plugins = await LFS(cfg.fsItem)
} else if (cfg.fsType === "filer") {
    let plugins = await FFS(cfg.fsItem)
    let frameView = cfg.whereTo
} else {
    throw new error("Cannot read Injectify Config. Does it exist?")
}