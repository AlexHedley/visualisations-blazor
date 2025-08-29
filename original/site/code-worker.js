self.onmessage=async function(q){let{code:w,id:f}=q.data;try{let g=new Function(w);self.postMessage({type:"onStart",id:f});let z=performance.now();await g();let A=performance.now();self.postMessage({type:"onComplete",id:f,executionTime:A-z})}catch(g){self.postMessage({type:"onError",id:f,error:g.message||"Unknown error"})}};

//# debugId=0AD1411CBA30DF9164756E2164756E21
//# sourceMappingURL=./code-worker.js.map
