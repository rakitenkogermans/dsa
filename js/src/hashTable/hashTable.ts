class HashTable {
    keyMap: Array<Array<Array<string>>>;
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash = (key: string) => {
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    };

    set = (key: string, value: string) => {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        } else {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    this.keyMap[index][i][1] = value;
                    return;
                }
            }
        }
        this.keyMap[index].push([key, value]);
    };

    get = (key: string) => {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    };

    keys = () => {
        const keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    };

    values = () => {
        const valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    };
}

export { HashTable };
