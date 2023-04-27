//text display for buttons

let text = [
  '<b>About Me:</b>' + " Competitive Rubik’s Cube Speed Solver brings an algorithmic, yet colorful, approach to programming and logic solving" +
 '\n' + '<b>Objective:</b>' + ' To obtain a degree in Computer Science, with a focus on artificial intelligence',
'● Coding: Java (Medium-level), Python (Medium), HTML/CSS (Beginner)' +
' \n● Mechanical: Basic servo, motor, gear, and camera programming in C++ for robotics' +
' \n● Other: GitHub repository building, Datadog, Docker' +
' \n● Beta-Tester for GitHub Copilot, an AI Programming Assist' +
' \n● Captain of a Robotics Team.' +
'   \n\t○ Central focus on the programming and application of the autonomous robot' +
' \n● Captain of the Math Team' +
'   \n\t○ Coordinator of Math Growth. Led Practices and inspired teammates to delve deeper into math.',
'● National Honor Society' +
'\n● Illinois State Scholar' +
'\n● Mathletes Team Competition First Place' +
'\n● Mathletes Individual Competition Finalist (3rd Place)' +
'\n● AP Scholar with Distinction (Score of 3.5 or more on all AP Exams: Exams out of 5)' +
'\n● Chesed Society Award (Students at ICJA with 250+ Chesed Hours)' +
'\n● Illinois State Scholar' +
'\n● Mathletes Team Competition First Place' +
'\n● Mathletes Individual Competition Finalist (3rd Place)' +
'\n● Dr. and Mrs. Abe L. Aaronson Science Award (recognizing graduate’s accomplishments in the field of science)' +
'\n● Chesed Society Award (Students at ICJA with 250+ Chesed Hours)'  +
'\n● Illinois State Scholar' +
'\n● Mathletes Team Competition First Place' +
'\n● Mathletes Individual Competition Finalist (3rd Place)' +
'\n● AP Scholar with Distinction (Score of 3.5 or more on all AP Exams: Exams out of 5)' +
'\n● Chesed Society Award (Students at ICJA with 250+ Chesed Hours)',
'Table Tennis, Competitive Rubik’s Cube, Skiing, Hiking',
'Watchful.ai' +' | Intern (in conjunction with gap year program at Torah Tech) Tel-Aviv, Israel | October ‘22 - May ‘23' +
'\n● Lead QA (Quality Assurance) Manager' +
'\n\t○ Ensured new features were thoroughly tested for potential customer experience flow issues or product defects prior to being pushed to our end-users' +
'\n\t○ Provided feedback to Product and Engineering teams to inform new product feature design' +
'\n\t○ Developed automated testing processes to reduce testing time and overhead, freeing up my time to learn new skills in Website design (HTML and CSS), Python (Flask)' +
'\n●Collaborated with Sales & Marketing teams to provide to our clients insights on their competitions’ engagement campaigns' +
'\n\t○Received kudos from large tech company ($25B market cap) for insights I provided them' +
'\n\nYagilu Wilderness Camp' +' | Youth Counselor | Pennsylvania | Summer ‘22' +
'\n●Served as a counselor to 13 campers during a month-long overnight wilderness camp' +
'\n●Created and supervised activities, guided overnight hikes, and taught survival skills' +
'\n●Assisted kids in dealing with social/emotional challenges; directed relationship-building exercises',

]


function changeText(num) {
  document.body.scrollTop=0;document.documentElement.scrollTop=0;event.preventDefault()
  document.getElementById("myText").innerHTML = text[num];
}
const links = [
  { text: "Hershel's github", href: "https://github.com/HershelT", target: "_blank", marginTop: "20px" },
  { text: "Hershel's Docker", href: "https://hub.docker.com/u/hershelt", target: "_self", marginTop: "20px" },
  {text: "Hershel's Website", href: "https://hershelthomas.com", target: "_self", marginTop: "20px" },
  // { text: "Link 3", href: "#", target: "_self", marginTop: "30px" }
];
function addLink(){
  document.body.scrollTop=0;document.documentElement.scrollTop=0;event.preventDefault()
  const linksContainer = document.getElementById("myText");
  document.getElementById("myText").innerHTML = "";
  links.forEach((link) => { 
  const linkElement = document.createElement("a");
  linkElement.innerText = link.text + "\n";
  linkElement.href = link.href;
  linkElement.target = link.target;
  linkElement.style.marginTop = link.marginTop;
  linksContainer.appendChild(linkElement);
  });
  const paragraph = document.getElementById("myText");
  paragraph.replaceWith(linksContainer);
}
