helps = ['whoami','theme','date','echo','sudo','repo','clear','email','projects','neofetch','challenge']
cmdsin = []
let i=-1;




const terminal = document.getElementsByClassName("terminal")[0];
const audioel = document.getElementById("audio");

    
function handleCommand(cmd,outputbox) {
    if(/^echo [^\s].*/.test(cmd)){
      const match = cmd.match(/^echo\s+(.*)/);
      const message = match ? match[1] : "";
      renderEcho(cmd,outputbox,message);
    }else{
    switch (cmd) {
      case "help":
        help(outputbox);
        createPrompt();
        break;
      case "whoami":
        whoami(outputbox);
        createPrompt();
        break;
      case "theme":
        changeTheme(localStorage.getItem("theme"));
        createPrompt();
        break;
      case "date":
        renderDate(outputbox);
        break;
      case "neofetch":
        renderNeo(outputbox);
        break;
      case "echo":
        renderEcho(cmd,outputbox);
        break;
      case "sudo":
        renderSudo(outputbox);
        break;
      case "repo":
        renderRepo(outputbox);
        break;
      case "clear":
        terminal.innerHTML='<br><br>';
        createPrompt();
        break;
      case "email":
        emailFn(outputbox);
        break;
      case "projects":
        renderProjects(outputbox);
        break;
      case "challenge":
        renderChallenge(outputbox);
        break;
      default:
        invalidCmd(cmd,outputbox);
        createPrompt();
        break;
    }}

}



function help(outputbox){
  console.log("HELP");
  const text1 = document.createElement("span");
  text1.className="helpcommands";
  text1.innerHTML = "Available commands: " + helps.join(", ");
  outputbox.appendChild(text1);
}

function renderEcho(cmd,outputbox,message){
  const text = document.createElement("span");
  text.innerText = message;
  text.classList.add("helpcommands");
  outputbox.append(text);
  createPrompt();
}


function renderChallenge(outputbox){
  console.log("challenge")
  console.log("Do you know where the webcrawlers are banned?");
  const space1 = document.createElement("div");
  space1.classList.add("pass");
  const text = document.createElement("span");
  text.innerText = "Enter password: ";
  const input = document.createElement("input")
  input.focus();
  input.className = "textarea";
  const text2 = document.createElement("span");
  text2.classList.add("pass");
  text2.innerHTML = "Mudinja Kandupudi!";
  text2.style.color = "green";
  space1.append(text2,document.createElement("br"),text,input);
  outputbox.append(space1);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      input.setAttribute("disabled", "true");
      const cmd = input.value;
      if(cmd == "Hello World") {
        console.log("challenge completed")
        const text3 = document.createElement("span");
        text3.classList.add("pass");
        text3.innerText = "Congrats! You completed the challenge successfully.";
        text3.style.color = "green";
        audioel.play();
        space1.append(document.createElement("br"),text3);
        createPrompt();
      }else{
        const text4 = document.createElement("span");
        text4.classList.add("pass");
        text4.innerText = "Wrong Password!";
        text4.style.color = "red";
        space1.append(document.createElement("br"),text4);
        createPrompt();
      }
    }
  })
}

