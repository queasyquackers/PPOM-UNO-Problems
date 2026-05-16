// PracticeOS Welcome Screen — Magazine Issue Cover
(function () {
    'use strict';

    // Globals may be `const` at script top-level (not on window) — fall back to bare names.
    const block =
        (typeof window !== 'undefined' && window.BLOCK_INFO) ? window.BLOCK_INFO :
        (typeof BLOCK_INFO !== 'undefined') ? BLOCK_INFO :
        { name: 'Block 3', subtitle: 'Medical Sciences', volumeRoman: 'III' };
    const sections =
        (typeof window !== 'undefined' && window.SECTIONS) ? window.SECTIONS :
        (typeof SECTIONS !== 'undefined') ? SECTIONS : [];
    const tests =
        (typeof window !== 'undefined' && window.testsToLoad) ? window.testsToLoad :
        (typeof testsToLoad !== 'undefined') ? testsToLoad : [];
    const sectionForTest =
        (typeof window !== 'undefined' && window.getTestSection) ? window.getTestSection :
        (typeof globalThis !== 'undefined' && globalThis.getTestSection) ? globalThis.getTestSection :
        (() => null);

    const SECTION_KEY = 'practiceos_currentSection';
    const LAST_LECTURE_KEY = 'practiceos_lastLectureBySection';

    const currentSectionId = localStorage.getItem(SECTION_KEY);
    const lastBySection = (() => {
        try { return JSON.parse(localStorage.getItem(LAST_LECTURE_KEY) || '{}'); }
        catch { return {}; }
    })();

    // --- Time-based greeting ---
    const hour = new Date().getHours();
    const greeting =
        hour < 5  ? 'A late hour.' :
        hour < 12 ? 'Good morning.' :
        hour < 18 ? 'Good afternoon.' :
                    'Good evening.';

    // --- Aggregate progress stats ---
    let totalAnswered = 0;
    let totalCorrect = 0;
    const sectionStats = {};

    tests.forEach(test => {
        const sec = sectionForTest(test.name);
        if (sec) {
            if (!sectionStats[sec.id]) {
                sectionStats[sec.id] = { lectures: 0, answered: 0, correct: 0, touched: 0 };
            }
            sectionStats[sec.id].lectures++;
        }

        const stored = localStorage.getItem(`examProgress_${test.name}`);
        if (!stored) return;
        try {
            const state = JSON.parse(stored);
            const ans = state.userAnswers.filter(a => a.isSubmitted).length;
            const cor = state.userAnswers.filter(a => a.isCorrect).length;
            totalAnswered += ans;
            totalCorrect += cor;
            if (sec && ans > 0) {
                sectionStats[sec.id].answered += ans;
                sectionStats[sec.id].correct += cor;
                sectionStats[sec.id].touched++;
            }
        } catch { /* ignore */ }
    });

    const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : null;

    // --- Editorial pull-quotes ---
    const pullquotes = [
        '"Read the last sentence first. It tells you what the question is really asking."',
        '"Process of elimination is not guessing. It is a skill."',
        '"Trust your first instinct, until you find contradictory evidence."',
        '"Always read the explanation, even for the ones you got right."',
        '"Teaching the concept to someone else is the highest form of practice."',
        '"A little practice every day. The brain remembers cadence."',
        '"When in doubt — flag it, and move on."',
        '"Look for the demographics. Age and sex are clues, not decoration."',
        '"The cumulative exam is a different animal. Treat it that way."',
        '"You are prepared. Take a breath."',
    ];
    const pullquote = pullquotes[Math.floor(Math.random() * pullquotes.length)];

    // --- Build the cover ---
    const welcomeScreen = document.createElement('div');
    welcomeScreen.id = 'welcome-screen';
    welcomeScreen.className = 'fixed inset-0 z-50 flex items-start justify-center transition-opacity duration-500';

    const frame = document.createElement('div');
    frame.className = 'cover-frame';

    // Dateline
    const datelineParts = [];
    datelineParts.push(`${tests.length} lectures across ${sections.length} sections`);
    if (totalAnswered > 0) datelineParts.push(`${totalAnswered} questions answered`);
    if (accuracy !== null) datelineParts.push(`${accuracy}% accuracy`);
    const dateline = datelineParts.join('  ·  ');

    // Build section rows HTML
    const sectionRowsHTML = sections.map(sec => {
        const stats = sectionStats[sec.id] || { lectures: 0, touched: 0 };
        const isCurrent = sec.id === currentSectionId;
        const weeksLabel = sec.weeks.length > 1
            ? `Weeks ${sec.weeks[0]}–${sec.weeks[sec.weeks.length - 1]}`
            : `Week ${sec.weeks[0]}`;
        const progressLine = stats.touched > 0
            ? `<span class="cover-section-progress">${stats.touched} of ${stats.lectures} underway</span>`
            : '';
        return `
            <li class="cover-section ${isCurrent ? 'is-current' : ''}" data-section-id="${sec.id}">
                <span class="cover-section-numeral">${sec.romanNumeral}.</span>
                <div class="cover-section-body">
                    <h3 class="cover-section-name">${sec.name}</h3>
                    <p class="cover-section-dek">${sec.dek}</p>
                </div>
                <div class="cover-section-meta">
                    <span class="cover-section-meta-line">${weeksLabel}</span>
                    <span class="cover-section-meta-line">${stats.lectures} lectures</span>
                    ${progressLine}
                </div>
            </li>
        `;
    }).join('');

    // Resume footer
    let resumeBlock = '';
    if (currentSectionId) {
        const sec = sections.find(s => s.id === currentSectionId);
        const lastName = lastBySection[currentSectionId];
        const lastTest = lastName && tests.find(t => t.name === lastName);
        if (sec && lastTest) {
            const idMatch = lastTest.name.match(/\(([^)]+)\)/);
            const lectureId = idMatch ? idMatch[1] : '';
            resumeBlock = `
                <button class="cover-resume-btn" data-resume="1">
                    Resume ${lectureId} &middot; ${sec.name}
                </button>
                <p class="cover-keyhint">
                    Press <kbd>↵</kbd> to resume, or click a section above to begin elsewhere
                </p>
            `;
        }
    }
    if (!resumeBlock) {
        resumeBlock = `
            <p class="cover-keyhint" style="margin-top: 1.5rem;">
                Click a section above to begin
            </p>
        `;
    }

    frame.innerHTML = `
        <header class="cover-masthead">
            <div class="cover-vol">
                Vol. ${block.volumeRoman} &middot; ${block.name} &middot; ${block.subtitle}
            </div>
            <div class="cover-wordmark">Practice<em>OS</em></div>
            <p class="cover-tagline">A reading practice for medical school.</p>
        </header>

        <hr class="cover-rule is-double">

        <div class="cover-greeting">
            <h1 class="cover-greeting-text">${greeting}</h1>
            <p class="cover-dek">A reading session, when you're ready.</p>
            <p class="cover-dateline">${dateline}</p>
        </div>

        <hr class="cover-rule">

        <section>
            <h2 class="cover-toc-heading">In This Volume</h2>
            <ul class="cover-section-list">
                ${sectionRowsHTML}
            </ul>
        </section>

        <div class="cover-footer">
            ${resumeBlock}
            <p class="cover-pullquote">${pullquote}</p>
        </div>
    `;

    welcomeScreen.appendChild(frame);
    document.body.appendChild(welcomeScreen);

    // Fade in
    welcomeScreen.style.opacity = '0';
    requestAnimationFrame(() => { welcomeScreen.style.opacity = '1'; });

    // --- Interactions ---

    const dismissCover = () => {
        welcomeScreen.style.opacity = '0';
        welcomeScreen.style.pointerEvents = 'none';
        setTimeout(() => welcomeScreen.remove(), 400);
        document.removeEventListener('keydown', handleKey, { capture: true });
    };

    const enterSection = (sectionId, lectureName) => {
        if (!window.app || typeof window.app.loadTestByName !== 'function') {
            console.warn('window.app.loadTestByName not available');
            return;
        }
        const sec = sections.find(s => s.id === sectionId);
        if (!sec) return;

        // Pick the lecture: explicit > last-touched > first in section
        let targetName = lectureName;
        if (!targetName) {
            targetName = lastBySection[sectionId];
        }
        if (!targetName) {
            const firstInSection = tests.find(t => sectionForTest(t.name)?.id === sectionId);
            if (firstInSection) targetName = firstInSection.name;
        }
        if (!targetName) return;

        localStorage.setItem(SECTION_KEY, sectionId);
        window.app.loadTestByName(targetName);
        dismissCover();
    };

    // Section row clicks
    frame.querySelectorAll('.cover-section').forEach(li => {
        li.addEventListener('click', () => {
            const id = li.dataset.sectionId;
            enterSection(id);
        });
    });

    // Resume button
    const resumeBtn = frame.querySelector('[data-resume]');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            enterSection(currentSectionId, lastBySection[currentSectionId]);
        });
    }

    // Enter key — resume if possible
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.stopImmediatePropagation();
            if (currentSectionId && lastBySection[currentSectionId]) {
                enterSection(currentSectionId, lastBySection[currentSectionId]);
            }
            // If nothing to resume, Enter is a no-op — user must pick a section.
        } else if (e.key === 'Escape') {
            // Close cover only if there's something to fall back to
            if (currentSectionId) dismissCover();
        }
    };
    document.addEventListener('keydown', handleKey, { capture: true });
})();
