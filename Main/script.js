
// Function to generate the HTML for each card
// --- DATA SOURCE ---
const projects = [
    { roll: "22384108", name: "Gokul", topic: "SJF Scheduling", type: "blog", url: "https://aeroslayys.github.io/Gokul/" },
    { roll: "12", name: "Priya Das", topic: "Banker's Algorithm Guide", type: "video", url: "#" },
    { roll: "45", name: "Rahul V.", topic: "Memory Management Podcast", type: "audio", url: "#" },
    // Add more here from WhatsApp
];

const grid = document.getElementById('contentGrid');
const searchInput = document.getElementById('searchInput');
const typeFilter = document.getElementById('typeFilter');

function renderCards(data) {
    if (data.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-20">
                <p class="text-slate-500 text-xl italic">No matching projects found...</p>
            </div>`;
        return;
    }

    grid.innerHTML = data.map(item => {
        // Agentix-style Glow Borders & Text Gradients based on type
        const themes = {
            video: 'from-blue-500 to-cyan-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]',
            audio: 'from-purple-500 to-pink-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]',
            blog: 'from-emerald-500 to-teal-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]'
        };
        
        const glowClass = themes[item.type] || 'from-slate-500 to-slate-400';

        return `
            <div class="group relative bg-[#161b2a] rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-2 card-fade-in">
                <div class="absolute inset-0 bg-gradient-to-br ${glowClass} rounded-3xl opacity-20 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="relative bg-[#0b0f1a] rounded-[23px] p-8 h-full flex flex-col">
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-[10px] tracking-[0.2em] font-black uppercase text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
                            ${item.type}
                        </span>
                        <span class="text-xs font-mono text-blue-400/70">ID: OS-${item.roll}</span>
                    </div>

                    <h3 class="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${glowClass} transition-all duration-300">
                        ${item.topic}
                    </h3>

                    <p class="text-slate-400 text-sm mb-8">
                        Contributed by <span class="text-slate-200 font-medium">${item.name}</span>
                    </p>

                    <div class="mt-auto">
                        <a href="${item.url}" target="_blank" 
                           class="flex items-center justify-center gap-2 w-full bg-[#161b2a] border border-slate-800 text-white font-semibold py-4 rounded-2xl group-hover:bg-white group-hover:text-black transition-all duration-300">
                            Launch Project
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Logic for Search and Filtering
function performFilter() {
    const query = searchInput.value.toLowerCase();
    const type = typeFilter.value;

    const filtered = projects.filter(p => {
        const matchesSearch = p.topic.toLowerCase().includes(query) || p.roll.includes(query);
        const matchesType = type === 'all' || p.type === type;
        return matchesSearch && matchesType;
    });

    renderCards(filtered);
}

// Event Listeners
searchInput.addEventListener('input', performFilter);
typeFilter.addEventListener('change', performFilter);

// Initial Page Load
renderCards(projects);

// Search and Filter Logic
function performFilter() {
    const query = searchInput.value.toLowerCase();
    const type = typeFilter.value;

    const filtered = projects.filter(p => {
        const matchesSearch = p.topic.toLowerCase().includes(query) || p.roll.includes(query);
        const matchesType = type === 'all' || p.type === type;
        return matchesSearch && matchesType;
    });

    renderCards(filtered);
}

// Event Listeners
searchInput.addEventListener('input', performFilter);
typeFilter.addEventListener('change', performFilter);

// Initial Render
renderCards(projects);