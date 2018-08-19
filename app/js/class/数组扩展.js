//Array的of()方法，把任意参数返回数组类型
{
  let arr = Array.of(1,'ok',{a:'hi'});
  //console.log(arr);

  let empty = Array.of();
  //console.log(empty);
}

//Array的from()方法把集合伪数组 转成数组,包含map()功能
{
  let pArr = document.querySelectorAll('p');
  pArr = Array.from(pArr);//不转成数组 也能遍历
  pArr.forEach(function (item) {
    //console.log(item.textContent);
  })
  //console.log(pArr.constructor===Array);

  /*console.log(Array.from([1,2,3],function (v) {
    return v*2
  }))*/

  /*console.log([12,21,23].map(function (v) {
    return v+1
  }));*/

}

//数组fill方法 替换数组元素 并返回
{
  // console.log([1,'q',3].fill(7));
  // console.log([1,'q',3].fill(7,1,3));
}

//数组的keys(),values(),entries()方法
{
  for(let i of [1,'ok',2]){
    // console.log(i)
  };

  for(let i of [1,'ok',2].keys()){
    // console.log(i)
  };

  for(let i of [1,'ok',2].values()){
    // console.log(i)
  };

  for(let [i,v] of [1,'ok',2].entries()){
    // console.log(i,v)
  };
}

//copyWithin(target,start,end)
//复制从start到end(不包括)结束的元素 到target索引位置
{
  // console.log([1,2,3,4,5].copyWithin(1,0,3))
}

//find(),findIndex()
{
  /*console.log([1,2,3,4,5].find(function (v) {
    return v>2; //只返回符合条件的第一个值
  }))*/

  /*console.log([1,2,3,4,5].findIndex(function (v) {
    return v>2
  }))*/
}

//数组的includes()
{
  // console.log([1,2,3,4,NaN].includes(NaN))
  // console.log([1,2,3,4,NaN].includes(5))
  //console.log([1, 2, [3, 4]].flat()); //Babel无法支持flat()方法

  //可以用 flatten() 方法,将数组拉平，不知道是哪个库支持的，可能是Babel库
  let arr = [1,[2,3],4,[5,[6,7,[8,9]]]];
  // console.log(arr.flatten(1), arr.flatten(Infinity))
}

{

}