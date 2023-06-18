const withImages = require('next-images');
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
    // reactStrictMode: true,
    webpack(config, options) {
    //     // config.module.rules.push({
    //     //     test: /\.(png|jpe?g|gif)$/i,
    //     //     use: [
    //     //         {
    //     //             loader: 'file-loader',
    //     //             options: {
    //     //                 outputPath: 'image',
    //     //             },
    //     //         },
    //     //     ],
    //     // });
    //     config.module.rules.push({
    //         test: /\.(jpe?g|png|gif|webp)$/i,
    //         use: [
    //             {
    //                 loader: 'url-loader',
    //                 options: {
    //                     limit: 8192,
    //                     fallback: 'file-loader',
    //                     publicPath: '/_next/static/images',
    //                     outputPath: 'static/images',
    //                     name: '[name]-[hash].[ext]',
    //                 },
    //             },
    //         ],
    //     });
        config.module.rules.push({
            test: /\.mp4$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'video',
                    },
                },
            ],
        });
    //     config.module.rules.push({
    //         test: /\.(png|webp|jpg)$/i,
    //         use: [
    //             {
    //                 loader: 'url-loader',
    //                 options: {
    //                     limit: 8192,
    //                     fallback: 'file-loader',
    //                     publicPath: '/_next/images',
    //                     outputPath: 'images',
    //                     name: '[name]-[hash].[ext]',
    //                 },
    //             },
    //         ],
    //     });
        // config.module.rules.push({
        //     test: /\.(png)$/i,
        //     use: [
        //         {
        //             loader: 'url-loader',
        //             options: {
        //                 limit: 8192,
        //                 fallback: 'file-loader',
        //                 publicPath: '/_next/static/images',
        //                 outputPath: 'static/images',
        //                 name: '[name]-[hash].[ext]',
        //             },
        //         },
        //     ],
        // });
        // config.module.rules.push({
        //     test: /\.(webp)$/i,
        //     use: [
        //         {
        //             loader: 'url-loader',
        //             options: {
        //                 limit: 8192,
        //                 fallback: 'file-loader',
        //                 publicPath: '/_next/static/images',
        //                 outputPath: 'static/images',
        //                 name: '[name]-[hash].[ext]',
        //             },
        //         },
        //     ],
        // });
        // config.module.rules.push({
        //     test: /\.(jpg)$/i,
        //     use: [
        //         {
        //             loader: 'url-loader',
        //             options: {
        //                 limit: 8192,
        //                 fallback: 'file-loader',
        //                 publicPath: '/_next/static/images',
        //                 outputPath: 'static/images',
        //                 name: '[name]-[hash].[ext]',
        //             },
        //         },
        //     ],
        // });
        return config;
    },
};

const withNextIntl = require('next-intl/plugin')(
    './i18n.js'
);

module.exports = withNextIntl(nextConfig);
