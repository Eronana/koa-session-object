const randomstring = require('randomstring');
const sessions = {};

const genSid = ()=>{
  const sid = randomstring.generate();
  if(sessions in sessions) return genSid();
  sessions[sid] = {};
  return sid;
};

module.exports = options => async (ctx,next) => {
  let sid = ctx.cookies.get(options.key);
  if(!sid) ctx.cookies.set(options.key, sid = genSid(), options);
  ctx.session = sessions[sid];
  await next();
};
