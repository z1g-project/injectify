# Configuring Injectify

Injectify offers many configuration options, I will break it down more in debpt bellow but first make sure that **IF** your initializing if from the backend, you create the config file first to override the defualt one. Example if injectify in your backend is configured to a `/injectify` than in your public folder or wherever your frontend is create a folder called `injectify` and put a file in there called `config.js` then configure it as you like using the tools bellow.

## Defining the config

If you were initializing it from the backend like above and dont know what to first put in the file heres what you need to put first.

```js
self.__injectify$cfg = {
    // LEAVE THIS BLANK FOR NOW YOU WILL INSERT OPTIONS BELOW AS YOU GO
}
```

### Options (Manifest v1)

> [!NOTE]
> Manifest v1 is deprecated and is just for legacy sites such as sodium. If for some reason you dont like Manifest v2 you can still use Manifest v1. It will be supported untill Q1 of 2025

#### UseProxy

- Accepts: Booleans
- Description: This enables the use of encoding and loading the injected scripts using UV with XOR

#### Encoder

- Options: `XOR`
- Description: Connected to `UseProxy`, Basically what it should encode the proxied url in.

#### fsItem

- Accepts: Strings
- Description: The item (either local storage item or filerJS file) that injectify can load its scripts from. This was superceeded by Manifests in Manifest v2

#### fsType

- Description: Weither or not Injectify should use `localstorage` or `filer`

#### WhereTo

- Accepts: Strings
- Descriotion: This is where injectify should inject its scripts to.

#### Location

- Accepts: Strings
- Description: Where injectify files can be found (ignore this setting if using a blunder)

#### BlackList

- Accepts: JSON
- Description: If your using a public injectify manifest you can block scripts from being injected.

#### ExtraLogging

- Accepts: Boolean
- Description: For debugging purposes in case your trying to figure out where a bug is coming from.

### Options (Manifest v2)

#### ManifestVer

- Description: Toggle for which manifest version to use.

#### ManifestLoc

- Description: Defines where in the injectify folder the manifest is or where the manifest is. 

> [!NOTE]
> Fetching for that if its an external url will be using axios.

#### WhereTo

- Accepts: Strings
- Descriotion: This is where injectify should inject its scripts to.

#### Location

- Accepts: Strings
- Description: Where injectify files can be found (ignore this setting if using a blunder)

#### BlackList

- Accepts: JSON
- Description: If your using a public injectify manifest you can block scripts from being injected.

#### ExtraLogging

- Accepts: Booleans
- Description: For debugging purposes in case your trying to figure out where a bug is coming from.
