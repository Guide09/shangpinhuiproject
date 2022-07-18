import { v4 as uuidv4 } from 'uuid'

// 要生成一个随机的字符串 不能变 持久存储
export const GETUUID = () => {
    // 先从本地存储是否有
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    // 如果没有
    if (!uuid_token) {
        // 生成一个
        uuid_token = uuidv4();
        localStorage.setItem('UUIDTOKEN', uuid_token)

    }
    // 切记返回值
    return uuid_token
}