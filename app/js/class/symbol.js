//声明
{
  let a=Symbol();
  let a1=Symbol();

  //console.log(a===a1);

  //用于取回key值，如果已声明则覆盖
  let b=Symbol.for('b');
  let b1=Symbol.for('b');
  //console.log(b===b1);
}

//使用
{
  let a=Symbol.for('a');
  let o={
    [a]:123,
    a:234,
    b:345
  }

  // console.log(o);
  // console.log(o[a]);
  // console.log(o.a);

  //直接遍历含有Symbol属性的对象，取不到值
  /*for(let [i,v] of Object.entries(o)){
    console.log(i,v)
  }*/

  //Reflect是一个对象 ownKeys()方法用于返回对象的所有key 的数组形式
  //console.log(Reflect.ownKeys(o));
  /*Reflect.ownKeys(o).forEach(function (i) {
    console.log(o[i])
  })*/
}