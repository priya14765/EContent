// --- DATA SOURCE (Update this as you get WhatsApp messages) ---
const projects = [
    { roll: "22384108", name: "Gokul", topic: "SJF Scheduling", type: "blog", url: "https://aeroslayys.github.io/Gokul/" },
    { roll: "12", name: "Priya Das", topic: "Banker's Algorithm Guide", type: "blog", url: "#" },
    { roll: "45", name: "Rahul V.", topic: "Memory Management Podcast", type: "audio", url: "#" },
    // Paste new entries below this line
];

const grid = document.getElementById('contentGrid');
const searchInput = document.getElementById('searchInput');
const typeFilter = document.getElementById('typeFilter');

// Function to generate the HTML for each card
function renderCards(data) {
    if (data.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-10 text-slate-400">No results found. Try a different search!</div>`;
        return;
    }

    grid.innerHTML = data.map(item => {
        // Define colors based on content type
        const colors = {
            video: 'border-rose-500 text-rose-600 bg-rose-50',
            audio: 'border-blue-500 text-blue-600 bg-blue-50',
            blog: 'border-emerald-500 text-emerald-600 bg-emerald-50'
        };
        const theme = colors[item.type] || 'border-slate-500 text-slate-600 bg-slate-50';

        return `
            <div class="card-fade-in bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div class="p-6">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-xs font-bold px-2 py-1 rounded-md ${theme} border">
                            ${item.type.toUpperCase()}
                        </span>
                        <span class="text-sm font-mono text-slate-400">#Roll_${item.roll}</span>
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 leading-tight mb-2">${item.topic}</h3>
                    <p class="text-slate-500 text-sm mb-6 flex items-center">
                        <span class="mr-2">👤</span> ${item.name}
                    </p>
                    <a href="${item.url}" target="_blank" class="block w-full text-center bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-indigo-600 transition-colors">
                        View Resource
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

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