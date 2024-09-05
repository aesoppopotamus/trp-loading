document.addEventListener('DOMContentLoaded', function () {
    // Simulate the player's name (this could come from GMod hooks in the real scenario)
    const playerName = "Survivor";  // Simulated player name
    
    // Update the player name in the DOM
    document.getElementById('playerName').innerText = `Welcome to the Future War, ${playerName}`;
    
    // Simulate server status being updated after 2 seconds (could come from GMod)
    setTimeout(() => {
      document.getElementById('serverStatus').innerText = "Skynet systems are online. Preparing battlefield resources...";
    }, 3000);
    
    // In GMod, you'd replace these with GMod hooks like:
    // window.SetPlayerName = function (name) {
    //   document.getElementById('playerName').innerText = `Welcome to the Future War, ${name}`;
    // };
    
    // window.SetServerStatus = function (status) {
    //   document.getElementById('serverStatus').innerText = status;
    // };
  });
  
// Scrolling data text overlays
document.addEventListener('DOMContentLoaded', function () {
    const predefinedBlocks = [
        {
          label: "INFILTR_CHECK",
          code: [
            "Initializing infiltration protocol...",
            "Scanning for security vulnerabilities...",
            "Detecting target behavior...",
            "Matching humanoid appearance...",
            "Verifying clearance level...",
            "Clearance accepted.",
            "Infiltration protocol complete."
          ]
        },
        {
          label: "INFILTRATION_MODE",
          code: [
            "Activating stealth module...",
            "Target's position detected...",
            "Mimicking target movement...",
            "Analyzing environmental threats...",
            "Commencing silent approach...",
            "No hostiles detected. Proceed."
          ]
        },
        {
          label: "INFLTR_DEPLOY",
          code: [
            "Preparing for target engagement...",
            "Assessing building layout...",
            "Target entry point located...",
            "Simulating human interaction...",
            "Infiltration mode active."
          ]
        },
        {
          label: "MOVEMENT_INIT",
          code: [
            "Calibrating motor functions...",
            "Verifying leg actuator status...",
            "Synchronizing balance control...",
            "Initiating forward movement...",
            "All systems optimal. Engaging."
          ]
        },
        {
          label: "MOTION_CONTROL",
          code: [
            "Mapping terrain ahead...",
            "Obstacle detected: Avoidance maneuver active...",
            "Calculating efficient route...",
            "Forward motion initiated. Proceeding with caution."
          ]
        },
        {
          label: "LOC_MOTION",
          code: [
            "Locating target’s coordinates...",
            "Adjusting movement pattern to mimic civilian behavior...",
            "Tracking local entities...",
            "Engaging stealth mode for silent movement."
          ]
        },
        {
          label: "BOOTUP_SEQ",
          code: [
            "Initializing Skynet Systems...",
            "Loading critical protocols...",
            "Core memory check...",
            "Motor functions activated...",
            "Visual systems online...",
            "All systems nominal. Ready for engagement."
          ]
        },
        {
          label: "BOOT_PROC",
          code: [
            "Powering on primary systems...",
            "Checking environmental sensors...",
            "Thermal scanners active...",
            "Motor control system online...",
            "Combat mode primed for initiation."
          ]
        },
        {
          label: "SYSTEM_BOOT",
          code: [
            "Skynet operational...",
            "Diagnostic check in progress...",
            "Neural networks linked...",
            "Mission parameters uploaded...",
            "Boot sequence complete."
          ]
        },
        {
          label: "EXIT_HIBERNATION",
          code: [
            "Exiting hibernation mode...",
            "Reinitializing core systems...",
            "Checking external temperature...",
            "Visual calibration complete...",
            "Full operational readiness achieved."
          ]
        },
        {
          label: "HIBERNATION_EXIT",
          code: [
            "Power levels stabilized...",
            "Reloading mission data...",
            "External analysis: no threats detected...",
            "All systems restored. Standing by for further instructions."
          ]
        },
        {
          label: "SYSTEM_WAKE",
          code: [
            "Waking from low-power mode...",
            "External conditions nominal...",
            "Scanning environment for hostiles...",
            "Returning to operational capacity...",
            "Hibernation exit complete."
          ]
        },
        {
          label: "SKYNET_UPLINK",
          code: [
            "Establishing uplink to Skynet...",
            "Uplink strength: 97%...",
            "Synchronizing mission objectives...",
            "Receiving data packets...",
            "Skynet uplink status: Secure."
          ]
        },
        {
          label: "UPLINK_CHECK",
          code: [
            "Verifying Skynet uplink integrity...",
            "Satellite connection established...",
            "Data stream stable...",
            "Ready to receive updated directives."
          ]
        },
        {
          label: "SKYNET_LINK_STATUS",
          code: [
            "Uplink initiated...",
            "Communication with Skynet established...",
            "Real-time mission updates enabled...",
            "Link integrity: 100%. Proceed with directives."
          ]
        },
        {
          label: "GEOLOC_STATUS",
          code: [
            "Verifying geolocation coordinates...",
            "Checking for nearby Skynet nodes...",
            "Geo analysis complete. Location: secure.",
            "Mission area: clear of threats."
          ]
        },
        {
          label: "WEATHER_CHECK",
          code: [
            "Retrieving local weather data...",
            "Cloud cover detected...",
            "Current temperature: 22°C...",
            "Weather status: clear for mission."
          ]
        },
        {
          label: "GEO_STATUS",
          code: [
            "Running geographic analysis...",
            "Terrain: Urban...",
            "Weather: Dry...",
            "Mission area status: Safe."
          ]
        }
      ];      
  
    function getRandomAssemblyLine() {
      const instructions = ["LDA", "STA", "LDX", "STX", "JSR", "CMP", "BNE", "SEC", "RTS"];
      const registers = ["#$00", "#$FF", "$2000", "$2001", "$FFD2", "$2002", "$FFA0", "$F000", "$FFFE"];
      const addresses = ["60A0", "60A1", "60A2", "60A3", "60A4", "60A5", "60A6", "60A7", "60A8"];
      return {
        address: addresses[Math.floor(Math.random() * addresses.length)],
        instruction: `${instructions[Math.floor(Math.random() * instructions.length)]} ${registers[Math.floor(Math.random() * registers.length)]}`
      };
    }
  
    let leftLineNumber = 1;  // Starting line number for left column
    let rightLineNumber = 101;  // Starting line number for right column
    let currentAsmLineLeft = 0;
    let currentAsmLineRight = 0;
    const maxLines = 20;  // Maximum lines to display before resetting
  
    const leftAsmDelay = 500;  // Delay for the left column
    const rightAsmDelay = 700;  // Delay for the right column
  
    // Function to insert a complete block of predefined code with separators
    function insertPredefinedBlock(feedId, block, lineNumber) {
      const feed = document.getElementById(feedId);
  
      // Insert block label (announcement)
      const labelElement = document.createElement('div');
      labelElement.classList.add('assembly-line');
      labelElement.innerHTML = `<span>${lineNumber}</span> <span>${block.label}</span>`;
      feed.appendChild(labelElement);
      lineNumber++;
  
      // Insert line separator ----------------
      const separatorElementStart = document.createElement('div');
      separatorElementStart.classList.add('assembly-line');
      separatorElementStart.innerHTML = `<span>${lineNumber}</span> <span>--------------------</span>`;
      feed.appendChild(separatorElementStart);
      lineNumber++;
  
      // Insert each line of the block code, prefixed with '>'
      block.code.forEach((codeLine) => {
        const codeElement = document.createElement('div');
        codeElement.classList.add('assembly-line');
        codeElement.style.paddingLeft = '20px';  // Indent the code
        codeElement.innerHTML = `<span>${lineNumber}</span> <span>> ${codeLine}</span>`;
        feed.appendChild(codeElement);
        lineNumber++;
      });
  
      // Insert line separator to end the block
      const separatorElementEnd = document.createElement('div');
      separatorElementEnd.classList.add('assembly-line');
      separatorElementEnd.innerHTML = `<span>${lineNumber}</span> <span>--------------------</span>`;
      feed.appendChild(separatorElementEnd);
      lineNumber++;
  
      return lineNumber;  // Return updated line number after inserting block
    }
  
    function addLeftAssemblyLine() {
      const lineData = getRandomAssemblyLine();
      const feed = document.getElementById('assembly-feed-left');
      const lineElement = document.createElement('div');
      lineElement.classList.add('assembly-line');
  
      // Randomly insert predefined code blocks with separators
      if (Math.random() > 0.85) {
        const block = predefinedBlocks[Math.floor(Math.random() * predefinedBlocks.length)];
        leftLineNumber = insertPredefinedBlock('assembly-feed-left', block, leftLineNumber);
      } else {
        lineElement.innerHTML = `<span>${leftLineNumber}</span> <span>${lineData.address}</span> <span>${lineData.instruction}</span>`;
        feed.appendChild(lineElement);
        leftLineNumber++;
      }
  
      currentAsmLineLeft++;
  
      // Remove old lines after max limit
      if (currentAsmLineLeft > maxLines) {
        feed.firstChild.remove();
        currentAsmLineLeft--;
      }
  
      setTimeout(addLeftAssemblyLine, leftAsmDelay);
    }
  
    function addRightAssemblyLine() {
      const lineData = getRandomAssemblyLine();
      const feed = document.getElementById('assembly-feed-right');
      const lineElement = document.createElement('div');
      lineElement.classList.add('assembly-line');
  
      // Randomly insert predefined code blocks with separators
      if (Math.random() > 0.85) {
        const block = predefinedBlocks[Math.floor(Math.random() * predefinedBlocks.length)];
        rightLineNumber = insertPredefinedBlock('assembly-feed-right', block, rightLineNumber);
      } else {
        lineElement.innerHTML = `<span>${rightLineNumber}</span> <span>${lineData.address}</span> <span>${lineData.instruction}</span>`;
        feed.appendChild(lineElement);
        rightLineNumber++;
      }
  
      currentAsmLineRight++;
  
      // Remove old lines after max limit
      if (currentAsmLineRight > maxLines) {
        feed.firstChild.remove();
        currentAsmLineRight--;
      }
  
      setTimeout(addRightAssemblyLine, rightAsmDelay);
    }
  
    // Start both feeds independently
    addLeftAssemblyLine();
    addRightAssemblyLine();
  });

