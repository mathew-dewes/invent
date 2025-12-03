import { Roboto, DM_Sans } from "next/font/google";

export const robotoFont = Roboto({
    subsets:['latin'],
    display: 'swap',
    variable:'--font-roboto'
});

export const dmSansFont = DM_Sans({
    subsets:['latin'],
    display: 'swap',
    variable:'--font-dm-sans'
});