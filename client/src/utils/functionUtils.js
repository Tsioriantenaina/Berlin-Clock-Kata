export const splitColor = (stringColor, tableToFill, targetComponent) => {
    for(let i = 0; i < stringColor.length; i++) {
        tableToFill.push({lightTable : stringColor[i], targetComponent });
    }
}