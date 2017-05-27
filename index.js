const randomstring = require('randomstring');
const sessions = {};

const getSid = ()=>{
  const sid = randomstring.generate();
  if(sessions in sessions) return getSid();
  return sid;
};

module.exports = options => async (ctx,next) => {
  let sid = ctx.cookies.get(options.key);
  if(!sid) ctx.cookies.set(options.key, sid = getSid(), options);
  ctx.session = sessions[sid];
  await next();
};
