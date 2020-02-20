var url=window.location,
domain=window.encodeURIComponent(url.protocol+"//"+url.hostname+(url.port?":"+url.port:"")),
  i=document.createElement("iframe");
  i.setAttribute("id","oncframe"),
  i.style.border="0px",
  i.width="100%",
    i.height="0px",i.setAttribute("src","https://delitosmexico.onc.org.mx/mapa/ciudad-de-mexico?unit=folders&indicator=researchFoldersRate&period=12-2019&group=month&crime=1100&domain="+domain),
      document.getElementById("onc-graph").appendChild(i),
        window.addEventListener("message",e=>{
          document.getElementById("oncframe").height=e.data},!1);