function rolldice() {
    let min = 1;
    let max = 6;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1) + min);
}

export default rolldice;
