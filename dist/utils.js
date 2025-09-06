export function extractProfileString(url) {
    const userId = url.split('/').pop() ?? '';
    return userId.match(/^\d+/)?.[0] ?? '';
}
//# sourceMappingURL=utils.js.map