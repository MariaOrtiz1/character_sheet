export {val_str , val_dex , val_con , val_int , val_wis , val_cha , val_button , img_str , img_cha , img_dex , img_con , img_int , img_wis , strResults , dexResults , conResults , intResults ,
    wisResults , chaResults

};


const val_str = document.getElementById('strength');
const val_dex = document.getElementById('dexerity');
const val_con = document.getElementById('constitution');
const val_int = document.getElementById('intelligence');
const val_wis = document.getElementById('wisdom');
const val_cha = document.getElementById('charisma');
const val_button = document.getElementById('button');
const img_str= document.getElementById('str');
const img_dex= document.getElementById('dex');
const img_con= document.getElementById('con');
const img_int= document.getElementById('int');
const img_wis= document.getElementById('wis');
const img_cha= document.getElementById('cha');

function strResults(strMod) {
    if (strMod > 15) {
        return './high str';
    } else {
        return './low str';
    }
};
function dexResults(dexMod) {
    if (dexMod > 15) {
        return './high dex';
    } else {
        return './low dex';
    }
};
function conResults(conMod) {
    if (conMod > 15) {
        return './high con';
    } else {
        return './low con';
    }
};
function intResults(intMod) {
    if (intMod > 15) {
        return './high int';
    } else {
        return './low int';
    }
};
function wisResults(wisMod) {
    if (wisMod > 15) {
        return './high wis';
    } else {
        return './low wis';
    }
};
function chaResults(chaMod) {
    if (chaMod > 15) {
        return './high cha';
    } else {
        return './low cha';
    }
};