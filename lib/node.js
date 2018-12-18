'use strict';

const transformer = require('./transformer');

module.exports = function (markdownData, {
    lang = 'react-example',
    babelConfig,
    noreact,
}) {
    const {content} = markdownData;
    // ignore customized content
    if (Array.isArray(content)) {
        markdownData.content = content.map(node => {
            const tagName = node[0];
            const attr = node[1];
            if (tagName === 'pre' && attr && attr.lang === lang && !attr.parsed) {
                const code = node[2][1];
                const processedCode = transformer(code, babelConfig && JSON.parse(babelConfig), noreact);
                const highlightedCode = [
                    tagName,
                    Object.assign({parsed: true}, attr),
                    node[2]
                ];
                return ['div', {classname: 'codebox'},
                    {
                        __BISHENG_EMBEDED_CODE: true,
                        code: processedCode,
                    },
                    highlightedCode
                ]
            }
            return node;
        });
    }

    return markdownData;
};
