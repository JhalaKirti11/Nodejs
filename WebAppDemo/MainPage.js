import http from "http";
import url, {fileURLToPath} from "url";
import fs from "fs";
import path from "path";

http.createServer((request, response)=>{
    const parsedUrl = url.parse(request.url, true);
    let __filename = fileURLToPath(import.meta.url);
    let __dirname = path.dirname(__filename);
    console.log(parsedUrl.pathname);

    if((parsedUrl.pathname == "/"|| parsedUrl.pathname=="/home")&& request.method=="GET"){
        try{
            let homePagepath = path.join(__dirname,"home.html");
            let data = fs.readFileSync(homePagepath);
            response.write(data);
            response.end();
        
        }
        catch(err){
            console.log(err);
            response.end("no work!");
        }
    }
    else if(parsedUrl.pathname.match("\.jpg$")){
        let imgpath = path.join(__dirname, parsedUrl.pathname);
        let readStream = fs.createReadStream(imgpath);
        readStream.pipe(response);
    }
    else if(parsedUrl.pathname.match("\.html$")){
        let imgpath = path.join(__dirname, parsedUrl.pathname);
        let readStream = fs.createReadStream(imgpath);
        readStream.pipe(response);
    }

}).listen(3555,()=>{console.log("server started")});
