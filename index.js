const randomstring = require('randomstring');
const sessions = {};

const getSid = ()=>{
  const sid = randomstring.generate();
  if(sessions in sessions) return getSid();
  return sid;
};

module.exports = options => async (ctx,next) => {
  const key = options.key || 'koa:sess';
  let sid = ctx.cookies.get(key);
  if(!sid) ctx.cookies.set(key, sid = getSid(), options);
  if(!(sessions[sid] instanceof Object)) sessions[sid] = {};
  ctx.session = sessions[sid];
  await next();
};
