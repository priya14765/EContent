// --- DATA SOURCE ---
const projects = [
    { 
        roll: "22384108", 
        name: "Gokul", 
        topic: "SJF Scheduling", 
        type: "Websites", 
        links: [{ label: "Launch Project", url: "https://aeroslayys.github.io/Gokul/" }] 
    },
    { 
        roll: "22384126", 
        name: "Viswapriya R", 
        topic: "Security Features in OS", 
        type: "Websites", 
        links: [{ label: "Launch Project", url: "https://priya14765.github.io/Digital-Security/" }] 
    },
    { 
        roll: "22384125, 22384112", 
        name: "Vishnupriya SV and Leeladevi M", 
        topic: "Modern Operating Systems", 
        type: "Websites", 
        links: [{ label: "Launch Project", url: "https://leela-29.github.io/os-nexus/E%20content/" }] 
    },
    { 
        roll: "22384107,22384104", 
        name: "Fuad PP and Athul Krishnan", 
        topic: "Deadlock & Banker's Algorithm", 
        type: "Websites", 
        links: [{ label: "Launch Project", url: "https://fuad1817.github.io/Understanding-Deadlock/" }] 
    },
    { 
        roll: "22384123, 22384110", 
        name: "Suba P and Indhumathi R", 
        topic: "Round Robin CPU scheduling", 
        type: "video", 
        links: [
            { label: "Watch Video", url: "https://youtube.com/watch?v=BdTvhPQxVUw&feature=shared" },
            { label: "Launch Website", url: "https://roundrobinn.lovable.app/" }
        ] 
    },
  
    { 
        roll: "22384115, 22384120", 
        name: "Shreya and Rifath", 
        topic: "Page Replacement", 
        type: "Websites", 
        links: [{ label: "Launch Project", url: "https://priya14765.github.io/Page-Replacement/" }] 
    },
        { 
        roll: "22384117, 22384109", 
        name: "Naresh and Harish", 
        topic: "Shortest Job First Scheduling", 
        type: "video", 
        links: [{ label: "Launch Project", url: "https://youtu.be/S8Bhs0wP0l8?si=9l5M2urVQmaN_aJJ" }] 
    },
    { 
        roll: "21384130", 
        name: "Vidhyshree S", 
        topic: "Multitasking and Multithreading", 
        type: "Websites", 
        links: [{ label: "Launch Project", url: "https://priya14765.github.io/Multitasking-and-Multithreading/" }] 
    },
        { 
        roll: "22384106, 22384101", 
        name: "Boda Kaveri and Arthi", 
        topic: "Disk Scheduling Algorithms", 
        type: "Websites", 
        links: [{ label: "Launch Project", url: "https://bodakaveri8.blogspot.com/" }] 
    }
];

const grid = document.getElementById('contentGrid');
const searchInput = document.getElementById('searchInput');
const typeFilter = document.getElementById('typeFilter');

function renderCards(data) {
    if (data.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-20"><p class="text-slate-500 text-xl italic font-light">No matching projects found...</p></div>`;
        return;
    }

    grid.innerHTML = data.map(item => {
        // Agentix-style Glow Borders based on type
        const themes = {
            video: 'from-blue-500 to-cyan-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]',
            audio: 'from-purple-500 to-pink-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]',
            Websites: 'from-emerald-500 to-teal-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]',
            PPT: 'from-orange-500 to-yellow-400 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]'
        };
        
        const glowClass = themes[item.type] || 'from-slate-500 to-slate-400';

        const buttonsHTML = item.links.map(link => `
            <a href="${link.url}" target="_blank" 
               class="flex items-center justify-center gap-2 w-full bg-[#161b2a] border border-slate-800 text-white text-sm font-semibold py-3 px-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300">
                ${link.label}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
        `).join('');

        return `
            <div class="group relative bg-[#161b2a] rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-2 card-fade-in">
        <div class="absolute inset-0 bg-gradient-to-br ${glowClass} rounded-3xl opacity-20 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div class="relative bg-[#0b0f1a] rounded-[23px] p-8 h-full flex flex-col">
            <div class="flex justify-between items-start gap-4 mb-6">
                <span class="text-[10px] tracking-[0.2em] font-black uppercase text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700 whitespace-nowrap">
                    ${item.type}
                </span>
                <span class="text-xs font-mono text-blue-400/70 text-right break-words leading-relaxed">
                    ID: ${item.roll}
                </span>
            </div>

                    <h3 class="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${glowClass} transition-all duration-300">
                        ${item.topic}
                    </h3>

                    <p class="text-slate-400 text-sm mb-8">
                        Contributed by <span class="text-slate-200 font-medium">${item.name}</span>
                    </p>

                    <div class="mt-auto flex flex-col gap-3">
                        ${buttonsHTML}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function performFilter() {
    const query = searchInput.value.toLowerCase();
    const type = typeFilter.value;

    const filtered = projects.filter(p => {
        const matchesSearch = p.topic.toLowerCase().includes(query) || 
                              p.roll.toLowerCase().includes(query) || 
                              p.name.toLowerCase().includes(query);
        const matchesType = type === 'all' || p.type === type;
        return matchesSearch && matchesType;
    });

    renderCards(filtered);
}

searchInput.addEventListener('input', performFilter);
typeFilter.addEventListener('change', performFilter);
renderCards(projects);