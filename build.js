import { build } from 'esbuild';
import { promises as fs } from "fs";


(async () => {
	try {
		let librawjs = (await fs.readFile('./libraw.js')).toString();
		librawjs = librawjs.replace(/var workerOptions=([^]+?);worker=new Worker\(new URL\("([^"]+)",import.meta.url\),workerOptions\);/, `worker=new Worker(new URL("$2",import.meta.url),$1);`); // Correction to make worker options static so that it works with vite
		await fs.writeFile('./libraw.js', librawjs);
		await build({
			entryPoints: ['index.js', 'worker.js', 'libraw.js'], // Entry point of your library
			outdir: 'dist', // Output directory
			bundle: true, // Bundle all files
			minify: true, // Minify the output
			sourcemap: true, // Generate source maps
			format: 'esm', // Output format (ES Module)
		});
		await fs.copyFile('./libraw.wasm', './dist/libraw.wasm');
		console.log('Build successful!');
	} catch (error) {
		console.error('Build failed:', error);
		process.exit(1);
	}
})();