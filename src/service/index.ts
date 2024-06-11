export function generateId(name: string, index: number): string {
  return name.substring(0, index).toLocaleLowerCase() + '-' + Date.now().toString();
}
