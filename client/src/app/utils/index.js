export function selectFormat(list) {
    const intermedialList = list.map(section => section)
    const intermedialList2 = [...new Set(intermedialList)]
    return intermedialList2.map(section => { return { label: section, value: section } })
}

export function upperFirstCase(text) {
    if(!text) return ''
    var loweredText = text.toLowerCase();
    var words = loweredText.split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];

        var firstLetter = w[0];
        w = firstLetter.toUpperCase() + w.slice(1);

        words[a] = w;
    }
    return words.join(" ");
}