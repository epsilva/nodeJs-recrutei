import Post from '../models/Post';

class CountController {
    async index(req, res) {
        const postsDoc = await Post.findAll({
            attributes: [
                'id'
            ],
            where: {
                'tipo': 'Documentos'
            }
        });

        const postsPag = await Post.findAll({
            attributes: [
                'id'
            ],
            where: {
                'tipo': 'Páginas'
            }
        });

        const postsTut = await Post.findAll({
            attributes: [
                'id'
            ],
            where: {
                'tipo': 'Tutoriais'
            }
        });

        const postsReu = await Post.findAll({
            attributes: [
                'id'
            ],
            where: {
                'tipo': 'Reunião'
            }
        });

        const count = {
            documentos: postsDoc.length,
            paginas: postsPag.length,
            tutoriais: postsTut.length,
            reunioes: postsReu.length
        }

        return res.json(count);
    }
}

export default new CountController;
