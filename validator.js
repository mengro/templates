class Validator {
    constructor(params){
        this.reg = params.reg;
        this.message = params.message;
    }
    validator = (rule, value, callback) => {
        if (!this.reg.test(value)) {
            callback(new Error(this.message));
        } else {
            callback();
        }
    };
}
export const ip = new Validator({
    reg: /^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/,
    message: '请输入正确的ip地址'
})
export const name = new Validator({
    reg: /^[\w\W]{1,30}$/,
    message: '请输入长度为1-30位'
})
export const port = new Validator({
    reg: /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/,
    message: '请输入正确的端口号'
})
export const path = new Validator({
    reg: /^[^\\]+$/,
    message: '请输入正确的路径'
})
export const version = new Validator({
    reg: /^([1-9][0-9]*)$/,
    message: '版本号必须为纯数字'
})
export const int = new Validator({
    reg: /^[\d]+$/,
    message: '只能输入数字'
})
export const number = new Validator({
    reg: /^\d+(\.\d+)?$/,
    message: '只能输入数字'
})
export const configValue = new Validator({
    reg: /^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/
})
export const logName = new Validator({
    reg: /^[A-Za-z0-9_]{6,30}$/,
    message: '请输入6-30位的字母、数字、下划线的组合'
})
export const password = new Validator({
    reg: /^[\w\W]{6,18}$/,
    message: '请输入6-18位的字母、数字、字符的组合'
})
export const userName = new Validator({
    reg: /^[\u4E00-\u9FA5A-Za-z0-9-_\.;#\(\)（）\[\]]{1,50}$/,
    message: '名称输入不合法'
})
export const deviceName = new Validator({
    reg: /^[\u4E00-\u9FA5A-Za-z0-9-_]{1,50}$/,
    message: '请输入字母数字下划线的组合'
})
export const phoneNumber = new Validator({
    reg: /^1[0-9]{10}$/,
    message: '请输入合法的手机号码'
})
export const email = new Validator({
    reg: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    message: '请输入合法的邮箱地址'
})
