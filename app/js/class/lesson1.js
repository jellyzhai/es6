function test() {
  for(let i=1; i<3; i++){
    console.log(i);
  }

  console.log(i);
}

//i有自己的块作用域 第五行的块作用域中么有定义i
//test()

function last(){
  const PI=3.1415926;
  const k={
    a:1
  }
  k.b=3;

  console.log(PI,k);
}

//常量和变量都不可以重复声明，
//last();