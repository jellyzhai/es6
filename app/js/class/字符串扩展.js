{
  // console.log('a','\u0061');
  // console.log('s','\u20BB7');
  //
  // console.log('s','\u{20BB7}');
}

//查看Unicode字符编码方法 codePointAt(num)
{
  let s='𠮷';
  // console.log('length',s.length);
  // console.log('0',s.charAt(0));
  // console.log('1',s.charAt(1));
  // console.log('Code0',s.charCodeAt(0));
  // console.log('Code1',s.charCodeAt(1));

  let s1='𠮷a';
  // console.log('s1',s1.length);
  // console.log('code0',s1.codePointAt(0));
  // console.log('code0',s1.codePointAt(0).toString(16));
  // console.log('code1',s1.codePointAt(1));
  // console.log('code2',s1.codePointAt(2));

}

//查看Unicode字符解码方法 fromCodePoint(Unicode字符)
{
  // console.log(String.fromCharCode('0x20BB7'));
  // console.log(String.fromCodePoint('0x20BB7'));
}

{
  let s='\u{20BB7}abc';

  /*for(let i=0; i<s.length; i++){
    console.log('es5 '+s[i]);
  }

  for(let code of s){
    console.log(code);
  }*/
}

//ES6判断字符串中是否包括字符，是否以某字符开始和结束
{
  let str='string';
  // console.log('includes '+str.includes('s'));
  // console.log('startsWith '+ str.startsWith('st'));
  // console.log('endsWith '+ str.endsWith('ng'));
}

//字符串repeat()方法
{
  let s='qwe';
  //console.log(s.repeat(3));
}

//字符串模板
{
  let name='jelly';
  let welc='hello';

  let m = `${welc},dear ${name}`;
  //console.log(m)
}

//字符串补白padStart(length,str)
{
  // console.log('1'.padStart(2,'0'));
  // console.log('1'.padEnd(2,'0'));
}

//标签模板
{
  let user = {
    name :'list',
    info: 'hello'
  }
  abc`i am ${user.name},${user.info}`;

  function abc(s,v1,v2) {
    //s='you are';
    //console.log(s,v1,v2);
  }
}

{
  // console.log(String.raw`result \nis ${1+2}`);
  // console.log(`result \nis ${1+2}`)
}
