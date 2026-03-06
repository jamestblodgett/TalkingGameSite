function checkPassword() {
  const input = document.getElementById("password-input").value.trim();

  // map passwords to actions (show sections)
  const actions = {
    // basic secret content password
    "beanWell": () => {
      showSection("secret-section");
    },
    // admin password: show everything
    "UliName": () => {
      showSection("secret-section");
      showSection("admin-section");
    }
  };

  const action = actions[input];
  if (action) {
    action();
    document.getElementById("password-prompt").style.display = "none";
  } else {
    alert("Incorrect password. Try again.");
  }
}

function showSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = "block";
  }
}

function insertPasswordPrompt(targetId) {
  const container = document.getElementById(targetId);
  if (container) {
    container.innerHTML = `
    <div class="images">
      <img src="images/KeyGate.png" alt="Key Gate Image" width="80">
    </div>
      <div class="password-prompt">
        <input type="password" id="password-input" placeholder="Enter password">
        <button onclick="checkPassword()">Submit</button>
      </div>
    `;
  }
}

function addMenus(selector) {
  const containers = document.querySelectorAll(selector);
  containers.forEach(container => {
    container.innerHTML = `
       <nav>
  <ul class="navbar">
    <li><a href="index.html">Home</a></li>
    <li><a href="Overview.html">Overview</a></li>
    <li><a href="Players.html">Players</a></li>
    <li class="dropdown">
      <a href="GameContent.html" class="dropbtn">Game Content</a>
      <div class="dropdown-content">
        <a href="AddWorlds.html">Worlds</a>
        <a href="Characters.html">Characters</a>
        <a href="Magic.html">Magic</a>
        <a href="Races.html">Races</a>
        <a href="OtherContent.html">Other</a>
      </div>
    </li>
    <li><a href="updates.html">Coming soon</a></li>
  </ul>
</nav>
    `;
  });
}

function createButton(buttonData) {
  const btn = document.createElement("button");
  btn.textContent = buttonData.name;
  
  if (buttonData.url) {
    // Navigate to the specified page
    btn.onclick = () => window.location.href = buttonData.url;
  } else if (buttonData.onClick) {
    // Or use a custom function if provided
    btn.onclick = buttonData.onClick;
  }
  return btn;
}

function addContent(containerId, sections) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  sections.forEach(section => {
    // Create section wrapper
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "character-section";
    
    // Add section title if provided
    if (section.title) {
      const title = document.createElement("h3");
      title.textContent = section.title;
      sectionDiv.appendChild(title);
    }
    
    // Add descriptive text if provided
    if (section.text) {
      const textDiv = document.createElement("p");
      textDiv.textContent = section.text;
      sectionDiv.appendChild(textDiv);
    }
    
    // Add buttons if provided
    if (section.buttons && section.buttons.length > 0) {
      const buttonGroup = document.createElement("div");
      buttonGroup.className = "button-group";
      section.buttons.forEach(buttonData => {
        buttonGroup.appendChild(createButton(buttonData));
      });
      sectionDiv.appendChild(buttonGroup);
    }
    
    container.appendChild(sectionDiv);
  });
}

// Call functions
insertPasswordPrompt("password-placeholder");
addMenus(".menu-placeholder");

addContent("character-buttons", [
  {
    title: "Character Players",
    text: "The \"NPC\" Players, or the Non-human players. The NPCs that have the Player status.",
    buttons: [
      { name: "Benson", url: "Benson.html" },
      { name: "Plon", url: "Plon.html" },
      { name: "14", url: "14.html" },
      { name: "Lora", url: "Lora.html" },
      { name: "Konnor", url: "Konnor.html" }
    ]
  },
  {
    title: "Allspark's Castle",
    text: "The characters associated most closely with Allspark, and who (usually) live there.",
    buttons: [
      { name: "Gret", url: "Gret.html" },
      { name: "Lucille", url: "Lucille.html" },
      { name: "Irvan", url: "Irvan.html" },
      { name: "Urtin", url: "Urtin.html" },
      { name: "Aadlo", url: "Aadlo.html" },
      { name: "Shayla", url: "Shayla.html" },
      { name: "Charlotte", url: "Charlotte.html" },
    ]
  },
  {
    title: "Ben's Island",
    text: "The characters associated most closely with Ben's Island, and who (usually) live there.",
    buttons: [
      { name: "Drew", url: "Drew.html" },
      { name: "Claude", url: "Claude.html" },
      { name: "IVAN", url: "IVAN.html" },
      { name: "Clacker", url: "Clacker.html" },
    ]
  },
  {
    title: "Marshall's Tree",
    text: "The characters associated with Marshall's tree",
    buttons: [
      { name: "The Tree", url: "TheTree.html" },
      { name: "Tex", url: "Tex.html" },
    ]
  },
  {
      title: "Eon",
      text: "The Eonian Characters who live in the city of Eon.",
      buttons: [
        { name: "Malvat", url: "Malvat.html" },
        { name: "Arya", url: "Arya.html" },
        { name: "\"The Eon King\"", url: "EonKing.html" },
      ]
  },
  {
    title: "Wanderers",
    text: "The characters who are not tied to any specific location or group.",
    buttons: [
      { name: "Geode", url: "Geode.html" },
      { name: "Scalb", url: "Scalb.html" },
      { name: "Dreb", url: "Dreb.html" },
      { name: "Leroy", url: "Leroy.html" },
      { name: "Els", url: "Els.html" },
      { name: "Fow", url: "Fow.html" },
      { name: "Chloe", url: "Chloe.html" },
    ]
  }
]);

