export function extractProfileString(url:string):string {
    const userId = url.split('/').pop() ?? '';
    return userId.match(/^\d+/)?.[0] ?? '';
  }
  