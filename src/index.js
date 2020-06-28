import 'dotenv/config';
//const k8s = require('locakKubenetesClient');
import * as k8s from 'locakKubenetesClient';

console.log('starting.....');

console.log (k8s);

console.log(process.env.SOME_ENV_VARIABLE);

const kc = new k8s.KubeConfig();
kc.loadFromDefault();


const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

k8sApi.listNamespacedPod('default').then((res) => {
    console.log(res.body);
});
