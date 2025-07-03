// Audio dosyalarının listesi
const audioFiles = {
    turkish: [
        // Örnek: { title: "Dosya Adı", filename: "dosya-adi.mp3" }
    ],
    english: [
        // Örnek: { title: "File Name", filename: "file-name.mp3" }
    ]
};

// Sayfa yüklendiğinde dosyaları listele
document.addEventListener('DOMContentLoaded', function() {
    renderAudioList('turkish', audioFiles.turkish);
    renderAudioList('english', audioFiles.english);
});

// Audio listesini render eden fonksiyon
function renderAudioList(category, files) {
    const container = document.getElementById(category + '-audio');
    
    if (files.length === 0) {
        container.innerHTML = '<div class="col-12"><p class="text-muted">Henüz dosya eklenmemiş.</p></div>';
        return;
    }
    
    container.innerHTML = files.map((file, index) => `
        <div class="col-md-6 col-lg-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">
                        <i class="fas fa-music me-2"></i>
                        ${file.title}
                    </h6>
                    <a href="assets/${category}/${file.filename}" 
                       class="btn btn-primary btn-sm" 
                       download="${file.filename}">
                        <i class="fas fa-download me-2"></i>
                        İndir
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}
