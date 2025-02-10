import react from '@vitejs/plugin-react';
import { exec } from 'child_process';
import fs from 'fs';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
        {
            name: 'generate-typescript-definitions',
            configureServer() {
                const path = 'app/Dto';

                fs.watch(path, { recursive: true }, (event, filename) => {
                    console.log(
                        `File changed: ${filename}, running artisan command...`,
                    );
                    exec(
                        'php artisan typescript:transform --format',
                        (err, stdout, stderr) => {
                            if (err) {
                                console.error(
                                    `Error running artisan command: ${stderr}`,
                                );
                            } else {
                                console.log(stdout);
                            }
                        },
                    );
                });
            },
        },
    ],
});
