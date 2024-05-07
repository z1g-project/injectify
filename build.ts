import { build } from "esbuild"
import { rimraf } from "rimraf"
import { copyFile, mkdir, readFile } from 'node:fs/promises';
const isDevelopment = process.argv.includes('--dev');
await rimraf('dist');
await mkdir('dist');
await copyFile('src/config.js', 'dist/config.js');
await build({
    platform: 'browser',
    sourcemap: true,
    minify: !isDevelopment,
    entryPoints: {
        'bundle': './src/index.ts',
    },
    bundle: true,
    logLevel: 'info',
    outdir: 'dist/',
});