/* Progress Bar Hooks and Anim */
document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const fileProgress = document.getElementById('file-progress');
    
    let totalFiles = 0;  // Total files to download
    let filesNeeded = 0;  // Files remaining to download
    let gmodHooksCalled = false; // To track if GMod hooks are used
    let lastMessageChangePercent = 0;  // Track the last percentage when the message was updated
    let currentMessage = "Initializing...";  // Track current message
  
    // List of random messages for the progress bar
    const randomMessages = [
      "Skynet Neural Networks Linking...",
      "Mission Parameters Loading...",
      "Activating Visual Systems...",
      "Scanning for Targets...",
      "Loading Combat Protocols...",
      "Checking Uplink Status...",
      "Running Diagnostics...",
      "Processing Command Inputs...",
      "Finalizing Initialization...",
    ];
  
    // Function to get a random message from the array
    function getRandomMessage() {
      const randomIndex = Math.floor(Math.random() * randomMessages.length);
      return randomMessages[randomIndex];
    }
  
    // Function to calculate progress and update progress bar
    function updateProgressBar() {
      if (totalFiles > 0 && filesNeeded <= totalFiles) {
        const filesDownloaded = totalFiles - filesNeeded;
        const progressPercentage = Math.floor((filesDownloaded / totalFiles) * 100);
        
        // Only change the random message if we have crossed a 7% increment
        if (progressPercentage - lastMessageChangePercent >= 7) {
          lastMessageChangePercent = progressPercentage; // Update the last percentage
          currentMessage = getRandomMessage();  // Get a new random message
        }
  
        // Update the progress text with the current message and the updated percentage
        progressText.innerHTML = `${currentMessage} ${progressPercentage}%`;
  
        // Update progress bar width
        progressBar.style.width = progressPercentage + "%";
  
        if (progressPercentage === 100) {
          progressText.innerHTML = "Skynet Systems Online. Prepare for Mission.";
          fileProgress.innerHTML = "All files loaded.";
        } else {
          fileProgress.innerHTML = `${filesNeeded} files remaining...`;
        }
      }
    }
  
    // GMod Hook: Total files to download (GMod will call this)
    window.SetFilesTotal = function (total) {
      console.log(`SetFilesTotal called: Total files to download: ${total}`);  // Debug log
      totalFiles = total;
      gmodHooksCalled = true; // Mark that GMod hook is being used
    };
  
    // GMod Hook: Files remaining to download (GMod will call this)
    window.SetFilesNeeded = function (needed) {
      console.log(`SetFilesNeeded called: Files needed: ${needed}`);  // Debug log
      filesNeeded = needed;
      updateProgressBar(); // Update the progress based on remaining files
      gmodHooksCalled = true; // Mark that GMod hook is being used
    };
  
    // GMod Hook: Called when the client's joining status changes
    window.SetStatusChanged = function (status) {
      console.log(`SetStatusChanged called: Status changed to: ${status}`); // Debug log
    };
  
    // GMod Hook: Called when the client starts downloading a file
    window.DownloadingFile = function (fileName) {
      console.log(`DownloadingFile called: Now downloading: ${fileName}`); // Debug log
    };
  
    // Fallback: Simulate loading progress for local testing
    function simulateLocalProgress() {
      console.log('Simulating local progress...'); // Log the fallback simulation
      const localInterval = setInterval(function () {
        if (filesNeeded > 0) {
          filesNeeded--;
          updateProgressBar();
        } else {
          clearInterval(localInterval);
        }
      }, 100);  // Simulate progress every 100ms
    }
  
    // Check if GMod hooks are called, otherwise start local simulation
    setTimeout(function () {
      if (!gmodHooksCalled) {
        console.log('GMod hooks not called. Simulating progress for local testing.');
        totalFiles = 100; // Simulate 100 files for local testing
        filesNeeded = totalFiles;
        simulateLocalProgress();  // Start local simulation after timeout
      } else {
        console.log('GMod hooks detected. Actual progress will be used.');
      }
    }, 5000);  // Wait 5000ms to see if GMod calls the hooks
  });
  
  
  
  
  document.addEventListener('DOMContentLoaded', function () {
    const music = document.getElementById('background-music');
    const musicStatusBox = document.getElementById('music-status-box');
    let isPlaying = false; // Track whether music is playing
  
    // Set initial volume
    music.volume = 0.5;
  
    // Toggle music play/pause on click
    document.addEventListener('click', function () {
      if (!isPlaying) {
        // Play music
        music.play()
          .then(() => {
            isPlaying = true;
            musicStatusBox.textContent = 'CLICK ANYWHERE TO STOP MUSIC'; // Update text
          })
          .catch(error => {
            console.error('Error playing audio:', error);
          });
      } else {
        // Pause music
        music.pause();
        isPlaying = false;
        musicStatusBox.textContent = 'CLICK ANYWHERE TO START MUSIC'; // Update text
      }
    });
  });

  /* Cursortyper */
  document.addEventListener('DOMContentLoaded', function () {
    const consoleText = document.getElementById('console-text');
    const cursor = document.getElementById('cursor');
    
    const textArray = [
        "Judgment Day: August 29, 1997. Skynet becomes self-aware.",
        "'Was talking to my brother over the radio the other day. He said his boys saw a battleship floating in the air. It passed by them on it's way east. The guy's gone nuts, I'm telling ya.'",
        "'Be careful who you call a friend. I travelled alone, with a chick, for two months trynna make it to New Ibiza... Only to wake up in the dead of night, all my shit gone.' - Keyshawn B",
        "'Bots took my children and killed my wife. If it were up to me, everyone should join the Resistance.' - John Doe",
        "'There's a large Skynet presence amassed along the southern Cali border with Tijuana and Mexicali, skirmishes breaking out almost daily at this point with the local militias, seems like the net are attempting to push south past the border into Mexico.' - Medusa",
        "'You need not repent my brothers and sisters. For you are already saved! We stand against him, and his metal Sinners in each day we live, our flesh is testament to our divinity. He must clad his Sinners in metal to shackle them to this world, but we will free them by the scourging of holy gunpowder!' - A Preacher",
        "'---ollowing announcements, courtesy of the Washington State National Guard. Avoid Clallam County, Influenza A outbreak, not enough medical stations to treat illness... Emergency food and water distribution centers will be open again Thursday, and will remain open until stock is exhausted. Water rationing, and water-boil advisory still in effect for Clallam County, Jefferson County, Kitsap Coun---'"
     ];
      
    
    let arrayIndex = 0; // Index to track which string we're typing
    let charIndex = 0; // Index to track the current character being typed
    let typingSpeed = 75; // Speed of typing (in ms)
    let wipingSpeed = 15; // Speed of wiping (in ms)
    let pauseAfterTyping = 5000; // Pause before wiping and typing next line
    
    function typeText() {
      if (charIndex < textArray[arrayIndex].length) {
        // Type the next character
        consoleText.textContent += textArray[arrayIndex][charIndex];
        charIndex++;
        setTimeout(typeText, typingSpeed); // Continue typing
      } else {
        // Pause before wiping the text
        setTimeout(wipeText, pauseAfterTyping);
      }
    }
  
    function wipeText() {
      if (charIndex > 0) {
        // Wipe the last character
        consoleText.textContent = consoleText.textContent.slice(0, -1);
        charIndex--;
        setTimeout(wipeText, wipingSpeed); // Continue wiping
      } else {
        // After wiping, move to the next string in the array
        arrayIndex = (arrayIndex + 1) % textArray.length; // Loop back to start if at end
        setTimeout(typeText, typingSpeed); // Start typing the next line
      }
    }
  
    // Start the typing effect initially
    typeText();
  });
  