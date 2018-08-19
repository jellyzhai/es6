//参数默认值
{
  function test(x,y='word') {
    console.log(x,y)
  }
  //test('hello','jelly');
}

//作用域
{
  let x = 'world';
  function f(x,y=x) {
    console.log(x,y)
  }
  //f('ok');

  function f2(z,y=x) {
    console.log(z,y)
  }
  //f2('ok')
}

//rest参数 将传入的不定参数转成数组 后面不能再有参数
{
  function f(...arg) {
    for(let v of arg){
      console.log(v)
    }
    console.log(arg.constructor)
  }

  //f(1,'ok',3);
}

//...扩展运算符，将数组分解
{
  //console.log('a',...[1,2,3])
}

//箭头函数
{
  let arrow = v => v*2;
  let arrow2 = () => 2;

  // console.log(arrow(3));
  // console.log(arrow2());
}

//尾调用，用于提升嵌套函数性能，在另一个函数中的尾部，调用函数
{
  function tail(x) {
    console.log(x*2)
  }

  function f1(x) {
    return tail(x)
  }
  //f1(2);
}




