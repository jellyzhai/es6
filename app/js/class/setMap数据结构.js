//set集合数据类型的size长度,可以存储任何数据类型
{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);

  //console.log(list,list.constructor,list.size);
}

//直接使用,去重
{
  let arr=[1,2,3,1,2,'3'];
  let list = new Set(arr);

  //console.log(list);
}

//set的add delete clear has方法
{
  let arr=['add','delete','clear','has'];
  let list = new Set(arr);

  list.add('plus');
  //console.log(list);

  list.delete('add');
  //console.log(list);

  //console.log(list.has('has'));

  list.clear();
  //console.log(list);
}

//set遍历
{
  let arr=['add','delete','clear','has'];
  let list = new Set(arr);

  /*for(let k of list.keys()){
    console.log(k)
  }

  for(let v of list.values()){
    console.log(v)
  }

  for(let [k,v] of list.entries()){
    console.log(k,v)
  }

  for(let v of list){
    console.log(v)
  }*/

  /*list.forEach(function (v) {
    console.log(v)
  })*/
}

//WeakSet只能存储对象(数组，对象)，不能遍历，没有clear方法,弱引用
{
  let o={a:1};
  let list=new WeakSet();

  list.add(o);
  //console.log(list);

  list.add([1,2]);
  //console.log(list);

  list.delete(o);
  //console.log(list);

  //console.log(list.has(o));

  /*list.clear();
  console.log(list);*/

  /*for(let v of list){
    console.log(v)
  }*/
}

//map对比object，不同的是map的key可以是任意类型,object只能是字符串或者Symbol
{
  let m=new Map();
  let arr=[2,1];

  m.set(arr,'a');
  //console.log(m,m.get(arr))
}

//快捷使用
{
  let m=new Map([['a',12],['b',23]]);
  // console.log(m,m.size,m.get('a'));
  //
  // console.log(m.delete('a'),m);
  //
  // console.log(m.clear(),m)
}

//WeakMap的key只能是对象
{
  let wm=new WeakMap();
  let o={a:1};

  wm.set(o,22);
  //console.log(wm.get(o))
}

//map set array object的增删改查对比
{//增
  let m=new Map();
  let s=new Set();
  let o={};
  let arr=[];
  let ot={'q':1};

  m.set('q',1);
  o['q']=1;
  s.add(ot);
  arr.push(ot);

  //console.info('m:',m,'o:',o,'s:',s,'arr:',arr);

  //查
  let mExist=m.has('q');
  let sExist=s.has(ot);
  let oExist='q' in o; //原来的命令式查询方法
  let oExistNew = Reflect.has(o,'q'); //未来建议使用的查询属性方法
  let arrExist=arr.includes(ot); //find返回符合条件的元素
  //let arrExist=Boolean(arr.find(i=>i.q)); //find返回符合条件的元素

  //console.info('m:',mExist,'o:',oExist,'s:',sExist,'arr:',arrExist);

  //改
  m.set('q',2);
  o.q=2;
  s.forEach(i=>i.q?i.q=2:'');
  arr.forEach(i=>i.q?i.q=2:'');

  //console.info('m:',m,'o:',o,'s:',s,'arr:',arr);

  //取
  let sv;
  for(let v of s){sv=v.q};
  //console.info('m:',m.get('q'),'o:',o.q,'s:',sv,'arr:',arr.find(i=>i.q).q);

  //删
  m.delete('q');
  s.forEach(i=>i.q?s.delete(i):'');
  delete o.q; //原来命令式的删除对象属性的操作
  Reflect.deleteProperty(o,'q'); //未来建议使用的对象删除属性方法
  let arrIndex=arr.findIndex(i => {i.q});
  arr.splice(arrIndex,1)


  //console.info('m:',m,'o:',o,'s:',s,'arr:',arr);
}