{
  let obj = {
    time:'2017-03-11',
    name:'net',
    _r:123
  }

  let monitor = new Proxy(obj,{
    //设置对象读取的操作
    get(target,key){
      return target[key].replace('2017','2018')
    },

    //设置对象修改的操作
    set(target,key,value){
      if(key==='name'){
        return target[key]=value;
      }else {
        return target[key]
      }
    },

    //拦截key in object操作
    has(target,key){
      if(key==='time'){
        return false
      }else {
        return target[key]
      }
    },

    //拦截deleteProperty操作
    deleteProperty(target,key){
      if(key.startsWith('_')){
        delete target[key];
        return true
      }else {
        return target[key]
      }
    },

    //拦截Object.keys(),Object.getOwnPropertySymbols(),Object.getOwnPropertyNames()
    ownKeys(target){
      return Object.keys(target).filter(i=>i!='name')
    }
  })

  //console.log(monitor.name)
  monitor.time='2022';
  monitor.name='ok';
  //console.log(monitor);

  //console.log('time' in monitor,'name' in monitor);

  /*delete monitor.name;
  delete monitor._r;
  console.log(monitor);
  console.log(obj);*/

  //console.log(Object.keys(monitor));
}

{
  let obj = {
    time:'2017-03-11',
    name:'net',
    _r:123
  }

  //console.log(Reflect.get(obj,'name'));

  Reflect.set(obj,'name','ok');
  /*console.log(Reflect.get(obj,'name'));
  console.log(obj,'name');*/

  Reflect.deleteProperty(obj,'_r');
  /*console.log('_r' in obj);
  console.log(Reflect.has(obj,'_r'))*/
}

//Proxy和Reflect的应用
{
  function validator(target,validator) {
    return new Proxy(target,{ //对象参数
      _validator:validator,
      set(target,key,value,proxy){ //proxy可以去掉
        if(target.hasOwnProperty(key)){
          let valRule=this._validator[key];
          if(!!valRule(value)){
            return Reflect.set(target,key,value,proxy)
          }else {
            throw Error(`不能设置${key}的值为${value}`)
          }
        }else {
          throw Error(`${key} 不存在`)
        }
      }
    })
  }

  const personValidator={
    name(val){
      return typeof val === 'string'
    },
    age(val){
      return typeof val === 'number'&&val>18
    }
  }

  class Person{
    constructor(name,age){
      this.name=name;
      this.age=age;
      return validator(this,personValidator)
    }
  }

  const person=new Person('lilei',30);

  //person.name=23;
  person.name='jelly';
  //console.info(person);
}