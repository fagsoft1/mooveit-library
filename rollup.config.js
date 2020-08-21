import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import {uglify} from 'rollup-plugin-uglify';

const packageJson = require("./package.json");

import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default [
    {
        input: 'src/index.tsx',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            // {
            //     file: packageJson.module,
            //     format: "esm",
            //     sourcemap: true
            // }
        ],
        plugins: [
            peerDepsExternal(),
            nodeResolve(),
            typescript({useTsconfigDeclarationDir: true}),
            commonjs({include: ['node_modules/**']}),
            postcss(),
            uglify(),
        ]
    }
];