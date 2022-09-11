/* Key :: */ import { BDLiberty }    from './JS-BruceWayneBD.js';/* Key :: */ import { BaSiX } from './js.lu.BaSiX.lu.js';

let BD = new BDLiberty.BD();/*//8.8.2021*/ let BSX = BaSiX;/*//12.8.2021*/
// ** INCLUDE Additional BlingBling(liberies) Additional INCLUDE ** //
// HERE # import { ClassObject }    from './location';
// HERE # let Nm = new Class.Fn();
let $C = BD.codeblocks('codebase').length; let C = 1;
BD.Loop('', () => { return BD.JF('', C <= $C, () => {
// ** :: QuaryCode :: ** //
let elemintos = BD.codeblock( 'codebase', C );
//BD.log(elemintos);

BD.Throw("GET", elemintos.getAttribute("src"), '', (borne) => {

    BD.setPublic(  BD.cast( borne )  ); // !Throwe

});


BD.$Catch(1, (BORNE) => { /* $. */ ( ( /*JSON*/ ( BORNE ) ) );  // !Catche

    /* 12.08.2021 */
    const __artifactus = BD.Scope( /* < */ BORNE /* > */ ); BD.CrystalClear(); //BD.log(__artifactus);
            // getBasiX, Convention to Bolt-Action, innerScope, Cast //
    BD.codeblock( 'codebase', 1 ).innerHTML += __artifactus;

    BD.JF('', C + 1 <= $C, () => {
                  // || All Codebases to Codebase 1, do you read... || //
      BD.codeblock( 'codebase', 1 ).innerHTML += BD.codeblock( 'codebase', C + 1 ).innerHTML;

    }, () => {
                              /* ... Compute ...*/
      BD.cod(eval( BD.Compute( BD.codeblock( 'codebase', 1 ).innerHTML ) ) /*ue*/ );
                              /* ... Compute ...*/
    });

    C++;

});

elemintos+='';
}, () => { return BD.True; });
});
