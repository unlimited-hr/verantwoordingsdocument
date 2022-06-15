#!/usr/bin/env bash
npx mr-pdf \
--initialDocURLs="https://unlimited-hr.github.io/verantwoordingsdocument/" \
--contentSelector="article" \
--paginationSelector=".pagination-nav__link--next" \
--excludeSelectors=".margin-vert--xl a,.card,.theme-edit-this-page" \
--coverTitle="CLAIRE Verantwoordingsdocument" \
--coverSub="https://unlimited-hr.github.io/verantwoordingsdocument/" \
--outputPDFFilename="Verantwoordingsdocument.pdf"