    class Hewan5{
    nama: string = '';
    kaki: number = 0;
    
    bernafas() {
        console.log ('nafas');
    }
    }

    class Burung5 extends Hewan5 {
        warna: string = 'merah';
    }

    const burung5 = new Burung5();
    burung5.nama = 'merak';
    burung5.kaki = 2 ;
    burung5.warna = 'kuning';
    console.log(burung5);

    burung5.bernafas()