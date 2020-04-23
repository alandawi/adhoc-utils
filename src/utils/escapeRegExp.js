const escapeRegExp = async (string) => {
    await string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
}

module.exports = escapeRegExp