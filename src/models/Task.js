"use strict";

class Task {
    constructor(_text='Task1', _isCompleted=false) {
        this.text = _text;
        this.isCompleted = _isCompleted;
        this.id = Task.uuid();
    }

    // get id() {
    //     return this.id;
    // }
    //
    // set id(value) {
    //     this.id = value;
    // }

    // get text() {
    //     return this.text;
    // }
    //
    // set text(value) {
    //     this.text = value;
    // }

    // get isCompleted() {
    //     return this.isCompleted;
    // }
    //
    // set isCompleted(value) {
    //     this.isCompleted = value;
    // }

    toString() {
        browser.localStorage(
            'POST',
            {key: 'react-todos',
                value: '[{"id":"'+ this.id +'","title":"' + this.text +
                '", "isCompleted":' + this.isCompleted + '}]'});
        browser.refresh();
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

