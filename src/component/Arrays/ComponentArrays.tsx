import { ComponentSection3 } from "../Lazy/LoaderLazyComponent";
import logoImages from '@/assets/images/mang-two.png';
import Logos from '@/assets/images/mang-one.png';
import MangThree from '@/assets/images/mang-three.png';
import MangFour from '@/assets/images/mang-four.png';
import MangFive from '@/assets/images/mang-five.png'
import ComponentSection5 from "../LandingPage/ComponentSection5";
export const ScroolAnimationLandingPage = [
    {
        id: 1,
        element: <ComponentSection3/>
    },
    {
        id: 1,
        element: <ComponentSection5/>
    }
]

export const TabsTimelineProgres = [
    {
        id: 1,
        path: 'https://trello-attachments.s3.amazonaws.com/60d971af9be4cb1f190fe7cb/501x501/f7ed4160cb63e8ae0d7ac1aa3feb1ce1/1A.png',
        slugh: 'Langkah Pertama',
        imgInfo: Logos,
        text: `<p>Setelah berhasil registrasi, kamu diharuskan untuk upload produk yang akan kamu jual. Dalam upload produk diharapkan sesuai dengan syarat dan ketentuaan upload produk.</p>
        <p>Produk yang kamu upload di Mangseller akan otomatis live di website maupun aplikasi Mangdropship.</p>`
    },
    {
        id: 2,
        path: 'https://trello-attachments.s3.amazonaws.com/60d971af9be4cb1f190fe7cb/501x501/3214d9316aec1b9467efb9099d2aa458/1B.png',
        slugh: 'Langkah Kedua',
        imgInfo: logoImages,
        text: `<p>Karena produk yang kamu upload otomatis ditampilkan di website atau aplikasi Mangdropship, jadi dropshipper dapat langsung menjualkan produkmu kembali.</p>
        <p>Dropshipper menjualkan produkmu dengan cara mempromosikan produkmu di sosial media ataupun e-commerce mereka dengan nama toko dari dropshipper itu sendiri.</p>`
    },
    {
        id: 3,
        path: 'https://trello-attachments.s3.amazonaws.com/60d971af9be4cb1f190fe7cb/501x501/42607a15de2403909fd3f6a195fd2dda/1C.png',
        slugh: 'Langkah Ketiga',
        imgInfo: MangThree,
        text: `<p>Setelah dropshipper mempomosikan produkmu, dropshipper akan mendapatkan orderan dari konsumen.</p>
        <p>Kemudian dropshipper akan order produk tersebut langsung ke kamu.</p>`
    },
    {
        id: 4,
        path: 'https://trello-attachments.s3.amazonaws.com/60d971af9be4cb1f190fe7cb/501x501/05daf6e85ca003c65562186ecbf6f7de/1D.png',
        slugh: 'Langkah Keempat',
        imgInfo: MangFour,
        text: '<p>Setelah dropshipper order produk ke kamu, kamu yang kirim dan kemas produk tersebut ke konsumen dropshipper langsung.</p>'
    },
    {
        id: 5,
        path: 'https://trello-attachments.s3.amazonaws.com/60d971af9be4cb1f190fe7cb/501x501/c2d1c5de11dcef59aa7e693b43a3d172/1E.png',
        slugh: 'Selesai',
        imgInfo: MangFive,
        text:'<p>Ketika produk yang kamu kirim sudah sampai ke konsumen, dana penjualan akan langsung diteruskan ke saldo Mangpay kamu.</p>'
    },
]