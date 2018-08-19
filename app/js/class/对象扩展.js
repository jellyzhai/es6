//对象简洁表示法
{
  let o = 'hi';
  let k = 'ok';
  let es6 = {
    o,
    k,
    hello(v){
      console.log(v)
    }
  }

  //console.log(es6.o,es6.k,es6.hello('hello'))
}

//属性表达式
{
  let a= 'b';

  let es6= {
    [a]:'c'
  }

  //console.log(es6)
}

//新增api
{
  // console.log('Object.is()方法等于===',Object.is('ok','ok'),'ok'==='ok')
  // console.log('2个空数组不相等，因为引用地址不同',Object.is([],[]),[]===[]);
  // console.log('对象复制，将后面的对象属性值复制到前一个对象，并返回前一个对象',Object.assign({a:1},{b:2}));

  let o={a:1,b:3};

  /*for(let [i,v] of Object.entries(o)){
    console.log(i,v)
  }*/
}

// 对象的rest运算符的解构赋值
{
  /*let {a,...b} = {a:1,b:2,c:3};
  console.log(b)*/
}