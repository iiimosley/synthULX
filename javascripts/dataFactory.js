'use strict';
const $ = require('jquery');

module.exports.getPatches = (uid) => {
    return new Promise((resolve, reject) => {
        $.ajax({ url: `https://synthulx.firebaseio.com/patches.json?orderBy="uid"&equalTo="${uid}"` })
            .done(patches => {
                console.log(patches);
                resolve(patches);
            });
    });
};

module.exports.setPatch = () => {
    return new Promise((resolve, reject) => {
        $.ajax({url: '../patchData.json'})
        .done( patch => {
            resolve(patch);
        });
    });
};

module.exports.savePatch = (patchData) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://synthulx.firebaseio.com/patches.json',
            method: 'POST',
            data: JSON.stringify(patchData)
        })
        .done(patch => {
            console.log(patch);
            resolve(patch);
        });
    });
};