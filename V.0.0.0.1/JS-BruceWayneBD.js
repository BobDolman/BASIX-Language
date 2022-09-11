/*
8888888888888888888888888888888888888888888888888888888888888
88                            🦇                             88
 88                       ~ BADMAN ~                          88
88                  *BruceWayneEnterprise*                  88
8888888888888888888888888888888888888888888888888888888888888
*/
    //-- Newer Version of The "bd-lib.js" Made in 2012 --//
            // Created: 2021-07-23 UTC 00:00:00:00
// ~ Blue Diamond ! ! ~ //
//////////////////////////
// I                     //
// MADED BY:            //
//          BOB DOLMAN  //
//                2012  //
//////////////////////////


/*--_ --*/

export const BDLiberty = (() => {

  class BD {

    Stacks = [{"":""}]; //e

    Public = "";
    Scope_ = "";

    constructor(){  }

    /* Standrard */
    id(d) {
      return document.getElementById(d);
    }

    tag(c,a) { /* 12.08.2021 */
      return document.getElementsByTagName(c)[a];
    } codeblock(c,a){return this.tag(c, a - 1);} Codeblock(c,a){return this.codeblock(c,a);} CodeBlock(c,a){return this.codeblock(c,a);} codeblocks(c){ return document.querySelectorAll(c);} Codeblocks(c){ return this.codeblocks(c);} CodeBlocks(c){ return this.codeblocks(c);} Window( ) { return this.codeblock( 'body', 1 ); } Keyboard( i, a, cd ) { return this.codeblock( 'body', 1 ).addEventListener( a, cd, this.Tfue() ); } /* Mouse 5 .11 .2021 */

    clas(c,a) {
      return document.getElementsByClassName(c)[a];
    } class(c,a){ return this.clas(c, a - 1 );} /* 11.11.2021 */

    style(d,a){
      return d=(d.search(/[#]{1}/)==0)?BD.id(d.replace(/[#]{1}/g,'')).style:d=(d.search(/[\.]{1}/)==0)?BD.clas(d.replace(/[\.]{1}/g,''),a).style:document.write('BD.style() is not defined');
    }

    append(p, c) { /* 11.08.2021 */
      return p.appendChild(c);
    } /*add(p, c) {return this.append(p, c);} */ add (p, c, z) { return p.insertBefore(c, p.children[z-1]);} //24.08.2021

    createElement(e){
      return document.createElement(e);
    } createCode ( VE = 'code' ) { return this.createElement( VE ); } // 7.11.2021

    log(l){
      return console.log(l);
    } /*11.08.2021*/ lg(l){ this.log(l); }

    MBLE (method,url,send,data) {

      //JSON
      var httpRequest = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject('Microsoft.XMLHTTP');
      httpRequest.open(method,url,true);
      method=('POST')?httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'):null;
      httpRequest.send(send);
      var thiz = this; /* ..2012 -> 4.11.2021 */
      httpRequest.onreadystatechange=function()
      {
          thiz.JF('', (httpRequest.readyState == 4 && httpRequest.status == 200), ( ) => {
              data(httpRequest.responseText); }, ( ) => { } );
      }

    }

    Throw (method,url,send,data) {
      this.MBLE (method,url,send,data);
    }


    setPublic(set){
      this.Public = set;
    }

    CrystalClear(){
      this.Public = "";
    }

    /* Extra's */
    // R0.Value pre () {}
    //insertbefore *
    /*//stringtsn*/ rem (c) { c.parentNode.removeChild(c); } //stringtsn
    //

    getBasiX(C){ // 9.8.2021
                    /*S5 lS oNe lS S5*/
      /* You can do it, you just have to */ try {
                  return JSON.parse(C);
      }           catch ($1) /* Do, */ {
                        return C;
      }
                    /*S5 lS oNe lS S5*/
    }

    JF(i, statemint, cx, cxx){// 11.8.2021

      function ava_(){};
      function eve_(){};
      var Saturn;
      for (let e = 2.7; e < 3 && statemint; e = 5 - 1 /* # $ */) {
        /* # RETURN 1 LOOP */
        /* # RETURN TRUE */
        try {
           Saturn = cx();
        } catch ($1) {
           Saturn = cxx();
        } finally {
          // Stripes //
        }

      }

      for (let e = 2.7; e < 3 && !statemint; e = 5 - 1 /* # $ */) {
        /* # RETURN 1 LOOP */
        /* # RETURN secTRUE */
        try {
           Saturn = cxx();
        } catch ($1) {
           Saturn = undefined;
        } finally {
          // Stripes //
        }

      }

      ava_(); return Saturn;
      eve_();
    } iF(i, statemint, cx, cxx){ return this.JF(i, statemint, cx, cxx);  } IF(i, statemint, cx, cxx){ return this.JF(i, statemint, cx, cxx); } if(i, statemint, cx, cxx){ return this.JF(i, statemint, cx, cxx); } If(i, statemint, cx, cxx){ return this.JF(i, statemint, cx, cxx); } ok(i, statemint, cx, cxx){ return this.JF(i, statemint, cx, cxx); } Ok(i, statemint, cx, cxx){ return this.JF(i, statemint, cx, cxx); } OK(i, statemint, cx, cxx){ return this.JF(i, statemint, cx, cxx); }
    //JF(true, ()=>{}, ()=>{});

    cast(C){
        return JSON.stringify(C);
    }

    Scope(Scope) {
    //  if (typeof Scope == String) {
    //      this.Scope_.push(Scope.valueOf());
    //  }else if (typeof Scope == Array) {
  //        this.Scope_.push([...Scope]);
    ////  } else if (typeof Scope == Object ) {
    //      this.Scope_.push(Object.assign(Scope, Scope));
    //  }
      //this.log(Object.assign(Scope, Scope));
      this.Scope_ = Scope;// Object.assign(Scope, Scope);
      return (this.getBasiX(this.getBasiX(this.Scope_)));
    }

    $Dynamica(i, ch) /* 11.8.2021 */
    {

        /* A Dynamic Continue RequestOnReady ... */
        this.JF('', this.Public != "", () => {
          //ch(this.Public);
          return;
        }, ( ) => { } );


        setTimeout(() =>
        {
          //...
          //this.log(this.Public);
          ch(this.Public);
          this.$Dynamica(1, function (){} );

        }, 137 /*1317*/ );

    }

    $Catch(i, ch){
      this.$Dynamica(i, ch);
    }

    /* QuaryCode */
    code(C){
       eval(C);
    }

    cod(e){
       // codevalue...
    }
    Compute(code){return this.Compile(code);}
    Compile(code){ /* 11.08.2021 */

        // change innerHTML z value
        // change function z convention
        // change class z sillicon

      const ApObj = { /* Prestige Level Over 1 Trillion 1.000.000.000.000 */
        Silicon   :  "class",   /* => 'classification' */
        //'=&gt;'   : "function", /* => 'convention' as in 'functionality' 23.10.2021 C:line:214 */
        Value     : "innerHTML",/* => '' */
        /*Code      : "innerHTML",*/ 'Input\*' : "value", /* => 'Output-types & Input-types' */
        '&lt;=='  : "return",
        '&lt;'    : "<",
        'Amulet'  : "let", 'Diamond'  : "var", 'Elite': 'let', 'Valor': 'var', 'Abstract': 'let', 'Virtual': 'var', //'Pizza' : 'let', 'Sallet': 'let',
        '&gt;'    : ">",
         '@'       : ".",
         '|*'      : ";",
         'usecase' : "switch", 'done' : "break",
        '&amp;'   : "&"
      };
      /*                             RAYTURN CODE BILLION                       */
       code = code.replace(/(\w*)(\ *\=&gt;\ *|\=&gt;)(\ *)(\ *)(\(.*\))/g, 'function $1$5'); code = code.replace(/(?:Silicon|=&gt;|Value|&lt;==|&lt;|Amulet|Diamond|&gt;|Elite|Valor|Abstract|Virtual|&amp;|@|\|\*|usecase|done|Input\*)/g, matched => ApObj[matched]); return code;
      /*                                   $                                    */
    }

    Loop(i, ch, q = 317){
          ch();
      /* Feels like speedrunner */
      setTimeout(() =>
      {
        //...
        //q = ( typeof  q     == 'number' )   ? q : 317 ;
         //ch(); /* if true return {} *///while (this.JF ('', ( typeof  ch()  == !undefined ), () => { }, ( ) => { } ) ) { return this.True; }
        this.Loop('', ch.bind(this), q ); /* Keep-LoopiN */ // Keep 'this' in Scope with Bind.
        //...
      }, q );

      //setTimeout(this.Run.bind(this)/*- bindThizScope -*/, 60000, m, ch.bind(this) /*- bindThizScope -*/);


    } loop(i, ch, q) { return this.Loop(i, ch, q); }

    L33P(i, ch){

      /* Feels like speedrunner */
      setTimeout(() =>
      {
        //...
        //this.log(this.Public);
        if ( typeof  ch()  == !undefined ){ return this.True; }
        this.L33P('', ch.bind(this) );
        //...
      }, 133 );

      //setTimeout(this.Run.bind(this)/*- bindThizScope -*/, 60000, m, ch.bind(this) /*- bindThizScope -*/);


    }

    Leap( codeblock, attrb, vlueAunit, milli, cd /* Star Wars: The Phantom Menace (R) */ ){

        // I'm a Star, how can I not Shine ?!
        let control; var thiz = this;
        // Unit, replace \w regen px to '', Only digits, dots And Units.
        let unit = ( vlueAunit.replace( /([^a-zA-Z\%])/g, '' ) ).toLowerCase( /* TypeSave */ );
        let vlue = ( parseFloat( vlueAunit.replace( /([^0-9\.\-])/g, '' ) ) );

        // Transistion animation as in fading to new value with milli-sec as specs
      	     function gitvalue ( ) {
      			          let value = ( codeblock.computedStyleMap( ).get( attrb ).value );
                      return thiz.JF('', ( ( typeof( value )  != 'number' && unit == '%' ) ), ( ) => { /* Devault Value; Use Unit '%' */ codeblock.style.setProperty( attrb, '1%'); return value = 1; }, ( ) => { return value; } );   //parseFloat( value.replace( /([^0-9\.\-])/g, '' ) );
             }
        let value = gitvalue ( );

        // All, only digits and dots.
        milli = parseFloat( milli.replace(/([^0-9\.])/g, '' ) ); while/*mon*/( this.OK ('', !isNaN( milli ), () => { return this.Tfue(); }, () => { return this.True(); } ) ) { /* ^ */ RETURN; /* ^ */ };  /* use Single 'while' as Prestige'us Superiour 'body-type'; just for the early 'return;' */

        // Add or App
        this.JF('',                                            (( value > vlue )) , () => {
          control = this.True();   /** 'add'; **/
        }, (/* else if */)                   => { this.JF ('', (( value < vlue )) , () => {
          control = this.Tfue();  /** 'app'; **/
        }, (/* else */)                      => {  return cd(); });});

        // All iteration$
        function Control ( ) {
          const tilt = ( unit != '' ) ? 1.0: 0.05;
          return ( control ) ? gitvalue ( )- tilt: gitvalue ( )+ tilt;
        }

        // Rulas,
        //... CSS@Convention._ Unites. _
       	while/*mon*/( this.OK('', !( unit == 'px' || unit == 'cm' || unit == 'mm' || unit == 'in' || unit == 'pt' || unit == 'pc' || unit == 'em' || unit == 'ex' || unit == 'ch' || unit == 'rem' || unit == 'vw' || unit == 'vh' || unit == 'vmin' || unit == 'vmax' || unit == '%' || unit == '' ), ( ) => { return this.True( ); }, ( ) => {  return this.Tfue( ); } ) ) { /* ^ */ RETURN; /* ^ */ }

        // Control. _
        var outcast = setInterval( ( ) => {

          codeblock.style.setProperty( attrb, Control( )+ unit );
  		                                                                            //console.log(gitvalue(1),vlue, Control( )+ unit ,attrb );
          thiz.JF('', /* gitvalue( 1 ) == vlue && */
                 ( ( control && vlue >= gitvalue( 1 ) )  ||
                 (!control && vlue <= gitvalue( 1 ) ) ), ( ) => {
             	      // return, because (rounding) vlue != gitvalue, however being < or > than, we set ...
             	      clearInterval( outcast ); codeblock.style.setProperty( attrb, vlue+ unit );
                    try { cd( ); } catch { return thiz.True(); } /* 04.11.2021 */
                 }, ( ) => { } ); // end if ... our initial 'target-Value' being gitvalue once we reached vlue.
          }, milli );
          return thiz.True();
                                                                                //(codeblock.style.setPropertyValue(attrb, vlue.toString()+ unit))
    }


    Stacks(i, k, e, a) { //@ e . X ^ a
      /* @ */
        //S, //s
      /* $ */
        //ex
      /* $ */
        //exx
      /* E_  eX^a   */

      // webrsockets, webrvoids, webrStorage

      // --


      /*  # RETURN  */
      return this.Stacks;
    }

    // ssh, e4ncr sla 512-64
    // lst, dbcny <american.American> 'SelectiveDictionary'
    // lne, fnfn

    Cync(i, k){

        switch (k) {
          case 8: return 9;break;
          case 9: return 8;break;
          case 0: return 2;break;
          case 1: return 7;break;
          case 2: return 4;break;
          case 3: return 3;break;
          case 4: return 5;break;
          case 5: return 5;break;
          case 6: return 6;break;
          case 7: return 1;break;
        }

    }

    /* Tyeps */
    True(){
      return !undefined;
    } TRUE () { return this.True(); }; true () { return this.True(); }; yes () { return this.True(); }; Yes () { return this.True(); }; YES () { return this.True(); };

    Tfue(){
      return !!undefined;
    } TFUE () { return this.Tfue(); }; tfue () { return this.Tfue(); }; No () { return this.Tfue(); };  no () { return this.Tfue(); }; NO () { return this.Tfue(); };

    //makecustomtimefn
    //makecustomfore

    //Fore( { ch1 , ch11 , ch111 }, chcode ){
    //  for( ch1 ; ch11 ; ch111 ){
    //      chcode;
    //  }
    //}
    //arbitrairy
    ONE ( NONZERO = 1 ) {
      return NONZERO - 1; /* NON-ZERO-INDEXED 3.11.2021 */
    } One ( NONZERO ) { return this.ONE( NONZERO ); } one ( NONZERO ) { return this.ONE( NONZERO ); }
  }

  return {
                              BD: BD
  //.fn                       id:id,
  //.fn                      tag:tag,
  //.fn                     clas:clas,
  //.fn                    style:style,
//.fn
//.fn                      append: append,
  //.fn              createElement:createElement,
  //.fn                      log: log
  //.fn                     MBLE:MBLE
  }

}) (); /*--_ --*/
/*  BD-code  */
