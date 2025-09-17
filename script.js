document.addEventListener('DOMContentLoaded', () => {

    // === MODIFIED: Splash selector is now the content div ===
    const splashScreen = document.getElementById('splash-screen');
    const splashContent = document.querySelector('.splash-graphic-container'); // <-- THIS LINE IS UPDATED
    const mainContainer = document.querySelector('.container');
    // === END NEW SELECTORS ===

    // === DELETED OLD FINGERPRINT SCANNER VARIABLES ===

    let contentData = [];
    let allPosts = [];
    let chaosGridItems = []; // Holds posts AND tracks
    // REMOVED chaosInterval variable
    let inactivityTimer = null; // Timer for idle revert to chaos
    let tempFavorites = ["PLAY_BRAND_BEAT"]; // <-- Pre-loads Brand Beat as a favorite

    // --- Core Site Elements ---
    const anchorNav = document.getElementById('anchor-nav');
    const filterNav = document.getElementById('filter-nav');
    const dynamicField = document.getElementById('dynamic-field');
    const mainScrollArea = document.getElementById('link-field'); // Scrolling container
    const modal = document.getElementById('content-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.getElementById('modal-close-btn');
    const binarySignature = document.getElementById('binary-signature');
    const logoContainer = document.getElementById('logo-container');
    const logoImage = document.querySelector('.logo-image');
    const logoPromptContainer = document.getElementById('logo-prompt-container');
    const bgVideo = document.getElementById('bg-video');
    
    // --- Audio Player Elements ---
    const player = document.getElementById('persistent-audio-player');
    const track = document.getElementById('track');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeBar = document.getElementById('volume-bar');
    const seekBar = document.getElementById('seek-bar');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const trackInfoEl = document.querySelector('.track-info'); 
    
    // --- Visualizer Elements & State ---
    const visualizerOverlay = document.getElementById('visualizer-overlay');
    const visualizerCanvas = document.getElementById('visualizer-canvas');
    const vCtx = visualizerCanvas.getContext('2d');
    const brandFilterOverlay = document.getElementById('brand-filter-overlay');
    
    // --- Rain Effect Elements ---
    const rainCanvas = document.getElementById('rain-canvas');
    const rainCtx = rainCanvas.getContext('2d');
    let rainParticles = [];
    const currencySymbols = ['$', '€', '£', '¥', '₩', '₹', '₽', '₿', 'Ξ'];

    // === SVG ICON CONSTANTS ===
    const svgPlayIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>`;
    const svgPauseIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>`;
    
    // === SET INITIAL BUTTON STATE ===
    playPauseBtn.innerHTML = svgPlayIcon;
    
    // Track Library Lookup
    const trackLibrary = {
        "PLAY_BRAND_BEAT": {
            "path": "music/Brand_Beat.wav",
            "title": "Brand Beat - LUCTHELEO"
        },
        "PLAY_RUMINATE": {
            "path": "music/ruminate.mp3",
            "title": "Ruminate - LUCTHELEO"
        }
    };


    // --- Simplified Visualizer Variables ---
    const brandedText = "LUCTHELEO LTL";
    let brandedCells = [];
    const midBoostThreshold = 0.3;
    let lifelineOpacity = 0.0;
    let lastRelocateTime = 0; 
    const charSize = 12;
    
    let audioCtx;
    let analyser;
    let source;
    let isPlayerInitialized = false;
    let durationIsSet = false;
    let isVfxOn = true; // Global state for logo VFX toggle

    // === DELETED OLD FINGERPRINT SCANNER FUNCTIONS ===

    async function initializeSite() {
        try {
            // --- DATA IS NOW CORRECT AND COMPLETE ---
            contentData = [
                {"id":"MNFST","type":"page","isAnchor":true,"content":"<h2>MNFST</h2><h3>LUCTHELEO | Audio.Alchemist</h3><p>Pleasantly lost in the space between signal and static.</p><p>I create from the overflow. Twenty-three years navigating the intersection of classical training and digital chaos, Louisiana soul and systematic precision. Central Louisiana roots run deep—music creation since 2007, formal production education, life coaching training.</p><p>Someone who knows a little about a lot and a lot about a little.</p><p>The problem isn't lack of creativity. The problem is creative abundance without systematic capture.</p><p>Most creative partnerships scatter brilliant ideas across sessions like seeds in the wind. Concepts emerge, energy builds, then everything disappears into the void between meetings. I solve creative overflow through systematic documentation, organized development, and shared ownership of unused collaborative assets.</p><h3>The Architecture</h3><p><b>HTML.</b> Core creative foundation. Your authentic message before market pressure shapes it.</p><p><b>CSS.</b> How you present yourself when the world is watching. Visual identity that serves the work, not ego.</p><p><b>JS.</b> Market function without compromise. Audience connection that maintains creative integrity.</p><p>Three layers. Each builds upon the previous. Complete creative architecture emerges through systematic development rather than creative chaos.</p><h3>The Process</h3><p>Sessions combine immediate creative work with transferable systematic methods. You leave with both completed material and organizational approaches that serve future projects. This isn't dependency creation—it's systematic capability building.</p><p>Documentation captures everything. Project folders organize by development layer. Session recordings preserve decisions and breakthroughs. Nothing gets lost. Everything builds upon everything.</p><p>Unused creative assets become shared catalog content. Your collaborative overflow generates ongoing revenue rather than disappearing into digital archives. Creative partnership becomes creative investment.</p><h3>The Foundation</h3><p>Louisiana spiritual tradition meets contemporary creative technology. Prayer and systematic organization. Ancestral wisdom and digital precision. The sacred and the professional occupy the same space without contradiction.</p><p>All decisions start from spiritual foundation, move through abstract glimpses, process through mind and memory, then manifest through systematic action. The heart determines application. The body executes with documentation.</p><p>Excellence is measured by commitment. What gets written becomes real. The work speaks for itself.</p><h3>The Practice</h3><p><b>Order Line Conversation.</b> Fifteen minutes. Creative alignment assessment without sales pressure.</p><p><b>REVERIE Foundation.</b> Two hours. Complete project architecture establishment. Systematic organization that supports long-term creative development.</p><p><b>RUMINATE Development.</b> Focused sessions. CSS and JS layer building through collaborative systematic approaches.</p><p>No ego. Just work. Systematic creative development for artists ready to invest in organized capability building rather than casual creative exploration.</p><h3>The Philosophy</h3><p>I don't explain the spaces. I invite you to wander them.</p><p>Creative development serves the work, not the worker. Systematic approaches honor both artistic authenticity and professional sustainability. Spiritual foundation supports rather than opposes technological precision.</p><p>We are signal through static. Analog intuition meets digital creation. Louisiana heritage informs contemporary creative architecture. The mysterious and the systematic coexist without contradiction.</p><h3>Contact Protocol</h3><p>Direct communication via Telegram @luctheleo. Systematic creative development begins with Order Line Conversation. Assessment precedes engagement. Alignment determines collaboration.</p><p><b>L-01001100 T-01010100 L-01001100</b></p><p>Transdisciplinary artist. Systematic creative development. Louisiana roots, Atlanta operations.</p><p>Signal through the static. Systematic transformation of creative potential into organized reality.</p><p>No ego. Just work.</p>"},
                {"id":"CRTVDVLPMNT","type":"page","isAnchor":true,"content":"<h2>CRTVDVLPMNT</h2><h3>Systematic Creative Development Overview</h3><p>Every artist has three faces: the one they know themselves to be (your <b>HTML</b>), the one they present to the world (your <b>CSS</b>), and the one that interacts with reality (your <b>JS</b>).</p><p>Our process systematically aligns these faces, transforming creative overflow into a clear, unified signal. We build not just a project, but a cohesive creative identity.</p><p style=\"text-align:center; margin-top: 2rem; margin-bottom: 2rem;\"><a href=\"#\" onclick=\"event.preventDefault(); document.getElementById('full-guide-content').style.display='block'; this.parentElement.style.display='none';\" style=\"padding: 10px 20px; border: 1px solid var(--link-color); border-radius: 5px; text-decoration: none;\">View Full Guide & Pricing</a></p><div id=\"full-guide-content\" style=\"display:none;\"><h2>REVERIE | RVR Creative Development Guide</h2><h3>Systematic Creative Development Process</h3><p><b>Development Philosophy:</b> No ego. Just work.</p><p><b>Approach:</b> Systematic transformation of creative concepts into organized, tangible results.</p><hr><h3>Process Overview</h3><p>This guide outlines our systematic approach to creative development. Our methodology transforms creative overflow into organized, documented work through structured sessions and skill transfer.</p><p><b>Core Principle:</b> You're not just receiving creative services - you're learning systematic development methods you can apply independently throughout your creative career.</p><hr><h3>The Creative Identity Framework</h3><p>We develop your creative identity using a systematic three-component approach:</p><ul><li><b>HTML Foundation (Core Content):</b> Your authentic creative message and purpose.</li><li><b>CSS Presentation (Visual Interface):</b> How you present yourself creatively.</li><li><b>JS Function (Market Operation):</b> How you operate and connect with audiences.</li></ul><hr><h3>Session Structure & Pricing</h3><p><b>Order Line Conversation (15 minutes - No charge)</b><br>A direct conversation to determine creative alignment and demonstrate our systematic approach.</p><p><b>REVERIE Foundation Session ($120 - 2 hours)</b><br>Establish your complete creative development architecture, focusing on the HTML layer (core creative foundation). You receive an organized project folder system, session documentation, a clear roadmap, and permanent portal access.</p><p><b>RUMINATE Development Sessions ($65/hour)</b><br>Systematic building and refinement of your presentation (CSS) and function (JS) layers through focused work sessions that include skill transfer and methodology education.</p><p><i><b>Member Rates Available:</b> For ongoing partnerships, rates are $100 for a monthly REVERIE session and $55/hour for RUMINATE sessions.</i></p><hr><h3>Skills You'll Develop</h3><ul><li>Systematic Organization</li><li>Creative Problem-Solving</li><li>Documentation Mastery</li><li>Independent Development</li></ul><p>Direct contact: Telegram @luctheleo</p></div>"},
                
                {"id":"RQST","type":"page","isAnchor":true,"content":"<h2>Booking & Contact</h2><h3>Free Consultation (Order Line Conversation)</h3><p>To begin, please request a free 15-minute consultation to determine creative alignment. This is the first step for all new projects.</p><p style=\"text-align:center; margin-top: 1rem; margin-bottom: 2rem;\"><a href=\"https://forms.gle/8S2BXZTp2qmWLoKo6\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"padding: 10px 20px; border: 1px solid var(--link-color); border-radius: 5px; text-decoration: none;\">Open Free Consultation Form</a></p><h3>Direct Booking & Socials</h3><p>For returning clients or other inquiries, use the links below.</p><ul><li><a href=\"https://calendly.com/hghnoirfrq/30min\" target=\"_blank\" rel=\"noopener noreferrer\">Book a Session (Calendly)</a></li><li><a href=\"https://linktr.ee/luctheleo\" target=\"_blank\" rel=\"noopener noreferrer\">View All Links (Linktree)</a></li></ul><h3>Contact & Payment</h3><p><b>Direct Communication:</b> Telegram @luctheleo</p><p><b>Payment for Services:</b> CashApp $NoEgoJustWork</p>"},

                {"id":"VOID_017 - home_LA","type":"post","isAnchor":false,"content":"<h2>VOID_017 - home_LA</h2><div class='embed-container'><video style='width:100%;' controls><source src='videos/home_LA1.mp4' type='video/mp4'></video></div>"},
                {"id":"SGNNL_004 - JAY Z","type":"post","isAnchor":false,"content":"<div class=\"soundcloud-embed\"><iframe width=\"100%\" height=\"300\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1226734087&color=%23546464&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true\"></iframe></div>"},
                {"id":"VOID_015 - INIKO | JERICHO","type":"post","isAnchor":false,"content":"<div class=\"embed-container\"><iframe src=\"https://www.youtube.com/embed/6bRsSLMzkIQ\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>"},
                {"id":"VOID_008 - LTL | KARMA","type":"post","isAnchor":false,"content":"<div class=\"embed-container\"><iframe src=\"https://www.youtube.com/embed/IzjIBoWGJEI\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>"},
                {"id":"SGNNL_003 - ARNOHOSE DOLLAR | PAN ME","type":"post","isAnchor":false,"content":"<div class=\"soundcloud-embed\"><iframe width=\"100%\" height=\"300\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1241335237&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true\"></iframe></div>"},
                {"id":"CRCLT_02 - INKLING","type":"post","isAnchor":false,"content":"<h2>CRCLT_02 - INKLING</h2><p style=\"font-size: 2rem; text-align: center; font-style: italic;\">\"Nothing ventured, nothing gained.\"</p>"},
                
                {"id":"CRCLT_03 - PRISON","type":"post","isAnchor":false,"content":"<h2>CRCLT_03 - PRISON</h2><p style=\"font-size: 2rem; text-align: center; font-style: italic;\">\"The most effective prison isn't built with bars but with beliefs.\"</p><hr><p style=\"text-align: center;\">Machiavelli saw the architecture of external power. The deepest architecture is the one you build around your own potential.</p><p style=\"text-align: center; font-style: italic;\">Your prison was always unlocked.</p>"},
                {"id":"CRCLT_04 - AMBITION","type":"post","isAnchor":false,"content":"<h2>CRCLT_04 - AMBITION</h2><p style=\"font-size: 2rem; text-align: center; font-style: italic;\">\"Make mistakes of ambition, not sloth.\"</p><hr><p style=\"text-align: center;\">Mistakes of ambition generate data. Mistakes of sloth generate only regret.</p><p style=\"text-align: center; font-style: italic;\">Movement completes the circuit. Stagnation breaks it.</p>"},
                {"id":"CRCLT_05 - STRENGTH","type":"post","isAnchor":false,"content":"<h2>CRCLT_05 - STRENGTH</h2><p style=\"font-size: 2rem; text-align: center; font-style: italic;\">\"Develop the strength to do bold things.\"</p><hr><p style=\"text-align: center;\">Machiavelli called it <em>virtù</em>—not virtue, but operational power. The capability to act decisively.</p><p style=\"text-align: center; font-style: italic;\">This strength isn't given. It is systematically developed by aligning all four weights: Spiritual, Emotional, Mental, and Physical.</p>"},

                // === TRACK LINKS ===
                {"id":"PLAY_BRAND_BEAT","type":"track","isAnchor":false,"title":"Brand Beat - LUCTHELEO"},
                {"id":"PLAY_RUMINATE","type":"track","isAnchor":false,"title":"Ruminate - LUCTHELEO"}
            ];
            // --- END DATA FIX ---

            allPosts = contentData.filter(item => item.type === 'post');
            chaosGridItems = contentData.filter(item => item.type === 'post' || item.type === 'track');

            renderFilterNav();
            renderLinks(chaosGridItems, 'all'); // This will now call the simple list renderer
            setupInteractionListeners(); 
            setupBinaryGlitch();
            setupVideoBreathingEffect();
            // REMOVED startChaosInterval(); 
            setupMasterToggle(); 
            initializeAudioPlayer();
            
            document.getElementById('link-field').addEventListener('scroll', resetInactivityTimer);

        } catch (error) {
            console.error("Failed to load content:", error);
            dynamicField.innerHTML = '<p style="color:red; text-align:center;">Error: Could not load site content.</p>';
        }
    }

    // === IDLE TIMER FUNCTIONS ===
    function revertToChaos() {
        const activeFilter = document.querySelector('#filter-nav .active');
        if (activeFilter && activeFilter.dataset.filter !== 'all') { 
            activeFilter.classList.remove('active');
            const ltlLink = document.querySelector('#filter-nav [data-filter="all"]');
            if (ltlLink) ltlLink.classList.add('active');

            // Logic to check for favorites when reverting
            let p;
            if (tempFavorites.length > 0) {
                p = chaosGridItems.filter(item => tempFavorites.includes(item.id));
                renderLinks(p, 'favorites');
            } else {
                p = chaosGridItems;
                renderLinks(p, 'all'); // This will call the simple list renderer
            }
        }
    }

    function resetInactivityTimer() {
        clearTimeout(inactivityTimer);
        const activeFilter = document.querySelector('#filter-nav .active');
        // This logic is fine, but it reverts to 'all', which will show favs if any exist, or all if not. Correct.
        if (activeFilter && activeFilter.dataset.filter !== 'all') {
             inactivityTimer = setTimeout(revertToChaos, 10000); 
        }
    }
    // === END IDLE TIMER FUNCTIONS ===


    function showVisualizer() {
        if (!isVfxOn) return; 
        visualizerOverlay.style.opacity = '1';
    }

    function hideVisualizer() {
        visualizerOverlay.style.opacity = '0';
    }

    // === HELPER FUNCTION ===
    // This central function controls the filter logic.
    function setBrandFilter(trackId) {
        if (trackId === "PLAY_BRAND_BEAT") {
            brandFilterOverlay.style.opacity = '0.7'; 
        } else {
            brandFilterOverlay.style.opacity = '0';
        }
    }
    
    // MODIFIED: Added Media Session state update
    function playAudio() {
        if (!isPlayerInitialized) initializeAudioPlayer();
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
        track.play().catch(error => console.error("Error playing audio:", error));
        
        if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = 'playing';
        }
    }

    // MODIFIED: Added Media Session state update
    function pauseAudio() {
        track.pause();
        if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = 'paused';
        }
    }
    
    // MODIFIED: Added Media Session API for background audio/lock screen controls
    function loadAndPlayTrack(trackId) {
        if (!trackLibrary[trackId]) return; 

        const trackData = trackLibrary[trackId];
        
        track.src = trackData.path; 
        trackInfoEl.textContent = trackData.title; 
        
        // === USE THE HELPER FUNCTION ===
        setBrandFilter(trackId);
        
        track.load();
        playAudio(); 
        
        seekBar.value = 0;
        currentTimeEl.textContent = '0:00';
        durationIsSet = false; 

        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: trackData.title.split(' - ')[0],
                artist: trackData.title.split(' - ')[1],
                artwork: [
                    { src: 'img/ltl_logo.PNG', sizes: '300x150', type: 'image/png' }
                ]
            });
            
            navigator.mediaSession.setActionHandler('play', playAudio);
            navigator.mediaSession.setActionHandler('pause', pauseAudio);
        }
    }

    // === This is the updated function from the last request ===
    function setupMasterToggle() {
        logoContainer.addEventListener('click', () => {
            
            if (track.paused) {
                // --- NEW BEHAVIOR: Play a random track ---
                const trackIds = Object.keys(trackLibrary); 
                const randomIndex = Math.floor(Math.random() * trackIds.length);
                const randomTrackId = trackIds[randomIndex];
                loadAndPlayTrack(randomTrackId);

            } else {
                // --- EXISTING BEHAVIOR: Toggle VFX ---
                isVfxOn = !isVfxOn; 
                logoContainer.classList.toggle('vfx-disabled', !isVfxOn); 
                
                if (isVfxOn) { 
                    showVisualizer(); 
                } else {
                    hideVisualizer(); 
                    rainCtx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
                    vCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
                }
            }
        });
    }
    // === END OF UPDATED FUNCTION ===

    function initializeAudioPlayer() {
        if (isPlayerInitialized) return;
        
        track.volume = 0.25;
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioCtx.createAnalyser();
        source = audioCtx.createMediaElementSource(track);
        source.connect(analyser);
        analyser.connect(audioCtx.destination); // Audio is routed through analyser
        analyser.fftSize = 256;
        
        // This handles both leaving and returning to the page per your request
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                // --- User left the tab: Force VFX OFF
                isVfxOn = false; 
                logoContainer.classList.add('vfx-disabled'); 
                hideVisualizer(); 
                rainCtx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
                vCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
            } else if (document.visibilityState === 'visible') {
                // --- User returned: Resume context (for when they re-enable VFX)
                if (audioCtx && audioCtx.state === 'suspended') {
                    audioCtx.resume().catch(e => console.error("AudioContext resume failed:", e));
                }
                // Visuals stay OFF until user manually taps logo.
            }
        });
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        playPauseBtn.addEventListener('click', () => {
            if (track.paused) {
                playAudio();
            } else {
                pauseAudio();
            }
        });
        
        // === Using SVG constants in event listeners ===
        track.addEventListener('play', () => {
            playPauseBtn.innerHTML = svgPauseIcon;
            logoContainer.classList.add('experience-active');
            logoPromptContainer.style.opacity = '0';
            logoImage.style.animationPlayState = 'paused';
            logoImage.style.filter = '';
        });
        
        track.addEventListener('pause', () => {
            playPauseBtn.innerHTML = svgPlayIcon;
            logoContainer.classList.remove('experience-active');
            logoPromptContainer.style.opacity = '1';
            logoImage.style.animationPlayState = 'running';
            logoImage.style.filter = '';
        });
        
        volumeBar.addEventListener('input', (e) => track.volume = e.target.value);
        seekBar.addEventListener('input', (e) => track.currentTime = e.target.value);

        const setDuration = () => {
            if (track.duration && isFinite(track.duration)) {
                seekBar.max = track.duration;
                durationEl.textContent = formatTime(track.duration);
                durationIsSet = true;
            }
        };
        track.addEventListener('loadedmetadata', setDuration);

        track.addEventListener('timeupdate', () => {
            const currentTime = track.currentTime;
            seekBar.value = currentTime;
            currentTimeEl.textContent = formatTime(currentTime);
            if (!durationIsSet) setDuration();
        });

        track.addEventListener('ended', () => {
            playPauseBtn.innerHTML = svgPlayIcon;
            track.currentTime = 0;
        });
        // === END OF SECTION ===

        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
        }
        
        function draw() {
            requestAnimationFrame(draw);
            
            if (track.paused || !isVfxOn) {
                if (rainParticles.length > 0) rainParticles = [];
                rainCtx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
                vCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
                hideVisualizer();
                return;
            }
            
            showVisualizer(); 

            const freqData = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(freqData);
            
            const mids = freqData.slice(2, 21);
            const avg = (arr) => arr.reduce((sum, val) => sum + val, 0) / (arr.length || 1);
            
            let rawMidBoost = avg(mids) / 255;
            const midBoost = Math.min(1.0, rawMidBoost * 1.5);

            const glowSize = 8 + midBoost * 30;
            const glowOpacity = 0.5 + midBoost * 0.5;
            logoImage.style.filter = `
                brightness(${1 + midBoost * 0.5}) 
                drop-shadow(0 0 ${glowSize}px rgba(255, 255, 255, ${glowOpacity}))
            `;
            
            drawBackgroundVisualizer(freqData, midBoost);
            drawRain(midBoost);
        }
        
        draw();
        isPlayerInitialized = true;
    }
    
    function drawBackgroundVisualizer(freqData, midBoost) {
        const bassFrequencies = freqData.slice(0, Math.floor(freqData.length * 0.2));
        const averageBass = bassFrequencies.reduce((a, b) => a + b, 0) / (bassFrequencies.length || 1);
        const normalizedBass = averageBass / 255;

        vCtx.globalAlpha = 0.1 + normalizedBass * 0.4;
        bgVideo.style.filter = `grayscale(90%) contrast(150%) brightness(${0.4 + normalizedBass * 0.2})`;

        const now = Date.now();
        if (midBoost > midBoostThreshold && (now - lastRelocateTime > 100)) { 
             relocateBrandedChars();
             lastRelocateTime = now;
        }

        vCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
        
        if (midBoost > midBoostThreshold) lifelineOpacity = Math.min(0.6, lifelineOpacity + midBoost * 0.8);
        else lifelineOpacity = Math.max(0.0, lifelineOpacity - 0.01);
        
        if (brandedCells.length > 1) {
            vCtx.lineWidth = 1.0;
            let allLineCoords = [];
            for (let i = 0; i < brandedCells.length; i++) {
                const start = brandedCells[i];
                const otherChars = brandedCells.filter((_, idx) => idx !== i);
                const numConnections = Math.min(3, otherChars.length);
                while (otherChars.length > 0 && allLineCoords.filter(l => l.start === start).length < numConnections) {
                    const randomIndex = Math.floor(Math.random() * otherChars.length);
                    const end = otherChars.splice(randomIndex, 1)[0];
                    allLineCoords.push({ start, end });
                }
            }
            
            for (const line of allLineCoords) {
                vCtx.beginPath();
                vCtx.moveTo(line.start.x + charSize / 2, line.start.y + charSize / 2);
                vCtx.lineTo(line.end.x + charSize / 2, line.end.y + charSize / 2);
                vCtx.strokeStyle = `rgba(255, 255, 255, ${lifelineOpacity})`;
                vCtx.stroke();
            }
        }
        
        brandedCells.forEach(cell => {
            let vocalIntensity = midBoost * 2;
            let finalOpacity = Math.min(1, vocalIntensity * 1.5);
            vCtx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
            vCtx.font = `${charSize + vocalIntensity * 15}px 'Roboto Mono', monospace`;
            vCtx.shadowColor = `rgba(255, 255, 255, ${finalOpacity * 0.7})`;
            vCtx.shadowBlur = finalOpacity * 20;
            vCtx.fillText(cell.char, cell.x, cell.y);
        });
        vCtx.shadowBlur = 0;
    }

    function drawRain(midBoost) {
        rainCtx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
        
        if (Math.random() < midBoost * 0.5) {
            rainParticles.push({
                x: Math.random() * rainCanvas.width,
                y: 0,
                char: currencySymbols[Math.floor(Math.random() * currencySymbols.length)],
                speed: 0.5 + Math.random() * 0.5,
                drift: Math.random() * 0.5 - 0.25,
                opacity: 0.5 + Math.random() * 0.5,
                size: 8 + Math.random() * 4,
            });
        }
        
        for (let i = rainParticles.length - 1; i >= 0; i--) {
            const p = rainParticles[i];
            p.y += p.speed;
            p.x += Math.sin(p.y * 0.05) * p.drift;
            
            if (p.y > rainCanvas.height) {
                rainParticles.splice(i, 1);
            } else {
                rainCtx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.5})`;
                rainCtx.font = `${p.size}px 'Roboto Mono', monospace`;
                rainCtx.fillText(p.char, p.x, p.y);
            }
        }
    }

    function resizeCanvas() {
        visualizerCanvas.width = window.innerWidth;
        visualizerCanvas.height = window.innerHeight;
        rainCanvas.width = logoContainer.offsetWidth;
        rainCanvas.height = logoContainer.offsetHeight;
    }

    function relocateBrandedChars() {
        const brandChars = brandedText.replace(/\s/g, '');
        if (brandedCells.length < 15) {
            if (Math.random() > 0.5 || brandedCells.length < 2) addBrandedChar(brandChars);
        } else if (brandedCells.length >= 15 && brandedCells.length < 25) {
            if (Math.random() > 0.5) removeBrandedChar();
            else addBrandedChar(brandChars);
        } else if (brandedCells.length >= 25) {
            removeBrandedChar();
        }
    }

    function addBrandedChar(brandChars) {
        brandedCells.push({
            x: Math.random() * visualizerCanvas.width,
            y: Math.random() * visualizerCanvas.height,
            char: brandChars[Math.floor(Math.random() * brandChars.length)]
        });
    }

    function removeBrandedChar() {
        if (brandedCells.length > 0) {
            brandedCells.splice(Math.floor(Math.random() * brandedCells.length), 1);
        }
    }
    
    function getContentType(id) { return id.split('_')[0]; }
    
    // === THIS FUNCTION IS UPDATED (FILTER LOGIC) ===
    function renderFilterNav() { 
        const c = [...new Set(chaosGridItems.map(p => getContentType(p.id)))]; 
        let f = `<a href="#" class="filter-link active" data-filter="all">LTL</a>`; 
        c.sort().forEach(t => f += `<a href="#" class="filter-link" data-filter="${t}">${t}</a>`); 
        filterNav.innerHTML = f; 
        filterNav.addEventListener('click', e => { 
            e.preventDefault(); 
            if (e.target.classList.contains('filter-link')) { 
                const fi = e.target.dataset.filter; 
                document.querySelector('#filter-nav .active').classList.remove('active'); 
                e.target.classList.add('active'); 
                
                let p; // Define p
                if (fi === 'all') {
                    if (tempFavorites.length > 0) {
                        // STATE 2: Show Favorites
                        p = chaosGridItems.filter(item => tempFavorites.includes(item.id));
                        renderLinks(p, 'favorites'); // Pass a 'favorites' state
                    } else {
                        // STATE 1: No Favorites, show ALL content in a list
                        p = chaosGridItems;
                        renderLinks(p, 'all'); // Pass 'all' state
                    }
                } else {
                    // This is the normal filter logic (e.g., show "VOID")
                    p = chaosGridItems.filter(po => getContentType(po.id) === fi); 
                    renderLinks(p, fi); 
                }
                
                clearTimeout(inactivityTimer); 
                if (fi !== 'all' && fi !== 'favorites') { // Only set timer if not on LTL/Favs
                    inactivityTimer = setTimeout(revertToChaos, 10000);
                }
            } 
        }); 
    }
    
    // === THIS FUNCTION IS REWRITTEN ===
    // Removed all "chaos grid" logic. All content now renders as a simple, stable list.
    function renderLinks(p, a) { // Note: 'a' no longer needed but helps logic
        const s = document.getElementById('scroll-indicator'); 
        Array.from(anchorNav.children).forEach(c => { if (c.id !== 'scroll-indicator') anchorNav.removeChild(c); }); 
        dynamicField.innerHTML = ''; 
        
        contentData.filter(i => i.isAnchor).forEach(an => { 
            const link = document.createElement('a'); 
            link.textContent = an.id; 
            link.className = 'nav-link'; 
            link.dataset.id = an.id; 
            anchorNav.appendChild(link);
            link.addEventListener('click', e => { 
                e.preventDefault();
                showModal(an.id);
            }); 
        }); 
        
        // This is now the ONLY renderer. Chaos grid logic is gone.
        dynamicField.classList.add('filtered-view'); 
        document.getElementById('interaction-instructions').style.display = 'none'; // Hide instructions
        // REMOVED call to stopChaosInterval()
        
        p.forEach(i => { 
            const linkText = i.type === 'track' ? i.title : i.id;
            const link = document.createElement('a'); link.textContent = linkText; link.className = 'nav-link'; link.dataset.id = i.id; 

            // Add the favorite class if the item is in the array
            if (tempFavorites.includes(i.id)) {
                link.classList.add('is-favorite');
            }

            dynamicField.appendChild(link); 
        }); 
        
        // === UPDATED INDICATOR LOGIC ===
        setTimeout(() => { 
            const s = document.getElementById('scroll-indicator');
            // This now correctly checks the main scroll area (mainScrollArea), not the body
            if (s && mainScrollArea.scrollHeight > mainScrollArea.clientHeight) s.style.opacity = '0.8'; // Set to 0.8 for a good pulse
            else if (s) s.style.opacity = '0'; 
        }, 100); 
    }

    // === ALL CHAOS FUNCTIONS ARE NOW DELETED ===
    // DELETED regenerateChaosGrid()
    // DELETED startChaosInterval()
    // DELETED stopChaosInterval() function definition
    
    // === THIS FUNCTION IS REWRITTEN ===
    // Removed ALL drag logic (dragTimeout, isDragging, pointerdown, pointermove, user-select-disabled)
    // Now ONLY handles single and double tap logic.
    function setupInteractionListeners() {
        // These track single vs double taps
        let lastTap = 0;
        let lastTapTarget = null;
        let singleTapTimer;
        
        // Only one listener is needed now: pointerup
        dynamicField.addEventListener('pointerup', e => { 
            
            const target = e.target.closest('.nav-link'); 
            if (!target || !dynamicField.contains(target)) return; // Not a link, bail.

            const now = new Date().getTime();
            const timesince = now - lastTap;

            if ((timesince < 300) && (timesince > 0) && (lastTapTarget === target)) {
                // --- DOUBLE TAP LOGIC ---
                clearTimeout(singleTapTimer); // Cancel the single-tap

                const linkId = target.dataset.id;
                const favIndex = tempFavorites.indexOf(linkId);

                if (favIndex > -1) {
                    // Already a fav, so REMOVE it
                    tempFavorites.splice(favIndex, 1);
                    target.classList.remove('is-favorite');
                } else {
                    // Not a fav, so ADD it
                    tempFavorites.push(linkId);
                    target.classList.add('is-favorite');
                }
                
                lastTap = 0; // Reset tap tracker
                lastTapTarget = null;

            } else {
                // --- SINGLE TAP LOGIC ---
                // Wait 300ms to see if it's a double-tap
                singleTapTimer = setTimeout(() => {
                    const linkId = target.dataset.id;
                    if (trackLibrary[linkId]) {
                        loadAndPlayTrack(linkId); 
                    } else {
                        showModal(linkId); 
                    }
                }, 300);
            }
            
            lastTap = now;
            lastTapTarget = target;
        });
    }

    function setupVideoBreathingEffect() { const videoContainer = document.getElementById('video-background-container'); if (!videoContainer) return; function breathe() { videoContainer.style.filter = 'blur(4px)'; setTimeout(() => { videoContainer.style.filter = 'blur(0px)'; }, 2500); const randomInterval = Math.random() * 6000 + 5000; setTimeout(breathe, randomInterval + 2500); } setTimeout(breathe, 4000); }
    function setupBinaryGlitch() { const o = binarySignature.textContent; let i = false; const t = () => { if (i) return; i = true; let g = setInterval(() => { binarySignature.textContent = o.split('').map(c => (c === '1' || c === '0') ? (Math.random() > 0.5 ? '1' : '0') : c).join(''); }, 50); setTimeout(() => { clearInterval(g); binarySignature.textContent = o; i = false; }, 1000); }; setInterval(t, 8000 + Math.random() * 5000); }
    
    function showModal(contentId) {
        const item = contentData.find(d => d.id === contentId);
        if (item) {
            let finalContent = item.content;
            if (item.type === 'post' && !item.content.includes('<h2>')) {
                finalContent = `<h2>${item.id}</h2>` + item.content;
            }
            modalBody.innerHTML = finalContent;
            modal.style.display = 'flex';
        }
    }

    function hideModal() {
        modal.style.display = 'none';
        modalBody.innerHTML = ''; 
    }

    closeBtn.addEventListener('click', hideModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });
    
    // === ENTRY POINT MODIFIED ===
    // Click listener is now on splashContent, not enterBtn
    splashContent.addEventListener('click', () => {
        
        requestAppFullscreen(); 

        splashScreen.style.opacity = '0';
        splashScreen.addEventListener('transitionend', () => {
            splashScreen.style.display = 'none';
        });

        mainContainer.style.display = 'flex';
        player.style.display = 'flex';

        // === THIS IS THE FIX FOR MOBILE VIDEO ===
        // We must call .play() on the muted video *inside* the user tap event,
        // before we initialize the audio context (which happens in initializeSite/playAudio)
        const playPromise = bgVideo.play();
        if (playPromise !== undefined) {
            playPromise.catch(e => console.warn("Background video autoplay was blocked by browser."));
        }
        // === END FIX ===

        initializeSite(); 

        // === CALL THE HELPER FUNCTION ON LOAD ===
        setBrandFilter("PLAY_BRAND_BEAT");

        playAudio(); 
    });
    // === END ENTRY POINT ===

});


function requestAppFullscreen() {
    const el = document.documentElement; 

    if (el.requestFullscreen) {
        el.requestFullscreen().catch(err => console.error(`Fullscreen Error: ${err.message}`));
    } else if (el.webkitRequestFullscreen) { // Safari
        el.webkitRequestFullscreen().catch(err => console.error(`Fullscreen Error: ${err.message}`));
    } else if (el.msRequestFullscreen) { // IE11
        el.msRequestFullscreen().catch(err => console.error(`Fullscreen Error: ${err.message}`));
    }
}