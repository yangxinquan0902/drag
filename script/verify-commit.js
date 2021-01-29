const msgPath = process.env.HUSKY_GIT_PARAMS;

const msg = require('fs')
    .readFileSync(msgPath, 'utf-8')
    .trim();


/*
    // 示例1
    fix(global):修复checkbox不能复选的问题

    // 示例2 下面圆括号里的 common 为通用管理的名称
    fix(common): 修复字体过小的BUG，将通用管理下所有页面的默认字体大小修改为 14px

    // 示例3
    fix: value.length -> values.length
*/
// 提前定义好 commit message 的格式，如果不符合格式就退出程序。
const commitRE = /^(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
    console.error(`
        不合法的 commit 消息格式。
        请查看 git commit 提交规范：https://github.com/woai3c/Front-end-articles/blob/master/git%20commit%20style.md
    `);

    process.exit(1);
}