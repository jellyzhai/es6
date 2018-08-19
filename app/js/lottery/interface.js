import $ from 'jquery';

class Interface{
  //获取遗漏数据,issue:期，号；omit：遗漏
  getOmit(issue){
    let self = this;

    return new Promise((resolve,reject)=>{
      $.ajax({
        url: '/get/omit',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: (res)=>{
          self.setOmit(res.data);
          resolve.call(self,res)
        },
        error: (err)=>{
          reject.call(err)
        }
      })
    })
  }

  //获取开奖号码
  getOpenCode(issue){
    let self = this;

    return new Promise((resovle,reject)=>{
      $.ajax({
        url: '/get/opencode',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: (res)=>{
          self.setOpenCode(res.data);
          resolve.call(self.res)
        },
        error: (err)=>{
          reject.call(err)
        }
      })
    })
  }

  //获取状态
  getState(issue){
    let self = this;

    return new Promise((resovle,reject)=>{
      $.ajax({
        url: '/get/state',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: (res)=>{
          resolve.call(self.res)
        },
        error: (err)=>{
          reject.call(err)
        }
      })
    })
  }
}

export default Interface