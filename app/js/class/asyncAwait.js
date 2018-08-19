{
  function p(v) {
    return new Promise((resolve,reject) => {
      if(v>=0) resolve(v);
      reject(v);
    })
  }

  //await命令只能用在async函数之中，如果用在普通函数，就会报错。
  async function a() {

    //await后面可以是Promise对象，也可以是9种基本数据类型
    //如果不是Promise对象，则内部会使用Promise.resolve()方法 转成状态为 resolve 的Promise对象
    //await命令的返回值 是Promise函数里 resolve(v)函数的参数
    let v1, v2, v3, v4;
    try{
      v1 = await p(1);
      //throw(new Error('error'));

      v2 = await p(2);
      v3 = await p(3);
      v4 = await 4; //等于同步操作
    }catch (e) {
      //可以捕捉Promise里的异步错误，也能捕获async函数里的同步错误
      console.log(e);
    }

    return {v1, v2, v3, v4};
  }

  //async函数调用后：
  //1、内部所有await后面的语句 会自动按顺序执行
  //2、会返回一个promise对象，then()方法的第一个参数函数的参数，代表async函数最后return的值
 /* a().then( v =>{
    console.log(v);
  })*/
}

{
  function p(v) {
    return new Promise((resolve,reject) => {
      if(v>=0) resolve(v);
      reject(v);
    })
  }

  async function a() {

    //如果 有几个await 后面的promise对象之间不是继发关系(继承发展关系：后面的操作需要等到前面完成)
    //可以使用Promise.all()方法 让这几个独立的promise对象的异步操作 同时执行（并发）
    //继发执行耗时，并发执行速度快
    let v1, v2, v3, v4;
    try{
      [v1, v2, v3, v4] = await Promise.all([p(1),p(2),p(3)]);
    }catch (e) {
      //可以捕捉Promise里的异步错误，也能捕获async函数里的同步错误
      console.log(e);
    }

    return {v1, v2, v3, v4};
  }

  //async函数调用后：
  //1、内部所有await后面的语句 会自动按顺序执行
  //2、会返回一个promise对象，then()方法的第一个参数函数的参数，代表async函数最后return的值
   a().then( v =>{
     console.log(v);
   })
}