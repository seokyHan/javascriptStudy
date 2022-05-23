 //인코딩:디코딩방식 -> escape:unescape, endcodeURI:decodeURI encodeURIComponent:decodeURIComponent
    
 const request = {}; //네임스페이스

 request.getParameter = function(p_name){
     //안전장치
     if(location.href.indexOf('?') == -1){
         return null;
     }

     let queryString = location.href.split('?')[1];
     let params = queryString.split('&');
     for(let i=0; i<params.length; i++){
         let name = params[i].split('=')[0];
         let value = params[i].split('=')[1];
         if(name === p_name){
             return decodeURIComponent(value);
         }
     }

     return null;
 }

 request.getParameterValues = function(p_name){
     //안전장치
     if(location.href.indexOf('?') == -1){
         return null;
     }

     const queryString = location.href.split('?')[1];
     const params = queryString.split('&');
     const result = []; // 여러개를 담을 빈 베열을 준비
     for(let i=0; i<params.length; i++){
         const name = params[i].split('=')[0];
         const value = params[i].split('=')[1];
         if(name === p_name){
             result.push(decodeURIComponent(value));
         }
     }

     //읽어온 값이 없는경우
     if(result.length == 0){
         return null;
     }

     return result;
 }

 //문법적으로 오류는 없지만 실행은 안됨 this를 사용하면 문제가 됨
//  const out = {};
//  out.print = document.write;
 // out.print("hihi");
 
 const out = {};
 out.print = document.write.bind(document);
//  out.print("hihi");