import { MongoClient } from 'mongodb';
let uri=`mongodb://${process.env.HOSt}:${process.env.DBPORT}`

const client = new MongoClient(uri);
let conn;
try {
    conn=await client.connect();
} catch (e) {
    console.error(e);
}
let db = conn.db(process.env.DBPORT)
 export {db}