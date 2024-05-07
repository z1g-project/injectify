import esbuild from "esbuild"
import { copyFile, mkdir, readFile } from 'node:fs/promises';
await rimraf('dist');
await mkdir('dist');
await copyFile('src/config.js', 'dist/config.js');
await build({
    platform: 'browser',
    sourcemap: true,
    minify: !isDevelopment,
    entryPoints: {
        'bundle': './src/bundle.js',
    },
    bundle: true,
    logLevel: 'info',
    outdir: 'dist/',
});