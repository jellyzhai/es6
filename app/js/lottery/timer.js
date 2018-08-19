
  class Timer{
    countdown(end,update,handle){
      const self = this;
      const now = new Date().getTime();

      if(now-end>0){
        handle.call(self)
      }else {
        let lastTime = end - now;
        const d_ms = 24*60*60*1000;
        const h_ms = 60*60*1000;
        const m_ms = 60*1000;
        const ms = 1000;

        let d = Math.floor(lastTime/d_ms);
        let h = Math.floor((lastTime-d*d_ms)/h_ms);
        let m = Math.floor((lastTime-d*d_ms-h*h_ms)/m_ms);
        let s = Math.floor((lastTime-d*d_ms-h*h_ms-m*m_ms)/ms);

        let r = [];
        if(d>0) r.push(`<em>${d}</em>天`);
        if(h>0) r.push(`<em>${h}</em>时`)
        if(m>0) r.push(`<em>${m}</em>分`)
        if(s>0) r.push(`<em>${s}</em>秒`)

        update.call(self,r.join(''));
        setTimeout(function () {
          self.countdown(end,update,handle)
        },1000)
      }
    }
  }

  /*let end = new Date('2018-07-17');

  let timer = new Timer();
  //timer.countdown(end,update,handle);
  function update(ele) {
    // document.body.appendChild(ele);
    console.log(ele)
  }

  function handle() {
    console.log('end')
  }*/

  export default Timer


