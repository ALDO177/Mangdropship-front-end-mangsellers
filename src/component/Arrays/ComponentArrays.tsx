import { ComponentSection3 } from "../Lazy/LoaderLazyComponent";
import logoImages from '@/assets/images/mang-two.png';
import Logos from '@/assets/images/mang-one.png';
import MangThree from '@/assets/images/mang-three.png';
import MangFour from '@/assets/images/mang-four.png';
import MangFive from '@/assets/images/mang-five.png'
export const ScroolAnimationLandingPage = [
    {
        id: 1,
        element: <ComponentSection3/>
    },
]

export const TabsTimelineProgres = [
    {
        id: 1,
        path: 'https://trello-attachments.s3.amazonaws.com/60d971af9be4cb1f190fe7cb/501x501/f7ed4160cb63e8ae0d7ac1aa3feb1ce1/1A.png',
        slugh: 'Langkah Pertama',
        imgInfo: Logos,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque nihil magnam illo, amet quaerat. Consequatur natus corrupti sunt nisi.'
    },
    {
        id: 2,
        path: 'https://trello-attachments.s3.amazonaws.com/60d971af9be4cb1f190fe7cb/501x501/3214d9316aec1b9467efb9099d2aa458/1B.png',
        slugh: 'Langkah Kedua',
        imgInfo: logoImages,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eaque magni, nulla iusto quas reprehenderit?'
    },
    {
        id: 3,
        path: 'https://trello-attachments.s3.amazonaws.com/60d971af9be4cb1f190fe7cb/501x501/42607a15de2403909fd3f6a195fd2dda/1C.png',
        slugh: 'Langkah Ketiga',
        imgInfo: MangThree,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, omnis. Cum dolores iusto quisquam ab temporibus iste error possimus nesciunt cumque reprehenderit voluptas eveniet perferendis laborum, accusantium nobis debitis sapiente?'
    },
    {
        id: 4,
        path: 'https://trello-attachments.s3.amazonaws.com/60d971af9be4cb1f190fe7cb/501x501/05daf6e85ca003c65562186ecbf6f7de/1D.png',
        slugh: 'Langkah Keempat',
        imgInfo: MangFour,
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam atque consequatur fugit mollitia distinctio possimus rerum accusamus earum alias delectus nemo perferendis, aut facilis doloremque.'
    },
    {
        id: 5,
        path: 'https://trello-attachments.s3.amazonaws.com/60d971af9be4cb1f190fe7cb/501x501/c2d1c5de11dcef59aa7e693b43a3d172/1E.png',
        slugh: 'Selesai',
        imgInfo: MangFive,
        text:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolorum.'
    },
]