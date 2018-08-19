{
  let reg=new RegExp('xy','i');
  let reg2=new RegExp(/xy/i);

  //console.log(reg.test('Xyq'),reg2.test('Xq'));

  //'i'覆盖g规则
  let reg3=new RegExp(/xy/g,'i');
  //console.log(reg3.test('xYz'),reg3.flags);
}

//y匹配符
{
  let s='bbb-bb-b';
  let r=/b+/g; //全局匹配，第二次会从第二个符合条件的地方继续匹配
  let r2=/b+/y; //yard逐个局部匹配，只匹配一次

  // console.log(r.exec(s),r.exec(s));
  // console.log(r2.exec(s),r2.exec(s));
  // console.log(r.sticky,r2.sticky); //判断是否开启Y或U匹配
}