// --- STABLE SIMPLEX NOISE LIBRARY ---
const noise=function(){var e,t=new(function(){this.grad3=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),this.p=new Uint8Array([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180]),this.perm=new Uint8Array(512),this.gradP=new Uint8Array(512),this.F2=.5*(Math.sqrt(3)-1),this.G2=(3-Math.sqrt(3))/6;for(var r=0;r<256;r++)this.perm[r]=this.perm[r+256]=this.p[r],this.gradP[r]=this.gradP[r+256]=this.perm[r]%12});return t.prototype.noise2D=function(e,t){var r,i,o,s,a,n,d,h,p=0,c=0,l=0,u=this.perm,f=this.grad3,m=e+t,g=Math.floor(m),v=g-m*this.F2,x=Math.floor(e+v),y=Math.floor(t+v),M=e-x+g*this.G2,_=t-y+g*this.G2;x>y?(n=1,d=0):(n=0,d=1);var w=_-n+this.G2,S=_-1+2*this.G2,b=M-d+this.G2,q=M-1+2*this.G2,F=x&255,P=y&255,C=.5-M*M-_*_;C>0?(r=u[F+u[P]]%12,p=(C*=C)*C*(f[r]*M+f[r+1]*_)):p=0;var A=.5-b*b-w*w;A>0?(i=u[F+n+u[P+d]]%12,c=(A*=A)*A*(f[i]*b+f[i+1]*w)):c=0;var z=.5-q*q-S*S;z>0?(o=u[F+1+u[P+1]]%12,l=(z*=z)*z*(f[o]*q+f[o+1]*S)):l=0;var N=70*(p+c+l);return N},new t}();


