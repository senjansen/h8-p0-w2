var nama = 'Mikael';
var peran = '';

if (nama === '' && peran === '') {
    console.log('Nama harus diisi!');
} else if (nama === 'Mikael' && peran === '' )  {
    console.log('halo ' + nama + ', Pilih peranmu untuk memulai game!');
} else if (nama === 'Nina' && peran === 'Ksatria') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama + '\n' + 'Halo ' + peran + ' ' +  nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (nama === 'Danu' && peran === 'Tabib') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama + '\n' + 'Halo ' + peran + ' ' +  nama + ', kamu akan membantu temanmu yang terluka.');
} else if (nama === 'Zero' && peran === 'Penyihir') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama + '\n' + 'Halo ' + peran + ' ' +  nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
} else {
    console.log('invalid');
}