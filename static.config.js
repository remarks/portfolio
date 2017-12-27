import path from 'path'
import React, { Component } from 'react'
import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes'
import tailwindcss from 'tailwindcss'
import marked from 'marked'

export default {
  Document: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html className="border-t-20 border-indigo md:border-l-20 md:border-t-0">
          <Head>
            <title>Mark Pinero</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://fonts.googleapis.com/css?family=Poppins:700" rel="stylesheet" />
            {renderMeta.styleTags}
          </Head>
          <Body className="font-sans text-xl mx-8 md:mx-16">{children}</Body>
        </Html>
      )
    }
  },
  webpack: (config, { stage, defaultLoaders }) => {
    let cssLoader = {}

    if (stage === 'dev') {
      cssLoader = {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              sourceMap: true,
              ident: 'postcss',
              plugins: () => [
                postcssFlexbugsFixes,
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
                tailwindcss(path.resolve(__dirname, './tailwind.config.js')),
              ],
            },
          },
        ],
      }
    } else {
      cssLoader = {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              sourceMap: false,
              hmr: false,
            },
          },
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: true,
                sourceMap: false,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                sourceMap: true,
                ident: 'postcss',
                plugins: () => [
                  postcssFlexbugsFixes,
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
                  tailwindcss(path.resolve(__dirname, './tailwind.config.js')),
                ],
              },
            },
          ],
        }),
      }
    }

    config.module.rules = [
      {
        oneOf: [
          defaultLoaders.jsLoader,
          cssLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
  },
}
