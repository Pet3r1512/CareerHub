export default function splitUserName(name: string) {
    const n = name.split(" ");
    if (n.length > 2) {
        return n[n.length - 2] + ' ' + n[n.length - 1];
    }
    return name
}