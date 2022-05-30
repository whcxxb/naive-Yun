import service from '@/utils/axios'

//登录接口
export const userLogin = (params: any) => {
  return service({
    url: '/',
    method: 'post',
    data: params
  })
}
