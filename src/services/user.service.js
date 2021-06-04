import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://backend-sipekan.herokuapp.com/';


class UserService {
    getAllIzinKegiatan() {
        console.log({headers: authHeader()})
        return axios.get(API_URL + 'izin-kegiatan/', {headers: authHeader()})
    }

    getIzinKegiatan(id) {
        return axios.get(API_URL + 'izin-kegiatan/' + id, {headers: authHeader() });
    }

    putIzinKegiatan(id, data) {
        return axios.put(API_URL + 'izin-kegiatan/update/' + id + '/', data , {headers: authHeader()})
    }

    getAllRuangan() {
        return axios.get(API_URL + 'api/ruangan/')
    }

    postPerizinanRuanganUnitKerja(data) {
        return axios.post(API_URL + 'peminjaman-ruangan/unit-kerja/', data, { headers: authHeader() })
    }

    getListPerizinanFastur() {
        return axios.get(API_URL + 'peminjaman-ruangan/verifikasi-fastur/',{headers:authHeader()})
    }

    getPeminjamanRuanganByIdIzinKegiatan(id) {
        return axios.get(API_URL + 'peminjaman-ruangan/verifikasi-fastur/' + id + '/')
    }

    getJadwalPeminjamanRuangan() {
        return axios.get(API_URL + 'peminjaman-ruangan/')
    }

    putUpdateStatusDanAlasanPenolakanPeminjamanRuangan(data, id) {
        return axios.put(API_URL + 'peminjaman-ruangan/update-status/' + id + '/', data, { headers: authHeader() })

    }

    getRuangan(id) {
        return axios.get(API_URL + 'api/ruangan/' + id +'/')
    }

    postRuangan(data) {
        return axios.post(API_URL + 'api/ruangan/', data);
    }

    putRuangan(id, data) {
        return axios.put(API_URL + 'api/ruangan/' + id + '/', data)
    }

    deleteRuangan(id) {
        return axios.delete(API_URL + 'api/ruangan/' + id)
    }

    getAllPerizinan() {
        return axios.get(API_URL + 'api/list-perizinan/')
    }

    getPerizinan(id) {
        return axios.get(API_URL + 'api/perizinan/' + id)
    }

    getAllSouvenir() {
        return axios.get(API_URL + 'perizinan-humas/list-souvenir',{ headers: authHeader()})
    }

    postSouvenir(data) {
        return axios.post(API_URL + 'souvenir/', data,{ headers: authHeader()})
    }

    getSouvenir(id) {
        return axios.get(API_URL + 'souvenir/' + id +'/')
    }

    deleteSouvenir(id) {
        return axios.delete(API_URL + 'souvenir/' + id,{ headers: authHeader()});
    }

    putSouvenir(id, data) {
        return axios.put(API_URL + 'souvenir/' + id + '/', data,{ headers: authHeader()});
    }

    putPermintaanProtokoler(id, data) {
        return axios.put(API_URL + 'permintaan-protokoler/' + id + '/', data,{ headers: authHeader()});
    }

    putPermintaanSouvenir(id, data) {
        return axios.put(API_URL + 'permintaan-souvenir/' + id + '/', data,{ headers: authHeader()});
    }

    putPeminjamanRuangan(id, data) {
        return axios.put(API_URL + 'peminjaman-ruangan/' + id + '/', data,{ headers: authHeader()});
    }

    putIzinKegiatanHeader(id, data) {
        return axios.put(API_URL + 'detail-kegiatan/' + id + '/', data,{ headers: authHeader()});

    }