document.addEventListener('DOMContentLoaded', () => {
    // This is the stable, working version of your script provided in the last prompt.
    // I will now merge the "Autoglyph Wall" into this.
    
    // Original working content data
    const contentData = [
        {
            "id": "MNFST",
            "type": "page",
            "isAnchor": true,
            "content": "<h2>MNFST</h2><h3>LUCTHELEO | Audio.Alchemist</h3><p>Pleasantly lost in the space between signal and static.</p><p>I create from the overflow. Twenty-three years navigating the intersection of classical training and digital chaos, Louisiana soul and systematic precision. Central Louisiana roots run deep—music creation since 2007, formal production education, life coaching training.</p><p>Someone who knows a little about a lot and a lot about a little.</p><p>The problem isn't lack of creativity. The problem is creative abundance without systematic capture.</p><p>Most creative partnerships scatter brilliant ideas across sessions like seeds in the wind. Concepts emerge, energy builds, then everything disappears into the void between meetings. I solve creative overflow through systematic documentation, organized development, and shared ownership of unused collaborative assets.</p><h3>The Architecture</h3><p><b>HTML.</b> Core creative foundation. Your authentic message before market pressure shapes it.</p><p><b>CSS.</b> How you present yourself when the world is watching. Visual identity that serves the work, not ego.</p><p><b>JS.</b> Market function without compromise. Audience connection that maintains creative integrity.</p><p>Three layers. Each builds upon the previous. Complete creative architecture emerges through systematic development rather than creative chaos.</p><h3>The Process</h3><p>Sessions combine immediate creative work with transferable systematic methods. You leave with both completed material and organizational approaches that serve future projects. This isn't dependency creation—it's systematic capability building.</p><p>Documentation captures everything. Project folders organize by development layer. Session recordings preserve decisions and breakthroughs. Nothing gets lost. Everything builds upon everything.</p><p>Unused creative assets become shared catalog content. Your collaborative overflow generates ongoing revenue rather than disappearing into digital archives. Creative partnership becomes creative investment.</p><h3>The Foundation</h3><p>Louisiana spiritual tradition meets contemporary creative technology. Prayer and systematic organization. Ancestral wisdom and digital precision. The sacred and the professional occupy the same space without contradiction.</p><p>All decisions start from spiritual foundation, move through abstract glimpses, process through mind and memory, then manifest through systematic action. The heart determines application. The body executes with documentation.</p><p>Excellence is measured by commitment. What gets written becomes real. The work speaks for itself.</p><h3>The Practice</h3><p><b>Order Line Conversation.</b> Fifteen minutes. Creative alignment assessment without sales pressure.</p><p><b>REVERIE Foundation.</b> Two hours. Complete project architecture establishment. Systematic organization that supports long-term creative development.</p><p><b>RUMINATE Development.</b> Focused sessions. CSS and JS layer building through collaborative systematic approaches.</p><p>No ego. Just work. Systematic creative development for artists ready to invest in organized capability building rather than casual creative exploration.</p><h3>The Philosophy</h3><p>I don't explain the spaces. I invite you to wander them.</p><p>Creative development serves the work, not the worker. Systematic approaches honor both artistic authenticity and professional sustainability. Spiritual foundation supports rather than opposes technological precision.</p><p>We are signal through static. Analog intuition meets digital creation. Louisiana heritage informs contemporary creative architecture. The mysterious and the systematic coexist without contradiction.</p><h3>Contact Protocol</h3><p>Direct communication via Telegram @luctheleo. Systematic creative development begins with Order Line Conversation. Assessment precedes engagement. Alignment determines collaboration.</p><p><b>L-01001100 T-01010100 L-01001100</b></p><p>Transdisciplinary artist. Systematic creative development. Louisiana roots, Atlanta operations.</p><p>Signal through the static. Systematic transformation of creative potential into organized reality.</p><p>No ego. Just work.</p>"
        },
        {
            "id": "CRTVDVLPMNT",
            "type": "page",
            "isAnchor": true,
            "content": "<h2>CRTVDVLPMNT</h2><h3>Systematic Creative Development Overview</h3><p>Every artist has three faces: the one they know themselves to be (your <b>HTML</b>), the one they present to the world (your <b>CSS</b>), and the one that interacts with reality (your <b>JS</b>).</p><p>Our process systematically aligns these faces, transforming creative overflow into a clear, unified signal. We build not just a project, but a cohesive creative identity.</p><p style=\"text-align:center; margin-top: 2rem; margin-bottom: 2rem;\"><a href=\"#\" onclick=\"event.preventDefault(); document.getElementById('full-guide-content').style.display='block'; this.parentElement.style.display='none';\" style=\"padding: 10px 20px; border: 1px solid var(--link-color); border-radius: 5px; text-decoration: none;\">View Full Guide & Pricing</a></p><div id=\"full-guide-content\" style=\"display:none;\"><h2>REVERIE | RVR Creative Development Guide</h2><h3>Systematic Creative Development Process</h3><p><b>Development Philosophy:</b> No ego. Just work.</p><p><b>Approach:</b> Systematic transformation of creative concepts into organized, tangible results.</p><hr><h3>Process Overview</h3><p>This guide outlines our systematic approach to creative development. Our methodology transforms creative overflow into organized, documented work through structured sessions and skill transfer.</p><p><b>Core Principle:</b> You're not just receiving creative services - you're learning systematic development methods you can apply independently throughout your creative career.</p><hr><h3>The Creative Identity Framework</h3><p>We develop your creative identity using a systematic three-component approach:</p><ul><li><b>HTML Foundation (Core Content):</b> Your authentic creative message and purpose.</li><li><b>CSS Presentation (Visual Interface):</b> How you present yourself creatively.</li><li><b>JS Function (Market Operation):</b> How you operate and connect with audiences.</li></ul><hr><h3>Session Structure & Pricing</h3><p><b>Order Line Conversation (15 minutes - No charge)</b><br>A direct conversation to determine creative alignment and demonstrate our systematic approach.</p><p><b>REVERIE Foundation Session ($120 - 2 hours)</b><br>Establish your complete creative development architecture, focusing on the HTML layer (core creative foundation). You receive an organized project folder system, session documentation, a clear roadmap, and permanent portal access.</p><p><b>RUMINATE Development Sessions ($65/hour)</b><br>Systematic building and refinement of your presentation (CSS) and function (JS) layers through focused work sessions that include skill transfer and methodology education.</p><p><i><b>Member Rates Available:</b> For ongoing partnerships, rates are $100 for a monthly REVERIE session and $55/hour for RUMINATE sessions.</i></p><hr><h3>Skills You'll Develop</h3><ul><li>Systematic Organization</li><li>Creative Problem-Solving</li><li>Documentation Mastery</li><li>Independent Development</li></ul><p>Direct contact: Telegram @luctheleo</p></div>"
        },
        {
            "id": "RQST",
            "type": "page",
            "isAnchor": true,
            "content": "<h2>Booking & Contact</h2><h3>Free Consultation (Order Line Conversation)</h3><p>To begin, please request a free 15-minute consultation to determine creative alignment. This is the first step for all new projects.</p><p style=\"text-align:center; margin-top: 1rem; margin-bottom: 2rem;\"><a href=\"https://forms.gle/8S2BXZTp2qmWLoKo6\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"padding: 10px 20px; border: 1px solid var(--link-color); border-radius: 5px; text-decoration: none;\">Open Free Consultation Form</a></p><h3>Direct Booking & Socials</h3><p>For returning clients or other inquiries, use the links below.</p><ul><li><a href=\"https://calendly.com/hghnoirfrq/30min\" target=\"_blank\" rel=\"noopener noreferrer\">Book a Session (Calendly)</a></li><li><a href=\"https://linktr.ee/luctheleo\" target=\"_blank\" rel=\"noopener noreferrer\">View All Links (Linktree)</a></li></ul><h3>Contact & Payment</h3><p><b>Direct Communication:</b> Telegram @luctheleo</p><p><b>Payment for Services:</b> CashApp $NoEgoJustWork</p>"
        },
        {
            "id": "VOID_017 - home_LA",
            "type": "post",
            "isAnchor": false,
            "content": "<h2>VOID_017 - home_LA</h2><div class='embed-container'><video style='width:100%;' controls><source src='videos/home_LA1.mp4' type='video/mp4'></video></div>"
        },
        {
            "id": "SGNNL_004 - JAY Z",
            "type": "post",
            "isAnchor": false,
            "content": "<div class=\"soundcloud-embed\"><iframe width=\"100%\" height=\"300\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1226734087&color=%23546464&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true\"></iframe></div>"
        },
        {
            "id": "VOID_015 - INIKO | JERICHO",
            "type": "post",
            "isAnchor": false,
            "content": "<div class=\"embed-container\"><iframe src=\"https://www.youtube.com/embed/6bRsSLMzkIQ\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>"
        },
        {
            "id": "VOID_008 - LTL | KARMA",
            "type": "post",
            "isAnchor": false,
            "content": "<div class=\"embed-container\"><iframe src=\"https://www.youtube.com/embed/IzjIBoWGJEI\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>"
        },
        {
            "id": "SGNNL_003 - ARNOHOSE DOLLAR | PAN ME",
            "type": "post",
            "isAnchor": false,
            "content": "<div class=\"soundcloud-embed\"><iframe width=\"100%\" height=\"300\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1241335237&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true\"></iframe></div>"
        },
        {
            "id": "CRCLT_02 - INKLING",
            "type": "post",
            "isAnchor": false,
            "content": "<h2>CRCLT_02 - INKLING</h2><p style=\"font-size: 2rem; text-align: center; font-style: italic;\">\"Nothing ventured, nothing gained.\"</p>"
        }
    ];
    
    // Original working DOM element selectors
    const player = document.getElementById('persistent-audio-player');
    const track = document.getElementById('track');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeBar = document.getElementById('volume-bar');
    const seekBar = document.getElementById('seek-bar');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const logoImage = document.querySelector('.logo-image');
    const bgVideo = document.getElementById('bg-video');
    const modal = document.getElementById('content-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.getElementById('modal-close-btn');
    const anchorNav = document.getElementById('anchor-nav');
    const dynamicField = document.getElementById('dynamic-field');
    
    // NEW VISUALIZER-RELATED SELECTORS AND GLOBALS
    const reverieOverlay = document.getElementById('reverie-overlay');
    const exitTranceBtn = document.getElementById('exit-trance-btn');
    const body = document.body;
    const reverieCanvas = document.getElementById('reverie-canvas');
    const reverieCtx = reverieCanvas.getContext('2d');
    
    let audioCtx, analyser, source, isPlayerInitialized = false;
    let visualizerAnimationId;
    let isImmersiveMode = false;
    let consciousnessShifted = false;
    
    // AUTOGLYPH WALL GLOBALS
    let grid = [];
    let columns, rows, fontSize = 16;
    const autoglyphChars = ['·', '✦', '✧', '0', '1', '-', '|', '+', '╱', '╲'];
    let mouse = { x: 0, y: 0, radius: 150 };
    let glitch = { active: false, counter: 0, duration: 15 };

    // Initialize the noise library.
    noise.SimplexNoise();

    function initializeSite() {
        renderLinks(); 
        document.addEventListener('click', (e) => {
            const target = e.target.closest('.nav-link');
            if (target) {
                e.preventDefault();
                showModal(target.dataset.id);
            }
        });
    }
    
    function initializeAudioPlayer() {
        if (isPlayerInitialized) return;
        
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioCtx.createAnalyser();
        source = audioCtx.createMediaElementSource(track);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
        analyser.fftSize = 256;
        
        // Setup audio controls
        function playAudio() {
            if (audioCtx.state === 'suspended') audioCtx.resume();
            track.play();
        }
        function pauseAudio() {
            track.pause();
        }
        playPauseBtn.addEventListener('click', () => track.paused ? playAudio() : pauseAudio());
        volumeBar.addEventListener('input', (e) => track.volume = e.target.value);
        seekBar.addEventListener('input', (e) => {
            track.currentTime = e.target.value;
            if (track.currentTime < 11) consciousnessShifted = false;
        });

        // Track event listeners
        track.addEventListener('play', () => { playPauseBtn.innerHTML = '&#10074;&#10074;'; });
        track.addEventListener('pause', () => {
            playPauseBtn.innerHTML = '&#9658;';
            setImmersiveMode(false);
        });
        track.addEventListener('ended', () => {
            track.currentTime = 0;
            consciousnessShifted = false;
            track.play();
        });
        track.addEventListener('timeupdate', () => {
            seekBar.value = track.currentTime;
            currentTimeEl.textContent = formatTime(track.currentTime);
            if (track.currentTime >= 10 && !isImmersiveMode && !track.paused) {
                setImmersiveMode(true);
            }
            if (track.currentTime >= 11 && !consciousnessShifted) {
                glitch.active = true;
                consciousnessShifted = true;
            }
        });
        const setDuration = () => { if (track.duration && isFinite(track.duration)) { seekBar.max = track.duration; durationEl.textContent = formatTime(track.duration); } };
        track.addEventListener('canplaythrough', setDuration);
        track.addEventListener('loadedmetadata', setDuration);

        // Visualizer setup
        window.addEventListener('resize', initWall);
        reverieCanvas.addEventListener('pointermove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        isPlayerInitialized = true;
    }

    function setImmersiveMode(active) {
        if(isImmersiveMode === active) return;
        isImmersiveMode = active;
        body.classList.toggle('immersive-mode', active);
        exitTranceBtn.classList.toggle('visible', active);
        reverieOverlay.classList.toggle('visible', active);

        if (active) {
            if (!visualizerAnimationId) {
                initWall();
                drawWall();
            }
        } else {
            if (visualizerAnimationId) {
                cancelAnimationFrame(visualizerAnimationId);
                visualizerAnimationId = null;
            }
        }
    }
    
    // --- "AUTOGLYPH WALL" VISUALIZER ---
    function initWall() {
        canvasWidth = reverieCanvas.width = window.innerWidth;
        canvasHeight = reverieCanvas.height = window.innerHeight;
        columns = Math.floor(canvasWidth / fontSize);
        rows = Math.floor(canvasHeight / fontSize);
        grid = [];
        for (let x = 0; x < columns; x++) {
            grid[x] = [];
            for (let y = 0; y < rows; y++) {
                grid[x][y] = { char: autoglyphChars[Math.floor(Math.random() * autoglyphChars.length)] };
            }
        }
    }

    function drawWall() {
        if (!isImmersiveMode || !isPlayerInitialized) {
            visualizerAnimationId = null;
            return;
        };
        const freqData = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(freqData);
        const bass = avg(freqData.slice(0, 5)) / 255;
        const highs = avg(freqData.slice(50, 100)) / 255;
        reverieCtx.fillStyle = `rgba(0, 0, 0, 0.2)`;
        reverieCtx.fillRect(0, 0, canvasWidth, canvasHeight);
        const time = Date.now() * 0.0002;
        for (let x = 0; x < columns; x++) {
            for (let y = 0; y < rows; y++) {
                if (!grid[x] || !grid[x][y]) continue;
                if (Math.random() < highs * 0.1) {
                    grid[x][y].char = autoglyphChars[Math.floor(Math.random() * autoglyphChars.length)];
                }
                const noiseValue = noise.noise2D(x * 0.1, y * 0.1 + time);
                const brightness = ((noiseValue + 1) / 2) * bass * 1.5 + 0.1;
                const dx = (x * fontSize) - mouse.x;
                const dy = (y * fontSize) - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const spotlight = Math.max(0, 1 - dist / mouse.radius);
                const finalBrightness = Math.min(1, brightness + spotlight * 0.8);
                const finalSize = fontSize + spotlight * 8;
                reverieCtx.fillStyle = `rgba(224, 224, 224, ${finalBrightness})`;
                reverieCtx.font = `${finalSize}px 'Roboto Mono', monospace`;
                reverieCtx.fillText(grid[x][y].char, x * fontSize, y * fontSize);
            }
        }
        if (glitch.active) triggerGlitchEffect();
        visualizerAnimationId = requestAnimationFrame(drawWall);
    }

    function triggerGlitchEffect() {
        if (glitch.counter >= glitch.duration) {
            glitch.active = false;
            glitch.counter = 0;
            return;
        }
        for(let i=0; i < 10; i++) {
            const y = Math.random() * canvasHeight;
            const sliceHeight = 10;
            reverieCtx.drawImage(reverieCanvas, 0, y, canvasWidth, sliceHeight, (Math.random() - 0.5) * 50, y, canvasWidth, sliceHeight);
        }
        glitch.counter++;
    }

    function avg(arr) { return arr.reduce((a, b) => a + b, 0) / (arr.length || 1); }
    
    function showModal(contentId) {
        const item = contentData.find(d => d.id === contentId);
        if (item) {
            if (contentId === 'MNFST') {
                if (!isPlayerInitialized) initializeAudioPlayer();
                player.style.display = 'flex';
                if (track.paused) {
                    track.play().catch(error => console.error("Audio autoplay failed:", error));
                }
            }
            modalBody.innerHTML = item.type === 'page' ? item.content : `<h2>${item.id}</h2>${item.content}`;
            modal.style.display = 'flex';
        }
    }
    
    function renderLinks() { 
        anchorNav.innerHTML = '';
        dynamicField.innerHTML = '';

        contentData.filter(i => i.isAnchor).forEach(anchor => {
            const l = document.createElement('a');
            l.textContent = anchor.id;
            l.className = 'nav-link';
            l.dataset.id = anchor.id;
            anchorNav.appendChild(l);
        });

        const postsToRender = contentData.filter(i => !i.isAnchor);
        const fieldRect = dynamicField.getBoundingClientRect();
        const placedRects = [];

        function rectsOverlap(rect1, rect2) {
            const padding = 40;
            return !(rect1.right + padding < rect2.left || rect1.left > rect2.right + padding || rect1.bottom + padding < rect2.top || rect1.top > rect2.bottom + padding);
        }

        postsToRender.forEach(item => {
            let newRect, attempts = 0, hasCollision = true;
            const tempLink = document.createElement('a');
            tempLink.textContent = item.id;
            tempLink.className = 'nav-link';
            tempLink.style.visibility = 'hidden';
            dynamicField.appendChild(tempLink);
            const linkWidth = tempLink.offsetWidth;
            const linkHeight = tempLink.offsetHeight;
            dynamicField.removeChild(tempLink);

            if (fieldRect.width <= linkWidth || fieldRect.height <= linkHeight) return;

            while (hasCollision && attempts < 500) {
                const randomX = Math.random() * (fieldRect.width - linkWidth);
                const randomY = Math.random() * (fieldRect.height - linkHeight);
                newRect = { left: randomX, top: randomY, right: randomX + linkWidth, bottom: randomY + linkHeight };
                hasCollision = placedRects.some(rect => rectsOverlap(rect, newRect));
                attempts++;
            }

            if (!hasCollision) {
                const link = document.createElement('a');
                link.textContent = item.id;
                link.className = 'nav-link';
                link.dataset.id = item.id;
                link.style.left = `${newRect.left}px`;
                link.style.top = `${newRect.top}px`;
                dynamicField.appendChild(link);
                placedRects.push(newRect);
            }
        });
    }

    function formatTime(s) { const m=Math.floor(s/60); const sec=Math.floor(s%60); return `${m}:${sec<10?'0':''}${sec}`; }

    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
    exitTranceBtn.addEventListener('click', () => track.pause() );
    
    initializeSite();
});