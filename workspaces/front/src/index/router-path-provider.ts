
let actualPath = "";
const subscriptors: ((path:string) => void)[] = [];

export function injectPath(path: string){
    actualPath = path;
    subscriptors.forEach(handlers => {
        handlers(path);
    });
}

export function subscribeToPath(handler: (path: string)=>void){
    subscriptors.push(handler);
}

export function getActualPath(){
    return actualPath;
}