// world buttons added to the worlds page
addContent("world-buttons", [
  {
    title: "Primary Worlds",
    text: "The Primary Worlds, generally made as Planets, are the main area of the game, where most characters, plots, and storylines will take place. There are 5 worlds, each with their own \"theme\", and with their own magic systems.",
    buttons: [
      { name: "Creevalia", url: "Creevalia.html" },
      { name: "Errathis", url: "Errathis.html" },
      { name: "Koprax", url: "Koprax.html" },
      { name: "Terrland", url: "Terrland.html" },
      { name: "Lotusium", url: "Lotusium.html" },
    ]
  },{
  title: "Extra Worlds",
  text: "The Extra Worlds are worlds that are not a part of the main universe, but are still in the game, and are equally (if not more) important than the main worlds.",
  buttons: [
    { name: "Eon", url: "Eon.html" },
    { name: "The Void", url: "Void.html" },
    { name: "Character World", url: "CharacterWorld.html" },
    { name: "Dream world", url: "DreamWorld.html" },
    { name: "Elsewhere", url: "Elsewhere.html" },
    { name: "The Omnack", url: "Omnack.html" },
    { name: "The Judgement Hall", url: "JudgementHall.html" },
    { name: "Other", url: "OtherWorlds.html" },
  ]
}
]);

addContent("Magic", [
  {
    title: "Magic types",
    text: "",
    buttons: [
      { name: "Creevalian", url: "Creevaliamagic.html"},
      { name: "Metals", url: "Metals.html"},
      { name: "Special abilities", url: "specials.html"},
      { name: "Esteen", url: "Esteen.html"},
      { name: "Lunar", url: "Lunarmagic.html"},
      { name: "Cards", url: "Magicards.html"},
      { name: "Runes", url: "Runes.html"},
      { name: "Shards", url: "shards.html"},
      { name: "Ancient Gems", url: "ancientGems.html"},
      { name: "Symblings", url: "Symblings.html"},
      { name: "Additional Types", url: "additionalTypes.html"},
    ]
  }
])
addContent("secret-Magic", [
  {
    title: "More Magic types",
    text: "",
    buttons: [
      { name: "Intention Shifting", url: "intentionManipulation.html"},
    ]
  }
])
addContent("Players", [
  {
    title: "Players",
    text: "",
    buttons: [
      { name: "Allspark", url: "Allspark.html" },       // James
      { name: "Jake Morningstar", url: "JakeM.html" },  // Ben
      { name: "Mizan My-Zan", url: "MizanM.html" },     // Quade
      { name: "Kior", url: "Kior.html" },               // Ronin
      { name: "Marshall", url: "Marshall.html" },       // Marshall
      { name: "Providence", url: "Providence.html" },   // Braden
      { name: "Aelaon Somiel", url: "AelaonS.html" },   // Analee
      // { name: "River", url: "RiverM.html" },
      // { name: "Shawn", url: "ShawnT.html" },
      // { name: "Elias", url: "Elias.html" },
      { name: "\"Multiple character set\"", url: "MultipleC.html" }, // Elijah
      
    ]
  }
])
addContent("OtherContent", [
{
  title: "",
  text:"",
  buttons: [
    { name: "Existence overview", url: "ExistenceOverview.html" },
  ]

},{
    title: "Other information",
    text: "The game has plenty of information that doesn't fit into the other categoriries, and is therefore listed here.",
    buttons: [
      { name: "Other locations", url: "OtherLocations.html" },
      { name: "Timelines", url: "Timelines.html" },
      { name: "Intentions", url: "Sparks.html" },
    ]
  }
])

addContent("AdditionalHiddenInfo", [
  {
    title: "Additional information",
    text: "",
    buttons: [
      { name: "Imported Concepts"},
      { name: "The true world", url: "TrueWorld.html" },
      { name: "Matter recycling", url: "MatterRecycling.html" },
    ]
   
  },
])