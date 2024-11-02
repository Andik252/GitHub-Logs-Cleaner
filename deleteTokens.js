const axios = require('axios');

const owner = 'USERNAME'; // Ganti dengan username GitHub Kamu
const repo = 'REPO_NAME'; // Ganti dengan nama repositori yang ingin bersihkan 
const token = 'YOUR_PERSONAL_ACCESS_TOKEN'; // Ganti dengan token akses pribadi Anda

async function deleteWorkflowLogs() {
    try {
        // Dapatkan semua workflow runs
        const runsResponse = await axios.get(`https://api.github.com/repos/${owner}/${repo}/actions/runs`, {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        const runs = runsResponse.data.workflow_runs;

        for (const run of runs) {
            console.log(`Menghapus log untuk run ID: ${run.id}`);
            
            // Hapus log untuk setiap run
            await axios.delete(`https://api.github.com/repos/${owner}/${repo}/actions/runs/${run.id}`, {
                headers: {
                    'Authorization': `token ${token}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            console.log(`Log untuk run ID: ${run.id} berhasil dihapus`);
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error.response ? error.response.data : error.message);
    }
}

deleteWorkflowLogs();
