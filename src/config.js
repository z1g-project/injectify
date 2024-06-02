// Stock Settings, Refer to /docs to configure this correctly
self.__injectify$cfg = {
    manifestVer: 2, // The version of Injectfy manifests to load.
    manifestLoc: "manifest.json", // Defines the manifest files name. Tied to the location tag as it should be in the same folder.
    location: "/injectify/", // Defines where injectify can find its files.
    whereTo: "head", // Defines where to inject. Either use the iframe's ID or just leave it at "head"
    blacklist: [], // Blacklist of Plugin URLS (So if someone publishes a token logger you can block it)
    extraLogging: false // allows if logging is allowed or not. recommended for non-production ready things or if you want detailed errors 
}