const {extname} = require('path');
const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  if (extname(ctx.path) === '' && ctx.path !== '/') {
    ctx.path = ctx.path + '.html';
  }
  await next();
});

app.use(serve('pages'));

app.listen(parseInt(process.env.PORT, 10) || 3000);
