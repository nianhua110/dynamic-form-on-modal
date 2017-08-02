import request from '../utils/request';

export async function query() {
  return request('/api/ip');
}
export async function queryIpsByService(id) {
  return request('/api/ip/list/'+id);
}
