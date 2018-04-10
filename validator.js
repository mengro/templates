import regExps from './regExps';
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
export const validate_deviceName = { validator: new Validator(regExps.deviceName).validator, trigger: 'blur'}
export const validate_phoneNumber = { validator: new Validator(regExps.phoneNumber).validator, trigger: 'blur'}
export const validate_email = { validator: new Validator(regExps.email).validator, trigger: 'blur'}
export const validate_ip = { validator: new Validator(regExps.ip).validator, trigger: 'blur'}
export const validate_name = { validator: new Validator(regExps.name).validator, trigger: 'blur'}
export const validate_port = { validator: new Validator(regExps.port).validator, trigger: 'blur'}
export const validate_path = { validator: new Validator(regExps.path).validator, trigger: 'blur'}
export const validate_version = { validator: new Validator(regExps.version).validator, trigger: 'blur'}
export const validate_int = { validator: new Validator(regExps.int).validator, trigger: 'blur'}
export const validate_number = { validator: new Validator(regExps.number).validator, trigger: 'blur'}
export const validate_configValue = { validator: new Validator(regExps.configValue).validator, trigger: 'blur'}
export const validate_logName = { validator: new Validator(regExps.logName).validator, trigger: 'blur'}
export const validate_password = { validator: new Validator(regExps.password).validator, trigger: 'blur'}
export const validate_userName = { validator: new Validator(regExps.userName).validator, trigger: 'blur'}

//common
export const validate_nameLength = { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' };
