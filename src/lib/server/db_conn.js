
// (공통) DB 연결 ( 매우 중요, 클라이언트에 노출되지 않아야함 )
import pgPromise from 'pg-promise';

const db = pgPromise()({
    host: '180.228.248.76',//'3.37.42.132',
    port: 4040,
    database: 'auth',
    user: 'hicor',
    password: 'dlacodnr1!'
});

export default db;