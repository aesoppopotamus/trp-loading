// Simulate the player's name
const playerName = "Survivor";  // Simulated player name
document.getElementById('playerName').innerText = `Welcome to the Future War, ${playerName}`;

// Skynet server status
setTimeout(() => {
  document.getElementById('serverStatus').innerText = "Skynet systems are online. Preparing battlefield resources...";
}, 2000);

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
    let totalFiles = 100;  // Default for local testing
    let filesNeeded = totalFiles;  // All files needed initially
    let gmodHooksCalled = false; // To track if GMod hooks are used
  
    // Update the progress bar based on files left to download
    function updateProgressBar() {
      console.log(`Total files: ${totalFiles}, Files needed: ${filesNeeded}`); // Log progress
      if (totalFiles > 0) {
        const filesDownloaded = totalFiles - filesNeeded;
        const progressPercentage = Math.floor((filesDownloaded / totalFiles) * 100);
        progressBar.style.width = progressPercentage + "%"; // Update progress bar width
        progressText.innerHTML = `Initializing... ${progressPercentage}%`;
  
        if (progressPercentage === 100) {
          progressText.innerHTML = "Skynet Systems Online. Prepare for Mission.";
          fileProgress.innerHTML = "All files loaded.";
        } else {
          fileProgress.innerHTML = `${filesNeeded} files remaining.`;
        }
      }
    }
  
    // GMod Hook: Total files to download (GMod will call this)
    window.SetFilesTotal = function (total) {
      console.log('SetFilesTotal called:', total);  // Debug log
      totalFiles = total;
      gmodHooksCalled = true; // Mark that GMod hook is being used
    };
  
    // GMod Hook: Files remaining to download (GMod will call this)
    window.SetFilesNeeded = function (needed) {
      console.log('SetFilesNeeded called:', needed);  // Debug log
      filesNeeded = needed;
      updateProgressBar();
      gmodHooksCalled = true; // Mark that GMod hook is being used
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
        simulateLocalProgress();  // Start local simulation after timeout
      } else {
        console.log('GMod hooks detected. Actual progress will be used.');
      }
    }, 500);  // Wait 500ms to see if GMod calls the hooks
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