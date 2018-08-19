//二进制、八进制数,字母大小写都可以
{
  // console.log('0b开头表示二进制数，转换为10进制：',0b01);
  // console.log('0o开头表示八进制数，转换为10进制：',0o01234567===342391);
}

//已有api转移到Number上
{
  // console.log(Number.isFinite(0));
  // console.log(Number.isFinite(1/0));
  // console.log(Number.isFinite('a'));
  // console.log(Number.isFinite(NaN));
  // console.log(Number.isNaN(NaN));
  // console.log('Number.isNaN("a"):'
  // console.log(Number.isNaN(1));
  // console.log(Number.isNaN(1/0));
  // console.log('NaN==NaN:',NaN==NaN);
  // console.log('typeof(NaN):',typeof(NaN));
}

//判断一个数是不是整数，参数必须是一个number
{
  // console.log(Number.isInteger(1));
  // console.log(Number.isInteger(1.0));
  // console.log(Number.isInteger(1.1));
  // console.log(Number.isInteger('1.1'));
}

//判断一个数是不是安全数
{
  // console.log('Number.MAX_SAFE_INTEGER:',Number.MAX_SAFE_INTEGER,'Number.MIN_SAFE_INTEGER:',Number.MIN_SAFE_INTEGER)
  // console.log(Number.isSafeInteger(1))
  // console.log(Number.isSafeInteger(10000000000000000))
}

//取数值的整数部分
{
  // console.log(Math.trunc(2.01));
  // console.log(Math.trunc(2.91));
}

//判断正数负数和0
{
  // console.log(Math.sign(-23));
  // console.log(Math.sign(0));
  // console.log(Math.sign(23));
  // console.log(Math.sign('23'));
  // console.log(Math.sign('ok'));
}

//求一个数的立方根
{
  // console.log(Math.cbrt(-1));
  // console.log(Math.cbrt(8));
}
