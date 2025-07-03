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
            
        },
        {
            title: "The Collapse of Theory of Evolution",
            fileId: "1oV5ZsKWKMgwMpq_m5UTlhAjVARG_bwH_"
        },
        {
            title: "The Miracle in the Ear",
            fileId: "1yXBCcy0glAygj0uR4bNnGDyuqW-C3U8E"
        },
        {
            title: "The Miracle of Design in the Cell",
            fileId: "1p6KH53UOQ_Ejb-5m9CUHEC-AfjSBWe88"
        },
         {
            title: "The Miracle in the Eye",
            fileId: "1XkaN6JEvezAXFG2QE6PLasdFJLWZFVh8"
        },
         {
            title: "The Miracle of the Honeybee",
            fileId: "17zmrnTWsE0ZENYXO6g92muEPImWz6CW8"
        },
         {
            title: "Before You Regret",
            fileId: "1afqatIdMyfWduEsk7JRZWCwKMDM4rGH7"
        },
         {
            title: "Miracles of the Quran",
            fileId: "1p0dcrfCURDkVI9MNndH-WM0SjpGCPhR2"
        },
         {
            title: "Timelessness and the Reality of Fate",
            fileId: "1CK-AVe63rcYiYUWHmOVef4k5tJgfsQRl"
        },
         {
            title: "Migration and Orientation in Animals",
            fileId: "1K4YdNQDmG5NXxofU4FMKR4M7jhWWyDsr"
        },
         {
            title: "Death Resurrection and Hell",
            fileId: "1r0Uy2RaFLR19C1e_TPl9dwFKy_0I2qVH"
        },
         {
            title: "How do the Unwise Interpret the Quran",
            fileId: "1SVkMJ3iEeQe9jMucZjGloQKcn9_v2fy2"
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
