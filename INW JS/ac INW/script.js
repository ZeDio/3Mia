window.onload = () => {
  // esse codigo É UMA LOCURA
    header()
    banner()
    apresentacao()
    habi()
    forms()
    footer()
  };
  
  function header(){
    const lista = [
    {
      href : "#home",
      texto : "Home"
    },
    {
      href : "#sobre",
      texto : "sobre nos"
    },
    {
      href : "#habi",
      texto : "habilidades"
    },
    {
      href : "#contato",
      texto : "contato"
    },
    ]

    const header = document.querySelector("header")
    const heading = document.createElement("h1");
    const headingText = document.createTextNode("DL & JD");
    heading.appendChild(headingText);
    header.appendChild(heading)

    const ul = document.createElement("ul")
    ul.classList.add("item")
    header.appendChild(ul)
    
    lista.forEach(lista => {
      const li = document.createElement("li")
      const a = document.createElement("a")
      li.classList.add("itens")
      a.classList.add("link")
      a.href = lista.href
      const aText = document.createTextNode(lista.texto);
      a.appendChild(aText)
      li.appendChild(a)
      ul.appendChild(li)
    });
  }

  function banner(){
    const banners = [{
      id : "banner1",
      src : "https://avatars.githubusercontent.com/u/98829380?v=4",
      alt : "José Diogo",
      h2 : "José Diogo",
      small : "Front end / Designer UI/UX"
    },
    {
      id : "banner2",
      src : "./imgs/main/Image.jpg",
      alt : "Diego Leite",
      h2 : "Diego Leite",
      small : "Back End</"
    }]
    const main = document.querySelector("main")
    const section = document.createElement("section");
    section.classList.add("banner");
    section.setAttribute("id", "home")
    
    banners.forEach(banners => {
      const div = document.createElement("div");
      const img = document.createElement("img");
      const h2 = document.createElement("h2");
      const small = document.createElement("small");
      const br = document.createElement("br");
      const h2text = document.createTextNode(banners.h2);
      const smalltext = document.createTextNode(banners.small);
      
      div.setAttribute("id", banners.id)
      
      img.src = banners.src
      img.alt = banners.alt
      
      div.appendChild(img)
      small.appendChild(smalltext)
      h2.appendChild(h2text)
      h2.appendChild(br)
      h2.appendChild(small)
      div.appendChild(h2)
      section.appendChild(div)
    });
    main.appendChild(section);
  }

  function apresentacao(){
    const apres = [{
      classe : "apreJD",
      h2 : "Ola!!",
      p : "Eu me chamo José Diogo, sou um programador Front End e Designer. Tenho 16 anos, tenho algumas esperiencias com programação, e experiência como garçom. Estou no 3° ano do ensino médio técnico :D"

    },
    {
      classe : "apreDL" ,
      h2 : "Oii",
      p : "Eu me chamo Diego Leite, diferente do meu amigo a cima front end, sou mais da area de back end, sei progamar mais em JS e C#.."
    }]
    const main = document.querySelector("main")
    const section = document.createElement("section");
    section.classList.add("apresentacao");
    section.setAttribute("id", "habi")
    
    apres.forEach(apres => {
      const div = document.createElement("div")
      div.classList.add(apres.classe)
      const h2 = document.createElement("h2")
      const p = document.createElement("p")

      const h2text = document.createTextNode(apres.h2)
      const ptext = document.createTextNode(apres.p)

      h2.appendChild(h2text)
      p.appendChild(ptext)
      div.appendChild(h2)
      div.appendChild(p)
      section.appendChild(div)  
    });

    main.appendChild(section);
  }

  function habi(){
    const cards = [
      {
      h3 : "Front End",
      p : "Html / Css / Figma"
      },
      {
        h3 : "Back End",
        p : "JS / Java / SQL / Mongo DB"
      },
      {
        h3 : "Designer UI/UX / Figma",
        p : "Design"
      },
      {
        h3 : "Analista De Dados",
        p : "Banco De Dados"
      }  
    ]

    const main = document.querySelector("main")
    const section = document.createElement("section");
    section.setAttribute("id", "sobre")
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const h2text = document.createTextNode("Habilidades")

    section.classList.add("cards");
    section.setAttribute("id", "habi")
    div.classList.add("cards2")

    h2.appendChild(h2text)
    section.appendChild(h2)

    cards.forEach(cards => {
      const card = document.createElement("div")
      const h3 = document.createElement("h3")
      const p = document.createElement("p")
      card.classList.add("Card")

      const h3text = document.createTextNode(cards.h3)
      const ptext = document.createTextNode(cards.p)

      h3.appendChild(h3text)
      p.appendChild(ptext)
      card.appendChild(h3)
      card.appendChild(p)
      div.appendChild(card)
    });

    section.appendChild(div);
    main.appendChild(section);
  }

  function forms(){
    const inputs = 
    [
      {
        classe: "formGroup",
        for : "email",
        label : "mensagem",
        type : "email",
        id : "email",
        name : "Email",
        input : "input"
      },
      {
        classe: "formGroup",
        for : "mensagem",
        label : "mensagem",
        type : "mensagem",
        id : "mensagem",
        name : "Mensagem",
        input : "textarea"
      },
    ]


    const main = document.querySelector("main")
    const section = document.createElement("section");
    const form = document.createElement("form")
    const fundo = document.createElement("div")
    const img = document.createElement("div")
    const h2 = document.createElement("h2")
    const button = document.createElement("button")
    const h2text = document.createTextNode("Entre Em Contato")
    const btText = document.createTextNode("Entrar")

    fundo.classList.add("fundo");
    form.classList.add("formPart")
    img.classList.add("img");
    section.classList.add("forms");
    button.classList.add("button")

    section.setAttribute("id", "contato")
    form.setAttribute("action", "/cadastro")
    form.setAttribute("method", "post")
    button.setAttribute("type", "submit")

    h2.appendChild(h2text)
    form.appendChild(h2)
    
    inputs.forEach(inputs => {
      const formgroup = document.createElement("div")
      const label = document.createElement("label")
      const input = document.createElement(inputs.input)
      
      const labeltext = document.createTextNode(inputs.name)
      
      formgroup.classList.add(inputs.classe)
      label.setAttribute("for", inputs.for)
      input.setAttribute("type" , inputs.type)
      input.setAttribute("id" , inputs.id)
      input.setAttribute("name" , inputs.name)
      
      label.appendChild(labeltext)
      formgroup.appendChild(label)
      formgroup.appendChild(input)
      form.appendChild(formgroup)
    });
    
    button.appendChild(btText)
    form.appendChild(button)
    fundo.appendChild(img)
    fundo.appendChild(form)
    section.appendChild(fundo)
    main.appendChild(section)
  }

  function footer(){

    const sobreCada = [{
      h1text : "DJ",
      link : ["https://www.instagram.com/ze.dio/", "https://www.linkedin.com/in/jos%C3%A9-d-33634b280", "https://www.instagram.com/ze.dio/", "https://github.com/ZeDio"],
      nome : ["Instagram", "linkdin", "instagram", "github"],
      source :  ["./imgs/Footer/instagram.png", "./imgs/Footer/linkedin.png", "./imgs/Footer/whatsapp.png", "./imgs/Footer/github.png"]
    },
    {
      h1text : "DL",
      link : ["","","",""],
      nome : ["Instagram", "linkdin", "instagram", "github"],
      source :  ["./imgs/Footer/instagram.png", "./imgs/Footer/linkedin.png", "./imgs/Footer/whatsapp.png", "./imgs/Footer/github.png"]
    }
  ]

    const footer = document.querySelector("footer")
    for(i = 1; i <= 4; i++){
      const div = document.createElement("div")
      div.classList.add("wave")
      div.classList.add("wave"+[i])
      footer.appendChild(div)
    }
    sobreCada.forEach(sobreCada => {
      const div = document.createElement("div")
      const divimages = document.createElement("div")
      const h1 = document.createElement("h1")
      const small = document.createElement("small")

      const h1text = document.createTextNode(sobreCada.h1text)
      const smalltext = document.createTextNode("- Contato")
      div.classList.add("sobreCada")
      h1.classList.add("digitando-footer")

      small.appendChild(smalltext)
      h1.appendChild(h1text)
      h1.appendChild(small)
      div.appendChild(h1)

      for(i = 0; i < 4 ; i++){
      const a  = document.createElement("a")
      const img = document.createElement("img")

      img.classList.add("imgs-contato")

      a.href = sobreCada.link[i]
      img.src = sobreCada.source[i]
      img.alt = sobreCada.nome[i]

      a.appendChild(img)
      divimages.appendChild(a)
      }
      div.appendChild(divimages)
      footer.appendChild(div)
    });
  }

