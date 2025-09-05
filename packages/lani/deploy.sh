#!/bin/bash
# Deploy script for Netlify
# Make sure you have Netlify CLI installed: yarn global add netlify-cli
# And have run `netlify login` and `netlify init` at least once

set -e

# Build the project
yarn build

# Deploy to Netlify (change --prod to --draft for preview deploy)
netlify deploy --draft --dir=build
