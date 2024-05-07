// Stock Settings, Refer to /docs to configure this correctly
self.__injectify$cfg = {
    useProxy: false, // Weither or not it should use UV to inject scripts (proxied injection)
    fsType: "localstorage", // Defines the FS to use. Make sure you know what your doing
    fsItem: "injectifyPlugins", // Defines where to find the plugins to inject.
    location: "/injectify/", // Defines where injectify can find its files.
    whereTo: "head", // Defines where to inject. Either use the iframe's ID or just leave it at "head"
    blacklist: [], // Blacklist of Plugin URLS (So if someone publishes a token logger you can block it)
    extraLogging: false // allows if logging is allowed or not. recommended for non-production ready things or if you want detailed errors 
}