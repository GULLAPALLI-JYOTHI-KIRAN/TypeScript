/* Specify return type in function in TS */
// Infered by Ts ,that means automatically ts will infered return type .
const df = (n) => n + 1;
// Explicity specify the return for export function and public function
export function XY(number) {
    return number;
}
export function msg(s) {
    return `Hello ${s}`;
}
// Different parameters type and different return type
function Content(flag) {
    if (flag) {
        return 1;
    }
    else {
        return 0;
    }
}
