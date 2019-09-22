var countSegments = function(s) {
    s = s.replace(/\s+/g, ' ').trim();
    let array = s.split(' ');
    return (s == "") ? 0 : array.length;
};
