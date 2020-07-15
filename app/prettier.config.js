// Some settings automatically inherited from .editorconfig
module.exports = {
    // Why include an unnecessary character at the end of every line? Break the habit (automatically)!
    semi: true,
    // Trailing commas help with git merging and conflict resolution
    trailingComma: 'all',
    // Use single quotes instead of double quotes
    singleQuote: true,
    overrides: [
        {
            files: '.editorconfig',
            options: { parser: 'yaml' },
        },
    ],
};
