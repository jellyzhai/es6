//数组解构赋值
/*【统一在解构赋值时 先使用let||const声明,数组不声明 不会报错，对象不声明 会报错】*/
{

  //可以不用声明a,b变量 在解构赋值时 就声明+赋值了
  let [a,b]=[1,2];

  //console.log(a,b)
}
//扩展数组解构赋值
{

  let [a,b,...rest]=[1,2,3,4,5,6];

  //console.log(a,b,rest)
}
//对象解构赋值
{
  //在对象解构赋值时，一定要使用let || const先声明
  let {a,b}={a:1,b:2};

  //console.log(a,b)
}

//默认值
{
  let [a,b,c=3]=[1,2];

  //console.log(a,b,c)
}

//使用场景：变量交换
{
  let a=1,b=2;
  [a,b]=[b,a]

  //console.log(a,b)
}

//函数返回数组 直接赋值给变量
{
  function f() {
    return [1,2]
  };

  let [a,b]=f();

  //console.log(a,b)
}

//选择接收返回值
{
  function f() {
    return [1,2,3,4,5]
  };

  let [a,,,b]=f();

  //console.log(a,b)
}

{
  function f() {
    return [1,2,3,4,5]
  };

  let [a,,...b]=f();

  //console.log(a,b)
}

//对象解构赋值&默认值，数组也可以有默认值
{
  let o={p:21,q:true};
  let {p,q}=o;
  //console.log(p,q)
}

{
  let o={p:21};
  let {p=1,q=false}=o;
  //console.log(p,q)
}
//json对象解构赋值
{
  let data={
    title:'es6',
    dec:[{
      title:'inner',
      desc:'ok'
    }]
  }

  let {title:eTitle,dec:[{title:iTitle}]}=data;

  //console.log(eTitle,iTitle)
}


