// Audio dosyalarının listesi - Google Drive entegrasyonu
const audioFiles = {
    turkish: [
        { 
            title: "Müminlerin Asıl Yurdu Cennet", 
            fileId: "115gHaA6Y5me2Um6yxoJnAKKGTPeWU8yX" 
        },
        { 
            title: "Ölüm Kıyamet Cehennem", 
            fileId: "1YcFVtRXdKTvuKIG46CWthGBJ47omLUvv" 
        }
    ],
    english: [
        { 
            title: "The-Miracle-of-Creation-in-DNA", 
            fileId: "12NUwiZ9gDvbEVh5nS1Gz7zO28jc9KBFs" 
        },
        { 
            title: "The Miracle in the Ant", 
            fileId: "1VndN6r1hVeuvUEqF3a5DSDYkm-z6skVG" 
        },
        {
            title: "The Miracle of Birth",
            fileId: "1N0XZvn4vz6UlIJwFQk2SlkbPF-yYOYQO"
            
        }
    ]
};

// Sayfa yüklendiğinde dosyaları listele
document.addEventListener('DOMContentLoaded', function() {
    renderAudioList('turkish', audioFiles.turkish);
    renderAudioList('english', audioFiles.english);
});

// Google Drive download linkini oluşturan fonksiyon
function createDownloadLink(fileId) {
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
}

// Audio listesini render eden fonksiyon
function renderAudioList(category, files) {
    const container = document.getElementById(category + '-audio');
    
    if (files.length === 0) {
        container.innerHTML = '<div class="col-12"><p class="text-muted">Henüz dosya eklenmemiş.</p></div>';
        return;
    }
    
    container.innerHTML = files.map((file, index) => `
        <div class="col-md-6 col-lg-4 mb-3">
            <div class="card h-100">
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title">
                        <i class="fas fa-music me-2 text-primary"></i>
                        ${file.title}
                    </h6>
                    <div class="mt-auto">
                        <a href="${createDownloadLink(file.fileId)}" 
                           class="btn btn-primary btn-sm w-100" 
                           download="${file.title}.mp3"
                           target="_blank">
                            <i class="fas fa-download me-2"></i>
                            İndir
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}
