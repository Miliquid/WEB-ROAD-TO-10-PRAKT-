/**
 * Created by Miliquid on 12.04.2017.
 */
function d() {

    let text=document.getElementsByName("t")[0];
    let timeText=document.getElementsByName("tt")[0];
    let tt=timeText.value;
    let t=text.value;

    let obj={
        ds:["ds", "xz", "vc"],
        dds:["ds","xz","tog"]
    };
    let le=obj.ds.length;
    for (i=0; i<=le; ++i){
        if (obj.ds[i]== t){
            obj.ds[i] = tt;
                let arr=["Ключ=ds "+"; Значение="+t+";Было заменено на значение="+tt];
                alert(arr)
        }
        if (obj.dds[i]== t){

               let arr=["Ключ=dds"+"; Значение="+t+";Было заменено на значение="+tt];
               alert(arr);
            obj.dds[i] = tt;

        }
    }

    for (let i in obj){


        document.write("Ключ="+ i +"; Значение="+obj[i]+"<br>");

}

}