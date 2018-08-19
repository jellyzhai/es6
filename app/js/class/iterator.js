{
  let obj = {
    a:'hello',
    b:['world',10]
  }

  //对象不能直接使用for of方法
  // for(let v of obj){
  //   console.log(v)
  // }

  //可以通过Reflect.ownkeys()方法获取所有key 对key遍历 获取值
  /*for(let v of Reflect.ownKeys(obj)){
    console.log(obj[v])
  }*/
}

{
  let obj = {
    a:['hello','hi'],
    b:['world',10],
    [Symbol.iterator](){ //将obj对象的值转成数组 就可以直接使用let of for方法
      let self = this;
      let arr = [...self.a, ...self.b];
      let index = 0;
      let len = arr.length;

      return {
        next(){
          if(index<len){
            return {
              value: arr[index++],
              done: false
            }
          }else {
            return {
              value: arr[index++],
              done: true
            }
          }
        }
      }
    }
  }

  /*for(let v of obj){
    console.log(v)
  }

  console.log(obj,obj.constructor)*/
/*---------------让对象可以使用for of 方法---------------*/
  function iretable(obj) {
    let airObj = {
      [Symbol.for('index')]: 0,
      [Symbol.iterator]() { return this },
      next() {
        let keysArr = Reflect.ownKeys(this);
        let len=keysArr.length;
        let thisProto = Reflect.getPrototypeOf(this);
        let i=thisProto[Symbol.for('index')];

        if (i < len) {
          thisProto[Symbol.for('index')]++;
          return {'value': Array.of(keysArr[i],this[keysArr[i]]), 'done': false};
        }else{
          Reflect.setPrototypeOf(obj, Object.prototype);
          return {'value': undefined, 'done': true};
        }
      }
    };

    Reflect.setPrototypeOf(obj, airObj);
    return obj;
  }

  let o={'a':1, 'b':2, 'c':{'d':4,'e':5}, [Symbol('age')]: 26};
  o= iretable(o);

  /*for (let [k,v] of o) {
    console.log(k,v);
  }*/

//方法二
 /* for(let key of Object.keys(o)){
    console.log(o[key])
  }
*/
  //方法3:推荐方法
  /*for(let key of Reflect.ownKeys(o)){
    console.log(o[key])
  }*/
}