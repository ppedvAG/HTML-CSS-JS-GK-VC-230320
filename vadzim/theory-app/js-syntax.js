let myString = 'HochkommaString'
let stringMitHTML = '<b>bold text</b>'

/* document.getElementById('par_iT').innerText = myString // HochkommaString
document.getElementById('par_iH').innerHTML = myString // HochkommaString
document.getElementById('out_v').value = myString // HochkommaString */

document.getElementById('par_iT').innerText = stringMitHTML // <b>bold text</b>
document.getElementById('par_iH').innerHTML = stringMitHTML // bold text
document.getElementById('out_v').value = stringMitHTML // <b>bold text</b>