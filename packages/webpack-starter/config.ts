import path from "node:path";
import { Configuration } from "webpack";

const config: Configuration = {
    mode: 'production',
    entry: path.join(__dirname, 'main.js'),
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'index.js',
        clean: true,
    },
    optimization: {
        minimize: false
    }
}

export default config