    putIzinKegiatanDetail(id, data) {
        return axios.put(API_URL + 'izin-kegiatan-detail/' + id + '/', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }


    putPerulangan(id, data) {
        return axios.put(API_URL + 'perulangan/' + id + '/', data,{ headers: authHeader()})
    }

    putDetailIzinKegiatan(id, data) {
        return axios.put(API_URL + 'izin-kegiatan/' + id + '/', data,{ headers: authHeader()});

    }

    getJenisPublikasi() {
        return axios.get(API_URL + 'perizinan-humas/jenis-publikasi',{headers: authHeader()});
    }
    getListSouvenir() {
        return axios.get(API_URL + 'perizinan-humas/list-souvenir',{headers: authHeader()});
    }
    postIzinKegiatanHeader(data) {
        return axios.post(API_URL + 'perizinan-kegiatan-header/', data,{headers: authHeader()})
    }
    postIzinKegiatanDetail(data) {
        return axios.post(API_URL + 'perizinan-kegiatan-detail/', data, {
            headers: 
                authHeader()
            
        })
    }
    postPeminjamanRuanganMahasiswa(id, data) {
        return axios.post(API_URL + 'peminjaman-ruangan/mahasiswa/' + id + '/', data,{headers: authHeader()})
    }
    postPermohonanHumas(id, data) {
        return axios.post(API_URL + 'perizinan-humas/' + id + '/', data,{headers: authHeader()})
    }
    postPerizinanPublikasi(data) {
        return axios.post(API_URL + 'perizinan-humas-publikasi/', data, {
            headers: 
                authHeader()
            
        })
    }
    getListPerizinanHumas() {
        return axios.get(API_URL + 'perizinan-humas/verifikasi-humas/',{headers: authHeader()})
    }
    getPerizinanHumasByIdIzinKegiatan(id) {
        return axios.get(API_URL + 'perizinan-humas/verifikasi-humas/' + id + '/',{headers: authHeader()})
    }
    putUpdateStatusDanAlasanPermintaanSouvenir(data, id) {
        return axios.put(API_URL + 'perizinan-humas/update-status-souvenir/' + id + '/', data,{headers: authHeader()})
    }
    putUpdateStatusDanAlasanPermintaanProtokoler(data, id) {
        return axios.put(API_URL + 'perizinan-humas/update-status-protokoler/' + id + '/', data,{headers: authHeader()})
    }
    putUpdateStatusDanAlasanJenisPerizinanPublikasi(data, id) {
        return axios.put(API_URL + 'perizinan-humas/update-status-jenis-izin-publikasi/' + id + '/', data,{headers: authHeader()})
    }

    putPerizinanPublikasi(id, data) {
        return axios.put(API_URL + 'perizinan-publikasi/' + id, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }

    postPengumuman(data) {
        for (var pair of data.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
    
        return axios.post(API_URL + 'pengumuman/create', data, { headers: authHeader() })
    }

    getPengumumanById(id) {
        return axios.get(API_URL + 'pengumuman/' + id, { headers: authHeader() })
    }

    getPengumuman() {
        return axios.get(API_URL + 'pengumuman/')
    }

    putPengumumanById(id, data) {
        return axios.put(API_URL + 'pengumuman/edit/' + id, data, { headers: authHeader() })
    }

    getWaitingPKM() {
        return axios.get(API_URL + 'izin-kegiatan-waiting/', {headers: authHeader()})
    }

    getVerifiedPKM(id, data) {
        return axios.get(API_URL + 'izin-kegiatan-disetujui/', data, {headers: authHeader()})
    }
    getRuanganDetailed() {
        return axios.get(API_URL + 'izin-kegiatan-detailed/', {headers: authHeader()})
    }
    getChartDisetujui() {
        return axios.get(API_URL + 'chart/kegiatan-disetujui/', {headers: authHeader()})
    }
    getChartDitolak() {
        return axios.get(API_URL + 'chart/kegiatan-ditolak/', {headers: authHeader()})
    }
    getChartMenunggu() {
        return axios.get(API_URL + 'chart/kegiatan-menunggu/', {headers: authHeader()})
    }
    getWaitingHumas() {
        return axios.get(API_URL + 'perizinan-humas-disetujui/', {headers: authHeader()})
    }
    getStokSouvenir() {
        return axios.get(API_URL + 'stok-souvenir/', {headers: authHeader()})
    }
}
export default new UserService();