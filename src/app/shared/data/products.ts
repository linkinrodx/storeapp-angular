export interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    family: string;
    category: string;
    concentration?: string;
}

export const PRODUCTS: Product[] = [
    { id: 1, name: 'Santal 33', brand: 'LE LABO', price: 280, family: 'wood', category: 'perfume', concentration: 'Eau de Parfum' },
    { id: 2, name: 'Baccarat Rouge 540', brand: 'MAISON FRANCIS KURKDJIAN', price: 345, family: 'oriental', category: 'perfume', concentration: 'Extrait' },
    { id: 3, name: 'Rose Prick', brand: 'TOM FORD', price: 395, family: 'floral', category: 'perfume', concentration: 'Eau de Parfum' },
    { id: 4, name: 'Gypsy Water', brand: 'BYREDO', price: 205, family: 'fresh', category: 'perfume', concentration: 'Eau de Parfum' },
    { id: 5, name: 'Angels\' Share', brand: 'KILIAN', price: 230, family: 'gourmand', category: 'perfume', concentration: 'Eau de Parfum' },
    { id: 6, name: 'English Pear & Freesia', brand: 'JO MALONE', price: 160, family: 'floral', category: 'colonia', concentration: 'Cologne' },
    { id: 7, name: 'Tam Dao', brand: 'DIPTYQUE', price: 180, family: 'wood', category: 'perfume', concentration: 'Eau de Parfum' },
    { id: 8, name: 'Aventus', brand: 'CREED', price: 495, family: 'fresh', category: 'perfume', concentration: 'Eau de Parfum' },
    { id: 9, name: 'Wood Sage & Sea Salt', brand: 'JO MALONE', price: 160, family: 'fresh', category: 'colonia', concentration: 'Cologne' },
    { id: 10, name: 'Lost Cherry', brand: 'TOM FORD', price: 395, family: 'gourmand', category: 'perfume', concentration: 'Eau de Parfum' },
    { id: 11, name: 'Oud Wood', brand: 'TOM FORD', price: 295, family: 'wood', category: 'perfume', concentration: 'Eau de Parfum' },
    { id: 12, name: 'Delina', brand: 'PARFUMS DE MARLY', price: 360, family: 'floral', category: 'perfume', concentration: 'Eau de Parfum' }
];

export const CATEGORIES = [
    { id: 'perfumes', label: 'Perfumes Femeninos' },
    { id: 'colonias', label: 'Colonias' },
    { id: 'maquillaje', label: 'Maquillaje' },
    { id: 'skincare', label: 'Skincare' },
    { id: 'estuches', label: 'Estuches de Regalo' }
];

export const FAMILIES = [
    { id: 'floral', label: 'Floral' },
    { id: 'wood', label: 'Amaderado' },
    { id: 'oriental', label: 'Oriental' },
    { id: 'fresh', label: 'Fresco' },
    { id: 'gourmand', label: 'Gourmand' }
];
