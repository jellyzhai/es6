//decorators 修饰器是一个函数，用于修饰类的属性的行为状态
{
  let decorator = function (target,name,descriptor) { //修饰类名、属性名、描述对象
    descriptor.writable = false;
    return descriptor;
  }

  class Test{
    @decorator //修饰符在类里面

    time(){ //类中函数的简写方式
      return '2018-07-15'
    }
  }

  let test = new Test();
  /*test.time = function () {
    return 'modified'
  }

  console.log(test.time())*/
}

//修饰符在类外部
{

  let type = function (target,name,desc) {
    target.type = 'hi' //给类添加静态属性
  }

  @type  //修饰器后面不能加标点符号
  class Test{

  }

  //console.log(Test.type);
  //第三方修饰器的js库：core-decorators; cnpm install core-decorators

}

//埋点
{
  let log = (type) => {
    return (target,name,desc) =>{
      let src_method = desc.value;
      desc.value = (...arg) => {
        src_method.apply(target,arg);
        console.log(`log ${type}`)
      }
    }
  }

  class AD{
    @log('show')
    show(){
      console.log('ad is show')
    };

    @log('click')
    click(){
      console.log('AD is click')
    }
  }

  let ad = new AD();
  // ad.show();
  // ad.click();
}