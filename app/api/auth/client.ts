import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';

// applyCaseMiddleware:
// axiosで受け取ったレスポンスの値をスネークケース→キャメルケースに変換
// または送信するリクエストの値をキャメルケース→スネークケースに変換してくれるライブラリ

// ヘッダーに関してはケバブケースのままで良いので適用を無視するオプションを追加
export const BASE_URL = `${process.env.NEXTAUTH_URL}`;
export const BASE_REST_URL = `${BASE_URL}/api/v1`;
