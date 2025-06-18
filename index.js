helps = ['whoami','theme','date','echo','sudo','repo','clear','email','projects','neofetch','challenge']
cmdsin = []
let i=-1;

const terminal = document.getElementsByClassName("terminal")[0];

    
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
        console.log("whoami");
        createPrompt();
        break;
      case "theme":
        console.log("theme");
        break;
      case "date":
        console.log("date");
        renderDate(outputbox);
        break;
      case "neofetch":
        console.log("neofetch");
        renderNeo(outputbox);
        break;
      case "echo":
        console.log("echo");
        renderEcho(cmd,outputbox);
        break;
      case "sudo":
        console.log("sudo");
        renderSudo(outputbox);
        break;
      case "repo":
        console.log("repo");
        renderRepo(outputbox);
        break;
      case "clear":
        console.log("clear");
        terminal.innerHTML='<br><br>';
        createPrompt();
        break;
      case "email":
        console.log("email");
        emailFn(outputbox);
        break;
      case "projects":
        console.log("projects");
        renderProjects(outputbox);
        break;
      case "challenge":
        console.clear();
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
  const space1 = document.createElement("div");
  space1.classList.add("pass","helpcommands");
  const text = document.createElement("span");
  text.innerText = "Enter password: ";
  const input = document.createElement("input")
  input.className = "textarea";
  space1.append(text,input);
  outputbox.append(space1);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      input.setAttribute("disabled", "true");

      const cmd = input.value;
      if(cmd == "Hello World") console.log("Congrats! You completed the challenge successfully.")
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

function renderRepo(outputbox){
  const text = document.createElement("span");
  text.innerText = "Opening repository...";
  text.classList.add("helpcommands");
  outputbox.append(text);
  window.open("https://github.com/Sarvesh2006?tab=repositories","_blank");
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
    Known for: Blending creativity with code, solving problems with curiosity<br>
    Goal: To create meaningful digital experiences and grow as a full-stack developer<br>
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

window.onload = () => {
  createPrompt(); 
};

