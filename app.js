import {
    val_str , val_dex , val_con , val_int , val_wis , val_cha , val_button , img_str , img_cha , img_dex , img_con , img_int , img_wis , strResults , dexResults , conResults , intResults ,
    wisResults , chaResults
} from './functions.js';

val_button.addEventListener('click', () =>{
    const strLvl = val_str.value;
    const dexLvl = val_dex.value;
    const conLvl = val_con.value;
    const intLvl = val_int.value;
    const wisLvl = val_wis.value;
    const chaLvl = val_cha.value;
    
    const strUrl = strResults(strLvl);
    const dexUrl = dexResults(dexLvl);
    const conUrl = conResults(conLvl);
    const intUrl = intResults(intLvl);
    const wisUrl = wisResults(wisLvl);
    const chaUrl = chaResults(chaLvl);

    img_str.src = strUrl;
    img_dex.src = dexUrl;
    img_con.src = conUrl;
    img_int.src = intUrl;
    img_wis.src = wisUrl;
    img_cha.src = chaUrl;
});