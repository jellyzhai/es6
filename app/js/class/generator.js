import $ from 'jquery';
import co from 'co';

//co方法用于自动执行generator函数 实例的 next()方法，直到执行完毕，返回一个promise对象
{
  let url = 'http://localhost:8080';
  let loadImg = (url) => {
    return new Promise( (resolve, reject) => {
      $.ajax({
          url,
          success(data) {
            resolve(data);
          },
          error(xhr) {
            reject(xhr.statusText)
          }
        })
    })
  }

  let gen = function* (){
    let data1 = yield loadImg(url);
    console.log(data1);
    let data2 = yield loadImg(url);
    console.log(data2);
  }

  /*co(gen).then( () => {
    console.log('finished')
  }).catch((e)=>{
    console.log(e)
  }); */

}

{
  //遍历器对象的 throw(new Error('出错了！'))方法 抛出的错误，
  //相当于 在上一个next()方法执行的 yield后面 执行全局的 throw(new Error('出错了！')) 方法
  //生成器函数里的 try{}catch(e){} 只能捕获一次错误，其余外部抛出的错误 只能在外部呗捕获
  var g = function* () {
    try {
      yield;
      yield 2;
    } catch (e) {
      console.log('内部捕获', e);
    }
  };

  var i = g();
  /*console.log(i.next());
  console.log(i.next());

  try {
    i.throw(new Error('a'));
    i.throw(new Error('b'));
  } catch (e) {
    console.log('外部捕获', e);
  }*/
// 内部捕获 a
// 外部捕获 b
}

//定义
{
  //generator函数有4各阶段 'a' 'b' 'c' 'ending';会分段执行代码
  function* g(){
    yield 'a';
    yield 'b';
    yield 'c';
    return 'ending'
  }

  /*
  * 调用g()函数并不会执行函数体内代码 而是返回一个指向内部状态的对象
  * Generator函数是分段执行的，yield语句是暂停执行的标记，
  * 而next方法可以恢复执行。
  * */
  let gen = g();
  /*console.log(gen);
  console.log(gen.next(),gen.next(),gen.next(),gen.next());*/

  //每调用一次generator函数 就会重新生成一个指向内部状态的对象
  let gen2 = g();
  //console.log(gen2.next())

}
/*
* yield语句与return语句既有相似之处，也有区别。
相似之处在于，都能返回紧跟在语句后面的那个表达式的值。

区别在于每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行，
而return语句不具备位置记忆的功能。
一个函数里面，只能执行一次（或者说一个）return语句，
但是可以执行多次（或者说多个）yield语句。
正常函数只能返回一个值，因为只能执行一次return；
Generator函数可以返回一系列的值，因为可以有任意多个yield。
从另一个角度看，也可以说Generator生成了一系列的值。
* */
{
  function* gen() {
    var i = 0;
    yield ++i;
    yield ++i;
    yield ++i;
  }

  let g = gen();
  /*console.log(g.next());
  console.log(g.next());
  console.log(g.next());
  console.log(g.next());*/
}

/*
* 注意：yield语句只能用于function*的作用域，
* 如果function*的内部还定义了其他的普通函数，
* 则函数内部不允许使用yield语句。

注意：yield语句如果参与运算，必须用括号括起来。
* */
{
  function* f() {

    1 + (yield 1); //无效
  }
  const g=f();
  // console.log(g.next(), g.next())
}

/*
* next(arg)方法返回yield后面的值 并暂停执行后面代码，
* 参数arg用于覆盖前一个yield返回值
* */
{
  function* gen() {
    let i = 0;
    let a = yield ++i;

    console.log(`a = ${a}`);
    let b = yield ++i;
  }

  let g = gen();
  // console.log(g.next()); //执行到第一个yield后面的代码为止
  // console.log(g.next(11)) //执行到第2个yield后面的代码为止
}

