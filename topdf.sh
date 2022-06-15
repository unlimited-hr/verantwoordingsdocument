#!/usr/bin/env bash
npx mr-pdf \
--initialDocURLs="https://unlimited-hr.github.io/verantwoordingsdocument/" \
--contentSelector="article" \
--paginationSelector=".pagination-nav__link--next" \
--excludeSelectors=".margin-vert--xl a,.card,theme-edit-this-page" \
--coverImage="https://docusaurus.io/img/docusaurus.png" \
--coverTitle="CLAIRE Verantwoordingsdocument" \
--outputPDFFilename"Verantwoordingsdocument"