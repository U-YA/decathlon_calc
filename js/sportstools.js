//maleEvents
male100 = [25.4347,18,1.81];
male200 = [5.8425,38,1.81];
male400 = [1.53775,82,1.81];
male1500 = [0.03768,480,1.85];
male110H = [5.74352,28.5,1.92];
maleHJ = [0.8465,75,1.42];
malePV = [0.2797,100,1.35];
maleLJ = [0.14354,220,1.40];
maleSP = [51.39,1.5,1.05];
maleDT = [12.91,4,1.1];
maleJT = [10.14,7,1.08];
mdformula= [male100,maleLJ,maleSP,maleHJ,male400,male110H,maleDT,malePV,maleJT,male1500];
moformula= [male100,maleLJ,maleSP,male400,male110H,maleJT,maleHJ,male1500];
mtformula= [male110H,maleSP,maleHJ,male400];
//femaleEvents
fm200 = [4.99087,42.5,1.81];
fm800 = [0.11193,254,1.88];
fm100H = [9.23076,26.7,1.835];
fmHJ = [1.84523,75,1.348];
fmLJ = [0.188807,210,1.41];
fmSP = [56.0211,1.5,1.05];
fmJT = [15.9803,3.8,1.04];
fhformula= [fm100H,fmHJ,fmSP,fm200,fmLJ,fmJT,fm800];
ftformula= [fm100H,fmSP,fmHJ,fm200];
function tracks(mark,a,b,c){
  if(mark<10000){
  sec=mark*0.01;
  }else{
  sec=Math.floor(mark*0.0001)*60+(mark % Math.pow(10, 4))*0.01;
  }
  if(mark!=0){
    return Math.floor(a*Math.pow((b-sec),c));
  }else{
    return 0;
  }
}
function jumps(mark,a,b,c){
    if(mark!=0){
    return Math.floor(a*Math.pow((mark-b),c));
  }else{
    return 0;
  }
}
function throws(mark,a,b,c){
  mt=mark*0.01;
  if(mark!=0){
    return Math.floor(a*Math.pow((mt-b),c));
  }else{
    return 0;
  }
}
function decaCal(e){
  deca = [];
  evtGenre = [];
  evtName = [];
  total = 0;
      var id =  $(document.getElementById(e+'Total'));
          $('#'+e+' input').each(function(){
            if($(this).val().match(/[^0-9]+/)){ 
              id.text("Error(半角数字のみを入力して下さい。)");
              exit;
            }else{
              deca.push($(this).val());
              evtGenre.push($(this).attr('data-event'));
              evtName.push($(this).attr('data-name'));
              //alert(evt+deca);
            }
          });
        switch(e){
          case 'maledeca':
            id.html("十種競技&#13;");
            for (i=0;i<10;i++) {
              switch(evtGenre[i]){
                case 'track':
                  point = Number(tracks(deca[i],mdformula[i][0],mdformula[i][1],mdformula[i][2]));
                break;
                case 'jump':
                  point = Number(jumps(deca[i],mdformula[i][0],mdformula[i][1],mdformula[i][2]));  
                break;
                case 'throw':
                  point = Number(throws(deca[i],mdformula[i][0],mdformula[i][1],mdformula[i][2]));  
                break;
                default:
                id.html("errorでした、正しい数値を入力して下さい。");
                exit;
                break;    
              }
              if(isNaN(point)){
                    id.html(evtName[i]+"でerrorでした、正しい数値を入力して下さい。");
                    exit;    
              }else{
                    total += point; 
                    id.append(evtName[i]+point+" - "+total+"&#13;");
              }                            
            }
          break;
          case 'maleocta':
            id.html("八種競技&#13;");
            for (i=0;i<8;i++) {
              switch(evtGenre[i]){
                case 'track':
                  point = Number(tracks(deca[i],moformula[i][0],moformula[i][1],moformula[i][2]));
                break;
                case 'jump':
                  point = Number(jumps(deca[i],moformula[i][0],moformula[i][1],moformula[i][2]));  
                break;
                case 'throw':
                  point = Number(throws(deca[i],moformula[i][0],moformula[i][1],moformula[i][2]));  
                break;
                default:
                id.html(evtName[i]+"でerror(1)でした、正しい数値を入力して下さい。");
                exit;
                break;    
              }
              if(isNaN(point)){
                    id.html(evtName[i]+"でerror(2)でした、正しい数値を入力して下さい。");
                    exit;    
              }else{
                    total += point; 
                    id.append(evtName[i]+point+" - "+total+"&#13;");
              }                            
            }
          break;
          case 'maletetra':
            id.html("男子四種競技&#13;");
            for (i=0;i<4;i++) {
              switch(evtGenre[i]){
                case 'track':
                  point = Number(tracks(deca[i],mtformula[i][0],mtformula[i][1],mtformula[i][2]));
                break;
                case 'jump':
                  point = Number(jumps(deca[i],mtformula[i][0],mtformula[i][1],mtformula[i][2]));  
                break;
                case 'throw':
                  point = Number(throws(deca[i],mtformula[i][0],mtformula[i][1],mtformula[i][2]));  
                break;
                default:
                id.html(evtName[i]+"でerror(1)でした、正しい数値を入力して下さい。");
                exit;
                break;    
              }
              if(isNaN(point)){
                    id.html(evtName[i]+"でerror(2)でした、正しい数値を入力して下さい。");
                    exit;    
              }else{
                    total += point; 
                    id.append(evtName[i]+point+" - "+total+"&#13;");
              }                            
            }
          break;
          case 'fmhepta':
            id.html("七種競技&#13;");
            for (i=0;i<7;i++) {
              switch(evtGenre[i]){
                case 'track':
                  point = Number(tracks(deca[i],fhformula[i][0],fhformula[i][1],fhformula[i][2]));
                break;
                case 'jump':
                  point = Number(jumps(deca[i],fhformula[i][0],fhformula[i][1],fhformula[i][2]));  
                break;
                case 'throw':
                  point = Number(throws(deca[i],fhformula[i][0],fhformula[i][1],fhformula[i][2]));  
                break;
                default:
                id.html(evtName[i]+"でerror(1)でした、正しい数値を入力して下さい。");
                exit;
                break;    
              }
              if(isNaN(point)){
                    id.html(evtName[i]+"でerror(2)でした、正しい数値を入力して下さい。");
                    exit;    
              }else{
                    total += point; 
                    id.append(evtName[i]+point+" - "+total+"&#13;");
              }                            
            }
          break;
          case 'fmtetra':
            id.html("女子四種競技&#13;");
            for (i=0;i<4;i++) {
              switch(evtGenre[i]){
                case 'track':
                  point = Number(tracks(deca[i],ftformula[i][0],ftformula[i][1],ftformula[i][2]));
                break;
                case 'jump':
                  point = Number(jumps(deca[i],ftformula[i][0],ftformula[i][1],ftformula[i][2]));  
                break;
                case 'throw':
                  point = Number(throws(deca[i],ftformula[i][0],ftformula[i][1],ftformula[i][2]));  
                break;
                default:
                id.html(evtName[i]+"でerror(1)でした、正しい数値を入力して下さい。");
                exit;
                break;    
              }
              if(isNaN(point)){
                    id.html(evtName[i]+"でerror(2)でした、正しい数値を入力して下さい。");
                    exit;    
              }else{
                    total += point; 
                    id.append(evtName[i]+point+" - "+total+"&#13;");
              }                            
            }
          break;
        }
          id.append("合計 : "+total);
    }