{
  function* gen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
  }
  let g = gen();
  //console.log(g)

 /* console.log(g.next());
  console.log(g.next());
  console.log(g.next());
  console.log(g.next());
  console.log(g.next());
  console.log(g.next());*/

  /*
  * 当next()方法返回的对象属性done的值为true时，
  * 就会终止循环，并不返回对象的value值，所以不返回6
  * */
  /*for (let v of g){
    console.log(v)
  }*/
}

/*
* return()的参数值覆盖本次yield语句的返回值，并且提前终结遍历，
* 即使后面还有yield语句也一律无视。

提问：return方法跟next方法的区别都有哪些？
答：
1、return终结遍历，之后的yield语句都失效；next返回本次yield语句的返回值。
2、return没有参数的时候，返回{ value: undefined, done: true }；
next没有参数的时候返回本次yield语句的返回值。
3、return有参数的时候，覆盖本次yield语句的返回值，也就是说，
返回{ value: 参数, done: true }；next有参数的时候，覆盖上次yield语句的返回值，
返回值可能跟参数有关（参数参与计算的话），也可能跟参数无关（参数不参与计算）。

* */
{
  function* gen() {
    let a = yield 1;
    console.log(a)
    yield 2;
    yield 3;
    yield 4;
  }

   let g = gen();
  /*console.log(g.next());
  console.log(g.next(12));
  console.log(g.return(34));
  console.log(g.next());*/
}

/*
* 当一个generator函数内 调用另一个generator函数时，
* 用yield* foo();才能继承包括return的值
* */
{
  function* foo() {
    yield 1;
    yield 2;
    return 3
  }

  function* bar() {
    let f = yield* foo();
    console.log(f);  //返回return的值
    yield 4;
    yield 5
  }

   let b = bar();
 /* console.log(b.next())
  console.log(b.next())
  console.log(b.next())
  console.log(b.next())
  console.log(b.next())*/
}

//状态机
//每次next() 都是执行到yield语句后面 结束的代码
{
  function* gen() {
    while(true){
      console.log(1);
      yield true;
      console.log(2);
      yield false
    }
  }

  let g = gen();

  /*console.log(g.next());
  console.log(g.next());
  console.log(g.next());
  console.log(g.next());*/
}

/*
* 只有当yield后面跟的函数先执行完，无论执行体里面有多少异步回调，
* 都要等所有回调先执行完，才会执行等号赋值，以及再后面的操作。
* */
//异步操作的同步化写法
{
  function* gen() {
    console.log(yield request('http://localhost:8080/'));
    console.log(yield request('http://localhost:8080/'));
    console.log(yield request('http://localhost:8080/'));
  }

  let it = gen();

  function request(url) {
    $.get(url,function (data) {
      it.next(data)
    })
  }

   // it.next();
}

//对象增加iterator接口 可以直接对 对象的iterator接口遍历
{
  let o = {a:0};
  o[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3
  }

  /*for(let v of o){
    console.log(v)
  }*/
}

//抽奖
{
  //这里写具体抽奖逻辑
  function draw(count) {
    //这里写具体抽奖逻辑
    console.log(`还剩${count}次`)
  }

  //抽奖次数判定
  let reduce = function* (count) {
    while(count>0){
      --count;
      yield draw(count);
    }
  }

  let r = reduce(5);
  let btn = document.createElement('button');
  btn.id = 'btn';
  btn.textContent = '抽奖';
  document.body.appendChild(btn);

  $('#btn').on('click',function () {
    r.next();
  })
}

//generator函数 和 promise对象结合使用，进行长轮询
{
  let ajax = function* () {
    yield new Promise( (resolve,reject) => {
      //做Ajax请求 把请求结果 传给resolve
      setTimeout(function () {
        resolve({status:200})
      },200)
    })
  }

  function pull() {
    let g = ajax();
    let p = g.next().value; //g.next()返回的是{value:Promise对象,done:boolean}
    p.then(function (data) { //判断请求状态
      if(data.status===200){
        console.log('更新数据')
      }else {
        setTimeout(function () {
          console.log('请求中。。。');
          pull()
        },1000)
      }
    })
  }

  // pull();

}