function renderNeo(outputbox){
  const info = {
    browser: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    screen: `${screen.width}x${screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    memory: navigator.deviceMemory || "Unknown",
    cpuThreads: navigator.hardwareConcurrency || "Unknown"
  };

    const text = document.createElement("p");
    text.innerText=`Sys Info
    ---------
    OS Platform   : ${info.platform}
    Browser       : ${info.browser}
    Screen Size   : ${info.screen}
    Language      : ${info.language}
    Timezone      : ${info.timezone}
    RAM (approx.) : ${info.memory} GB
    CPU Threads   : ${info.cpuThreads}
    `;
    text.classList.add("neofetch");
    outputbox.append(text);
    createPrompt();
   }


function changeTheme(theme){
  if(theme == "dark"){
  console.log("Theme changed to yellow")
  localStorage.setItem("theme","yellow");
  theme="yellow";
  setTheme(theme);
}else if(theme=="yellow"){
  console.log("Theme changed to dark");
  localStorage.setItem("theme","dark");
  theme="dark";
  setTheme(theme);
}
}

function renderRepo(outputbox){
  const text = document.createElement("span");
  text.innerText = "Opening repository...";
  text.classList.add("helpcommands");
  outputbox.append(text);
  window.open("https://github.com/root-sarvesh?tab=repositories","_blank");
  createPrompt();
}

function renderSudo(outputbox){
  const text = document.createElement("span");
  text.classList.add("helpcommands","permission");
  text.innerText = "Permission Denied!";
  outputbox.append(text);
  createPrompt();
}


function renderProjects(outputbox){
  const projects = document.createElement("div");
  projects.className = "projects";
  const load = document.createElement("span")
  load.classList.add("loading");
  load.innerText = " ███▒▒▒▒▒▒▒ "
  const text = document.createElement("span");
  text.classList.add("devtext");
  text.innerText = "UNDER DEVELOPMENT!";
  projects.append(load,text);
  outputbox.append(projects);
  createPrompt();
}


function invalidCmd(cmd,outputbox){
  console.log("Command not recognized");
  const text1 = document.createElement("span");
  text1.classList.add("helpcommands");
  text1.innerText=cmd+": Command not recognized"
  outputbox.appendChild(text1);
}

function renderDate(outputbox){
  const date = new Date();
  const text = document.createElement("span");
  text.innerText = date;
  text.classList.add("helpcommands");
  outputbox.append(text);
  createPrompt();
}

function emailFn(outputbox){
  const text = document.createElement("span");
  text.innerText = "Opening mailto: sarveshkp23@gmail.com...";
  text.classList.add("helpcommands");
  window.open("mailto: sarveshkp23@gmail.com");
  outputbox.append(text);
  createPrompt();
}


function whoami(outputbox) {
  const container = document.createElement("div");
  container.className = "whoami";

  // Create spans for Name, Role, Institution
  const nameSpan = document.createElement("span");
  nameSpan.textContent = "Name: Sarvesh";
  nameSpan.className = "whoami-name";

  const roleSpan = document.createElement("span");
  roleSpan.textContent = "Role: Passionate Computer Science Student";
  roleSpan.className = "whoami-role";

  const institutionSpan = document.createElement("span");
  institutionSpan.textContent = "Institution: SSN College of Engineering";
  institutionSpan.className = "whoami-institution";

  // Paragraph for the rest
  const detailsPara = document.createElement("p");
  detailsPara.innerHTML = `
    Interests: Web Development, Cyber Security, Ethical Hacking, LINUX<br>
    Currently: Exploring systems programming, building a terminal-style portfolio, and experimenting with open-source tech<br>
    Website: sarvesh.dev (coming soon)<br>
    Philosophy: Talking is cheap. Show me the code! - Linus Torvalds
    <br>
  `;

  // Append all to container
  container.append(nameSpan, document.createElement("br"));
  container.append(roleSpan, document.createElement("br"));
  container.append(institutionSpan, document.createElement("br"));
  container.append(detailsPara);

  // Append to terminal/output
  outputbox.appendChild(container);
}

function createPrompt() {
  console.log("creating prompt");

  const inputBox = document.createElement("div");
  inputBox.className = "inputbox";

  const cmdline = document.createElement("div");
  cmdline.className = "cmdline";


  const prompt = document.createElement("span");
  const guest = document.createElement("span");
  const at = document.createElement("span");
  const domain = document.createElement("span");
  const letters = document.createElement("span");
  guest.classList.add("guest","prompt");
  guest.innerText="guest";
  domain.classList.add("domain","prompt");
  letters.classList.add("letters","prompt");
  at.classList.add("at","prompt");
  prompt.className = "prompt";
  domain.innerText = "terminal.com";
  at.innerText = "@";
  letters.innerText=":~$";
  prompt.append(guest,at,domain,letters);


  const textArea = document.createElement("input");
  textArea.className = "textarea";
  textArea.setAttribute("autocomplete", "off");

  const outputbox = document.createElement("div");
  outputbox.className = "outputbox";

  cmdline.append(prompt, textArea);
  inputBox.append(cmdline);
  terminal.append(inputBox);
  terminal.append(outputbox);


  textArea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      textArea.setAttribute("disabled", "true");

      const cmd = textArea.value;
      cmdsin.push(cmd);
      handleCommand(cmd,outputbox);
    }
    if(e.key == "ArrowUp") {
      e.preventDefault();
      textArea.value = cmdsin.at(i);
      textArea.focus();
      textArea.setSelectionRange(textArea.value.length,textArea.value.length);
      i=i-1;
    }
  });

  textArea.focus();
}


function setTheme(theme){
  if(theme == "yellow"){
  document.documentElement.style.setProperty('--guestColor','#d79921');
  document.documentElement.style.setProperty('--terminalColor','#282828');
  document.documentElement.style.setProperty('--artColor','#ebdbb2');
  document.documentElement.style.setProperty('--borderColor','#98971a');
  document.documentElement.style.setProperty('--domainColor','#98971a');
  document.documentElement.style.setProperty('--letterColor','#a89984');
}else{
  document.documentElement.style.setProperty('--guestColor','#fded02');
  document.documentElement.style.setProperty('--terminalColor','#090300');
  document.documentElement.style.setProperty('--artColor','#a5a2a2');
  document.documentElement.style.setProperty('--borderColor','green');
  document.documentElement.style.setProperty('--domainColor','#01a252');
  document.documentElement.style.setProperty('--letterColor','#a89984'); 
}
}

window.addEventListener(('DOMContentLoaded'), () => {
  let theme = localStorage.getItem('theme');
   if (!theme) {
    theme = "yellow";                  
    localStorage.setItem("theme", theme);
  }
  setTheme(theme);
  createPrompt();
});



