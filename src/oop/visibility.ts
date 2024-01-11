    // public
    // protected 
    // private 

        class Hewan8 {
        public nama: string;
        private kaki: number;
        protected mamalia: boolean;

            constructor(nama: string, kaki: number, mamalia: boolean) {
                this.nama = nama;
                this.kaki = kaki;
                this.mamalia = mamalia;
            }
        
        berjalan() {
            
        }
    }
    class Katak8 extends Hewan8 {
        private umurTelur: number = 4;
        private umurKecebong: number = 7;
        private umurKatak : number = 90;

        getUmur(){
            console.log(this.umurTelur + this.umurKecebong + this.umurKatak);
            
        }
    }

    const katak8 = new Katak8('katak bakar', 4,false);