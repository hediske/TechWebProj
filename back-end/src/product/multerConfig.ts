import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { Options } from 'multer'; // Importez directement depuis multer

export const multerConfig: Options = {
    storage: diskStorage({
        destination: './uploads', // Dossier où les fichiers seront sauvegardés
        filename: (req, file, callback) => {
            const uniqueSuffix = `${uuidv4()}${extname(file.originalname)}`;
            callback(null, uniqueSuffix);
        },
    }),
};
