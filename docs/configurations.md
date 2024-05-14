# Configuring Injectify

Injectify offers many configuration options, I will break it down more in debpt bellow but first make sure that **IF** your initializing if from the backend, you create the config file first to override the defualt one. Example if injectify in your backend is configured to a `/injectify` than in your public folder or wherever your frontend is create a folder called `injectify` and put a file in there called `config.js` then configure it as you like using the tools bellow.

## Defining the config

If you were initializing it from the backend like above and dont know what to first put in the file heres what you need to put first.

```js
self.__injectify$cfg = {
    // LEAVE THIS BLANK FOR NOW YOU WILL INSERT OPTIONS BELOW AS YOU GO
}
```

### Options

#### UseProxy

- Description: This enables the use of encoding and loading the injected scripts using UV with XOR (**NOTE** This will soon be depreccated this is just here for backwards compatability with older versions of sites like sodium)

#### TODO
