const map = {
  202: '用户名已被占用',
  210: '用户名和密码不匹配',
  211: '找不到该用户',
  217: '无效用户名',
  unknown:'提交失败'
}

export default function({code}){
  return map[code] || map.unknown
}
