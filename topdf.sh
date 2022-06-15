#!/usr/bin/env bash
npx mr-pdf \
--initialDocURLs="https://unlimited-hr.github.io/verantwoordingsdocument/" \
--contentSelector="article" \
--paginationSelector=".pagination-nav__link--next" \
--excludeSelectors=".margin-vert--xl a,.card,theme-edit-this-page" \
--coverImage="https://cdn.discordapp.com/attachments/860265133208895508/986628271443677295/unknown.png" \
--coverTitle="CLAIRE Verantwoordingsdocument" \
--coverSub="https://unlimited-hr.github.io/verantwoordingsdocument/"
--outputPDFFilename"Verantwoordingsdocument"