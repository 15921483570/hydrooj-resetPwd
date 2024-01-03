/* resetPwd.ts 2024.1.3 by Bowen404 */
import Schema from 'schemastery';
import {UserModel} from 'hydrooj';  


async function _user(
    uid: number,
    report: Function,
) {
    const udoc = await UserModel.getById('system', uid);
    if (!udoc) return;
    report({ message: `user ${udoc._id} ${udoc.uname} password has been reset to abcdef` });
    await UserModel.setPassword(uid, "abcdef");
}

export const apply = (ctx) => ctx.addScript(
    'resetPassword', '输入uid, 密码重置为: abcdef',
    Schema.number(), // 类型校验
    async (
        user = null,  // 通过类型校验之后把参数放到这个变量里
        report) => {
        if (user) await _user(user, report);
        return true;
    },
);