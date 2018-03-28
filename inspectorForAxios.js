/**
 * 统一处理请求返回状态，统一处理loading
 */
import axios from 'axios';
import { Loading, Message } from 'element-ui';
let loading;
const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};
const getResultType = (statusCode, method) => {
    let resultType;
    if (status >= 200 && status < 300 && method !== 'get') {
        resultType = 'success';
    } else if (status >= 300 && status < 400) {
        resultType = 'info'
    } else if (status > 400) {
        resultType = 'error'
    }
    return resultType
}
const newWorkStatusCheck = (status, method) => {
    let resultType = getResultType(status, method);
    if (resultType) {
        const options = {
            message: codeMessage[status],
            type: resultType,
        }
        Message(options);
    }
}
const requestResultCheck = ({ code, errMsg, success }, method) => {
    let resultType = success !== false ? (method === 'get' ? '' : 'success') : 'error';
    if (resultType) {
        const options = {
            message: errMsg,
            type: resultType,
        }
        Message(options);
    }
}

export default function inspectAxios(){
    // Add a request interceptor
    axios.interceptors.request.use(function (options) {
        // Do something before request is sent
        loading = Loading.service({
            lock: true,
            text: 'Loading',
            target: 'body',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.1)'
        });
        const defaultOptions = {
            credentials: 'include',
        };
        const newOptions = { ...defaultOptions, ...options };
        if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
            if (!(newOptions.body instanceof FormData)) {
                newOptions.headers = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json; charset=utf-8',
                    ...newOptions.headers,
                };
                newOptions.body = JSON.stringify(newOptions.body);
            } else {
                // newOptions.body is FormData
                newOptions.headers = {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    ...newOptions.headers,
                };
            }
        }
        newOptions.url = '/v1.0' + newOptions.url;
        return newOptions;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        loading && loading.close();
        const {method} = response.config;
        // Do something with response data
        const { status } = response;
        newWorkStatusCheck(status, method);
        requestResultCheck(response, method);
        return response.data.data;
    }, function (error) {
        loading && loading.close();
        const { status } = error.response;
        const options = {
            message: codeMessage[status],
            type: 'error',
        }
        Message(options);
        // Do something with response error
        return Promise.reject(error);
    });
}
