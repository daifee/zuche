/**
 * http请求实例
 */
import axios from 'axios';

export const zuzuche = axios.create({
  baseURL: 'https://m.zuzuche.com/',
  timeout: 3000,
  headers: {
    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E304 MicroMessenger/6.5.14 NetType/WIFI Language/zh_CN'
  }
});


global.zuzuche = zuzuche;
