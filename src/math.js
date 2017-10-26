module.exports={
  add:(...args)=>{
      //下面这个相当于去执行函数了,上面那个是函数声明
      return args.reduce((prev,curr)=>{
          return prev+curr;
      })
  },
  mul:(...args)=>{
      return args.reduce((prev,curr)=>{
         return prev*curr;
      });
  }
};


