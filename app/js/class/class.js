import { autobind, readonly, override, deprecate
  , suppressWarnings, lazyInitialize, nonconfigurable
  ,nonenumerable
} from 'core-decorators';

//使用 core-decorators 库的 autobind 方法绑定class原型上的 方法中的this 指向当前类的实例
{

  //单个方法绑定
  class Person {

    //如果不绑定this，那么在类外面调用该方法时
    // this指向方法所在的全局作用域（window）,函数作用域或未定义，如第二个函数
    @autobind
    go(){
      return this;
    }

    say(){
      return this;
    }
  }
  let person = new Person();
  let { go, say } = person;
  /*console.log( go() === person )
  console.log( say(), say() === person )*/

}

//@autobind 整个类中的普通方法 都绑定this
{
  @autobind
  class Person {
    constructor(){
      this.name='jelly'
    }

    go(){
      return this;
    }

    say(){
      return this;
    }
  }
  let person = new Person();
  let { go, say } = person;
  //console.log(Object.keys(person), Reflect.ownKeys(person))
  /*console.log( person, go() === person )
  console.log( say(), say() === person )*/

}

//@readonly 让类的实例属性 只读，不可修改属性值
{
  // 只能用于直接在类中写name='jelly';属性
  class Person {

    // @nonconfigurable //用于Object.defineProperty()方法改写属性时，报错，实际无效
    @readonly
    name='jelly';
  }
  let person = new Person();

  //改写name属性值时 报错
  //person.name = 'mike';

  //使用Object.defineProperty(obj,key,{value: obj[key]}); 设置属性时 不报错，但设置不成功
 /* Object.defineProperty(Person, 'name', {value: 'jack'});
  console.log(person.name)*/
}

//@override 用于子类函数 是否正确覆盖了 父类的函数
{
  class Person {

    say(){
      return 'parent say';
    }
  }

  class Child extends Person {
    //下面的方法写成says 也会提示没有正确覆盖父类的方法
    //@override
    sya(){
      return 'child say;';
    }
  }

}

//@deprecate 用于 调用方法时 在控制台警告提示方法将会被弃用
{
  class Parent {
    @deprecate
    say(){
      return 'say1';
    }

  }

  class Child extends Parent {

  }

  let child = new Child();
  // console.log(child.say())

}

//@suppressWarnings 用于 调用有 @decorator 修饰符的方法时 阻止在控制台警告提示方法将会被弃用
{
  class Parent {
    @deprecate
    say(){
      return 'say2';
    }

    @suppressWarnings
    goSay(){
       return this.say();
    }

  }

  let parent = new Parent();
  //调用方法时依然还会有警告提示
  //console.log(parent.goSay())

}

//@lazyInitialize 让类的实例 在调用属性时 属性值的方法才执行并赋值
{
  let say = () => {
    console.log('被调用了');
    return 111+999;
  }

  class Person {

    //只能用于直接在类中写 name=say() 的属性,
    // 如果不加此修饰符，即使不调用age属性，say()方法也会自动执行
    @lazyInitialize
    age=say();

  }
  let person = new Person();
  //console.log( person.age )

}

//@nonenumerable只能在Object.keys() 方法 取keys时
// 才取不到设置了 @nonenumerable 修饰符的属性
{
  class Person {
    @nonenumerable
    name = 'jelly';


    go=() => {
      return this;
    }
  }
  let person = new Person();
  //如果用Reflect.ownkeys()取对象的key 则@nonenumerable修饰符 无效
 /* for(let key of Object.keys(person)){
    console.log( key )
  }*/

}

//@readonly 让类的实例属性 只读，不可修改属性值
{
  // 只能用于直接在类中写name='jelly';属性
  class Person {

    // @nonconfigurable //用于Object.defineProperty()方法改写属性时，报错，实际无效
    @readonly
    name='jelly';
  }
  let person = new Person();

  //改写name属性值时 报错
  //person.name = 'mike';

  //使用Object.defineProperty(obj,key,{value: obj[key]}); 设置属性时 不报错，但设置不成功
  /* Object.defineProperty(Person, 'name', {value: 'jack'});
   console.log(person.name)*/
}

//class的定义
{
  class Parent{
    constructor (name='mukewang'){
      this.name=name
    }
  }

  //console.log(new Parent());
}

//类的继承
{
  class Parent{
    constructor (name='mukewang'){
      this.name=name
    }
  }

  class Child extends Parent{
    constructor (name='child'){
      super(name);  //一定要在子构造函数的顶部，否则会报错，相当于调用父类的构造函数
      this.type='extends';
    }
  }

  //console.log(new Child());
  //console.log(new Child('hi'));
}

//getter setter
{
  class Parent{
    constructor (name='mukewang'){
      this.name=name
    }

    get getName(){
      return 'mk!'+ this.name
    }

    set setName(value){
      this.name=value
    }
  }

  let p=new Parent();
  //console.log(p.getName,p.name);

  p.setName='hi';
  //console.log(p.getName,p.name);
}
//静态属性&方法，从类名上直接调用
{
  class Parent{
    constructor (name='mukewang'){
      this.name=name
    }

    static tell(){
      return 'tell'
    }
  }

  Parent.type='test'; //类的外面定义静态属性
  // console.log(Parent.type,Parent.tell())
}