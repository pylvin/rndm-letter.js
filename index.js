function RandomLetter(symbols = [], element) {
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    const rl = this
    // Set symbols
    this.symbols = []
    if (!symbols.length) this.symbols = ['%', '@', '&', '#', '?', '$', '*', '1', '0']

    // Element and original text
    this.element = element
    this.original_text = this.element.textContent

    // Splitted text
    this.letters = this.original_text.trim().split('')

    //Randomly shuffled letter indexes
    this.randomized_indexes = shuffle([...Array(this.letters.length).keys()])

    // Init
    this.letters.forEach((letter, indx) => {
        if (letter !== ' ') {
            this.letters[indx] = this.symbols[Math.floor(Math.random() * (this.symbols.length + 1))]
        }
    })
    this.element.textContent = this.letters.join('')


    function encrypt() {
        return new Promise((resolve, reject) => {
            var promises = []
            for (var indx = 0; indx < rl.randomized_indexes.length; indx++) {
                const letter_indx = rl.randomized_indexes[indx]
                for (var i = 0; i < 2; i++) {
                    const promise = new Promise((resolve1, reject1) => {
                        const interval = Math.ceil(Math.random() * 10) * 100
                        setTimeout(() => {
                            if (rl.letters[letter_indx] !== ' ') {
                                rl.letters[letter_indx] = rl.symbols[Math.floor(Math.random() * rl.symbols.length)]
                            }
                            rl.element.textContent = rl.letters.join('')
                            resolve1()
                        }, interval)
                    })
                    promises.push(promise)
                }
            }
            Promise.all(promises).then(() => {
                resolve()
            })
        });
    }

    function decrypt() {
        return new Promise((resolve, reject) => {
            var promises = []
            for (let indx = 0; indx < rl.randomized_indexes.length; indx++) {
                const interval = Math.ceil(Math.random() * 2000)
                const promise = new Promise((resolve1, reject1) => {
                    const letter_indx = rl.randomized_indexes[indx]
                    setTimeout(() => {
                        if (rl.letters[letter_indx] !== ' ') {
                            rl.letters[letter_indx] = rl.original_text.trim().split('')[letter_indx]
                        }
                        rl.element.textContent = rl.letters.join('')
                        resolve1()
                    }, interval)
                })
                promises.push(promise)
            }
            Promise.all(promises).then(() => {
                resolve()
            })
        })
    }

    encrypt().then(() => {
        decrypt()
    })
}
module.exports.RandomLetter = RandomLetter
