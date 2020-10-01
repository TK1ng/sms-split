function messageSplit(message) {
    const words = message.split(' ');
    const space = 1;
    let segmentGroup = [];
    let segment = '';
    let totalSegments = 0;

    for (let word of words) {
        if (segment.length === 0) {
            segment += word;
        } else if (segment.length + (word.length + space) < 155) {
            segment += ' ' + word;
        } else if (segment.length + (word.length + space) >= 155) {
            totalSegments += 1;
            segment += ' ' + word;
            segmentGroup.push(segment);
            segment = '';
        }
    }

    let result = [];
    for (let i = 0; i < segmentGroup.length; i++) {
        result.push(segmentGroup[i] + ` (${i + 1}/${totalSegments})`)
    }
    return result;
}
