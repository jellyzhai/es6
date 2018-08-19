//异步定义
{
  /*let ajax = function (callback) {
    console.log('执行1');

    setTimeout(function () {
      callback()
    },1000)
  };

  ajax(function () {
    console.log('异步1')
  })*/
}

//异步实例
{
  let ajax = () => {
    console.log('执行2');

    //resolve是要执行的函数，reject是终止当前操作；
    return new Promise(function (resolve,reject) {
      setTimeout(function () {
        resolve()
      },1000)
    })
  };

  //ajax执行后返回的promise异步实例，具有then(f),参数为要执行的方法
  /*ajax()
    .then(function () {
    console.log('异步2'); //第一个异步执行

    //为下一个异步操作，返回promise异步实例
    return new Promise(function (resolve,reject) {
      setTimeout(function () {
        resolve()
      },1000)
    }).then(function () {
        console.log('异步3')
    })
  })*/
}

//异步级联错误机制
{
  let ajax = function (num) {
    console.log('执行3');

    //resolve是要执行的函数，reject是终止当前操作；
    return new Promise(function (resolve,reject) {
      if(num>5) {
        resolve()
      }else {
        throw new Error('出错了')
      }
    })
  };

  /*ajax(1).then(function () {
    console.log('异步4')
  }).catch(function (err) { //then返回对象 上有catch方法
    console.log(err)
  });

  ajax(6).then(function () {
    console.log('异步5')
  }).catch(function (err) {
    console.log(err)
  });*/
}

//Promise.all(),待所有异步加载完成后，统一执行resolve函数
{
  function loadImg(imgAddr) {
    return new Promise( (resolve,reject) => {
      let img = document.createElement('img');
      img.src = imgAddr;

      img.onload = function () { //任何标签都有onload方法
        resolve(img)
      };

      img.onerror = function (err) {
        reject(err)
      }
    })
  }

  /*loadImg('http://hbimg.b0.upaiyun.com/225a5f3f75d1d4c59532704782eebd25d323fd801e57a-VlY5c4_fw658')
  .then( (img)=>{
      document.body.appendChild(img)
  }).catch( err => console.log(err) );*/

  //把每个已经加载好图片的img标签显示在页面
  function showImg(imgs){
    imgs.forEach( img => document.body.appendChild(img) )
  }

  /*
  * 将所有 返回Promise对象的loadImg函数转成数组 作为参数传给all，
  * Promise.all()的作用是 等所有异步加载完成后，返回一个Promise对象(有then方法）；
  * 对象里 将之前所有loadImg函数中 未执行的resolve的参数作为数组，传给新的resolve并执行
  * */
  /*Promise.all([
    loadImg('http://lol.91danji.com/UploadFile/20141128/1417165270209114.jpg'),
    loadImg('http://lol.91danji.com/UploadFile/20141128/1417165228238101.jpg'),
    loadImg('http://s2.sinaimg.cn/mw690/006LDoUHzy7auXtQEHD81&690')
  ]).then(showImg).catch( err => console.log(err) );*/
}

//Promise.race()，哪个文件加载的快 就执行哪个Promise
{
  function loadImg(imgAddr) {
    return new Promise( (resolve,reject) => {
      let img = document.createElement('img');
      img.src = imgAddr;

      img.onload = function () {
        resolve(img)
      };

      img.onerror = function (err) {
        reject(err)
      }
    })
  }

  //把最先加载好图片的img标签显示在页面
  function showImg(img){
    let p =document.createElement('p');
    p.appendChild(img);
    document.body.appendChild(p)
  }

  //最终只执行一个函数
  /*Promise.race([
    loadImg('http://lol.91danji.com/UploadFile/20141128/1417165270209114.jpg'),
    loadImg('http://lol.91danji.com/UploadFile/20141128/1417165228238101.jpg'),
    loadImg('http://s2.sinaimg.cn/mw690/006LDoUHzy7auXtQEHD81&690')
  ]).then(showImg).catch( err => console.log(err) );*/

  //promise链式操作
  /*loadImg('http://s2.sinaimg.cn/mw690/006LDoUHzy7auXtQEHD81&690')
    .then( (img) => {
      console.log(img)
    })
    .then( () => {
      return new Promise( (resolve,reject) => {
        resolve()
      })
    })
    .then( () => {
      console.log(2)
    })
    .then( () => {
      return new Promise( (resolve,reject) => {
        resolve()
      })
    })
    .then( () => {
      console.log(3)
    })*/
}

//Promise.resolve() 返回一个状态为 resolved 的Promise对象；Promise.reject();
{

  let emptyPro = Promise.resolve();
/*  emptyPro.then( () => {
    setTimeout( () => {
      console.log(1)
    },1000);
    return emptyPro;
  }).then( () => {
    setTimeout( () => {
      console.log(2)
    },2000);
    return emptyPro;
  }).then( () => {
    setTimeout( () => {
      console.log(3)
    },3000);
  })*/

}

