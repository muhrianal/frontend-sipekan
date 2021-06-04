<template>
    <div class="root-class">
        <div class="header">
            <div class="d-flex">
                <h3 class="header-page mr-auto p2">Pengumuman</h3>
                
                <div class="ml-auto p2">
                    <div v-if="(isLoggedIn && isAdmin)">
                    <a href="pengumuman/create"  type="button" class="btn btn-outline-warning" @Click="cancelPeminjaman" id="button-tambah">Tambah Pengumuman</a>                                        
                    </div>
                </div>
            </div>
            <hr class="line-header">
        </div>
        
        <div class="container-fluid">

            <form>
                <div class="form-row">
                    <div class="col-12 col-md-8">
                        <br>
                        <div>       
                               <!-- Search -->
                                <!-- <div class="input-group rounded">
                                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                                        aria-describedby="search-addon" />
                                    <span class="input-group-text border-0" id="search-addon">
                                        <i class="fas fa-search"></i>
                                    </span>
                                </div>
                            
                            <br> -->
                            
                            <div class="pengumuman overflow-auto">
                            <div v-for="pengumuman in daftar_pengumuman" v-bind:key="pengumuman">
                                <div class="card w-100">
                                    <div class="card-body">
                                        <h5 class="card-title">{{pengumuman.nama}}</h5>
                                        <p class="card-text">{{pengumuman.deskripsi}}</p>
                                        <div><a :href="'https://backend-sipekan.herokuapp.com/'+pengumuman.file_pengumuman" :download="pengumuman.file_pengumuman">{{pengumuman.file_pengumuman}}</a></div>
                                        <div class="d-flex flex-row-reverse">
                                            <div v-if="(isLoggedIn && isAdmin)">
                                            <div class="p-2">                                                
                                                <a :href="'pengumuman/edit/' + pengumuman.id" type="button" class="btn btn-warning" id="button-ubah">Ubah</a>                                       
                                            </div>
                                            </div>
                                            <!-- <div class="p-2">                                               
                                                <button type="button" class="btn btn-outline-danger" @click="deletePengumuman(pengumuman.id)" id="button-hapus">Hapus</button>                                                      
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                                <br>
                            </div>
                            </div>                            
                        </div>
                        

                    </div>
                   

                    <div class="col-12 col-md-4 border" id="kegiatanacc">
                        <div>
                            <h6 class="header-page2">Kegiatan Yang Akan Datang</h6>
                        
                        </div>
                        <br>
                        <!-- Search -->
                        <!-- <div class="input-group rounded">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                                aria-describedby="search-addon" />
                            <span class="input-group-text border-0" id="search-addon">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                        <br> -->
                        <div class="table table-responsive overflow-auto" id="listkegiatan">
                            <table class="table table-striped table-sm table-bordered">
                            <tbody id="app" class="fsmall mt-2">
                                <tr v-for="(kegiatan) in kegiatan_disetujui" v-bind:key="kegiatan.id">
                                    <td>{{kegiatan.waktu}}</td>
                                    <td>{{ kegiatan.nama_kegiatan }}
                                        <p>{{ kegiatan.organisasi}} </p>
                                    </td>

                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>    
               

                <br>
                <br>

            </form>
        </div>

    </div>
    
</template>

<script>
import UserService from "../../services/user.service";
import moment from 'moment';


export default {
		name: 'Pengumuman',
        
		data: function() {
		
        return {
            kegiatan_disetujui: [[]],
            daftar_pengumuman: [[]],

            }
        },

        created(){
                UserService.getAllIzinKegiatan().then (
                response => {
                    var tmp = response.data;
                    for (let i = 0; i < tmp.length; i++){
                        if (tmp[i].status_perizinan_kegiatan == 2){
                            var tahun = tmp[i].detail_kegiatan.waktu_tanggal_mulai.slice(0,4);
                            var bulan = tmp[i].detail_kegiatan.waktu_tanggal_mulai.slice(5,7);
                            var tanggal = tmp[i].detail_kegiatan.waktu_tanggal_mulai.slice(8,10);

                            var namaBulan = {"01":"Jan", "02":"Feb", "03":"Mar", "04":"Apr", "05":"May", "06":"Jun", "07":"Jul", "08":"Aug",
                                            "09":"Sep", "10":"Oct", "11":"Nov", "12":"Dec"};
                                
                            
                            var waktu = tanggal + " " + namaBulan[bulan] + " " + tahun;
                            var nama_kegiatan = tmp[i].nama_kegiatan;
                            var organisasi = tmp[i].organisasi;
                            this.kegiatan_disetujui.push({nama_kegiatan, waktu, organisasi});                       
                        }
                    }
                    this.kegiatan_disetujui.shift();


                },
                error => {
                    this.error_message = (error.response && error.response.data) || error.message || error.toString();
                }
            );
            UserService.getPengumuman().then(
                response => {
                    var tmp2 = response.data;
                    var id = 0;
                    for (let i = 0; i < tmp2.length; i++){
                        id = id+1;
                        var nama = tmp2[i].nama;
                        var deskripsi = tmp2[i].deskripsi;
                        var file_pengumuman = tmp2[i].file_pengumuman;
                        this.daftar_pengumuman.push({id, nama, deskripsi, file_pengumuman});
                    }
                    this.daftar_pengumuman.shift();

                },
                error => {
                    this.error_message = (error.response && error.response.data) || error.message || error.toString();
                }
            );
        },

        method:{
            getDateDef : function (date) {
                return moment(date, 'YYYY-MM-DDTHH:mm').format('D MMMM YYYY');
            },

            deletePengumuman(id){
                var sementara = [[]];
                for(let i=0; i< this.daftar_pengumuman.length; i++){
                    if(this.daftar_pengumuman[i+1].id != id){
                        sementara.push(this.daftar_pengumuman[i+1]);
                    }
                }
                this.daftar_pengumuman = sementara;

                
            }

        },

        computed: {
            isLoggedIn() {
                return this.$store.state.auth.status.loggedIn;
            },

            isAdmin() {
                return (this.$store.state.auth.user.role == "ADMIN PKM" || this.$store.state.auth.user.role == "ADMIN FASTUR" || this.$store.state.auth.user.role == "ADMIN HUMAS");
            },
        },
        


    }
</script>

<style>
#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		color: #2c3e50;
		height: 90vh;
		width: 70vw;
		margin-left: auto;
		margin-right: auto;
	}
.root-class {
    background-color: white;
    border-color: #BDBDBD;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    padding: 20px 0px 20px 20px ;
}


#kegiatanacc{
    height:500px;
}

#listkegiatan{
    height:370px;

}

.pengumuman{
    height:500px;
}

.header-page {
    /* padding: 15px 0px 3px 15px; */
    font-size: 23px;
    color: #FFD505;
    font-weight: 550;
}

.header-page2 {
    /* padding: 15px 0px 3px 15px; */
    margin-top: 10px;
    font-size: 18px;
    color: #FFD505;
    font-weight: 550;
    text-align: center;
}

.line-header {
    background-color: #BDBDBD ;
}

.note-form{
    font-size: 12px;
}


.search-container {
    float: right;
}

input[type=text] {
    padding: 6px;
    margin-top: 8px;
    font-size: 15px;
    border-color: gainsboro;
    }

.search-container button {
    float: right;
    padding: 6px 10px;
    margin-top: 8px;
    margin-right: 16px;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
}

#button-hapus{
    width: 80px;
    height: 35px;
    font-size: 15px;
}

#button-ubah{
    width: 80px;
    height: 35px;
    font-size: 15px;
}
</style>