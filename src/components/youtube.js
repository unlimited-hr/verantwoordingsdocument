import {compile} from '@mdx-js/mdx'
// Node currently can’t pick up on the default exports by `@remark-embedder`.
import fauxRemarkEmbedder from '@remark-embedder/core'
import fauxOembedTransformer from '@remark-embedder/transformer-oembed'
const remarkEmbedder = fauxRemarkEmbedder.default
const oembedTransformer = fauxOembedTransformer.default

async function Youtube(code) {
    return String(
        await compile(code, {
            remarkPlugins: [[remarkEmbedder, {transformers: [oembedTransformer]}]]
        })
    )
}
export default Youtube
