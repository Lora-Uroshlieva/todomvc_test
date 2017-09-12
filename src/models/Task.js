"use strict";

class Task {
    constructor(_text, _isCompleted) {
        this.text = _text;
        this.isCompleted = _isCompleted;
        this.id = Task.uuid();
    }

    toString() {
        return '{"id":"'+ this.id +'","title":"' + this.text + '", "completed":' + this.isCompleted + '}';
    }

    static uuid(){
        let i, random;
        let uuid = '';

        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
        }

        return uuid;
    }
}

module.exports = Task;
