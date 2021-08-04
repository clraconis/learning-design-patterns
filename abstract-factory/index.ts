import { setEnv } from './src/env';
import Client from './src/Client';

const client1: Client = new Client();
client1.doSomething();

setEnv('PM');

const client2: Client = new Client();
client2.doSomething();
