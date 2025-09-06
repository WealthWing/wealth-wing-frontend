#!/bin/bash
# Deploy script for Netlify
# Make sure you have Netlify CLI installed: yarn global add netlify-cli
# And have run `netlify login` and `netlify init` at least once

yarn workspace @wealth-wing/lani build
netlify deploy --prod --dir=packages/lani/build